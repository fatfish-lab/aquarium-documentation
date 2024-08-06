import { dirname } from "jsr:@std/path@1.0.0";
import collectionBruToJson from 'npm:@usebruno/lang@0.15.0/v2/src/collectionBruToJson.js';
import bruToJson from 'npm:@usebruno/lang@0.15.0/v2/src/bruToJson.js';
import envToJson from 'npm:@usebruno/lang@0.15.0/v2/src/envToJson.js';

const collectionBruFile = 'src/api/rest/collection.bru';
const collectionContent = await Deno.readTextFile(collectionBruFile);
const collection = collectionBruToJson(collectionContent);

const envs = []
const envsDir = 'src/api/rest/environments';
for await (const dirEntry of Deno.readDir(envsDir)) {
  if (dirEntry.isFile && dirEntry.name.endsWith('.bru')) {
    const envContent = await Deno.readTextFile(`${envsDir}/${dirEntry.name}`);
    envs.push(envToJson(envContent));
  }
}

export default async function brunoLoader(path: string) {
  const directory = dirname(path)
  if (directory.endsWith('environments')) return { url: false };

  const page = {
    templateEngine: 'markdown',
    lang: 'en',
    nav_order: 10,
    layout: 'bruno/index.vto',
    bruno: null,
    content: null,
  }
  const content = await Deno.readTextFile(path);


  if (path.endsWith('collection.bru')) {
    page.bruno = collection;
    page.title = 'REST API'
    page.basename = 'index'
  } else {
    page.bruno = bruToJson(content)
    page.bruno.collection = collection;
    const method = page.bruno.http.method.toLowerCase();
    page.chip = method;
    page.title = page.bruno.meta.name
    if (page.bruno.meta.seq) {
      page.nav_order = Number(page.bruno.meta.seq) * 10
    }
  };

  if (page.bruno && 'docs' in page.bruno) page.content = page.bruno.docs;

  return page
}