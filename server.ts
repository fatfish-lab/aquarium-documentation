import Server from "https://deno.land/x/lume@v2.2.4/core/server.ts";
import { parseArgs } from "jsr:@std/cli/parse-args";
import { walk } from "jsr:@std/fs/walk";
import { DOMParser, Element } from "jsr:@b-fuze/deno-dom";

const args = parseArgs(Deno.args, {
  boolean: ["404"],
  string: ["port"],
  collect: ["exclude"],
})


const server = new Server({
  port: args.port ? Number(args.port) : 8010,
  root: `${Deno.cwd()}/_site`,
});

async function searchFor404() {
  if (args.exclude) {
    console.log('Excluding URL using:', args.exclude);
  }

  const base = `http://localhost:${args.port || 8010}`;
  // Walk to find all .html files
  for await (const file of walk(`${Deno.cwd()}/_site`, { exts: ["html"] })) {
    const html = await Deno.readTextFile(file.path);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const anchors = doc.querySelectorAll("a");

    for (const anchor of anchors) {
      const href = anchor.getAttribute("href");
      if (!href) continue;
      if (href.startsWith("mailto")) continue;

      let url
      try {
        if (!href.startsWith("http")) {
          const location = file.path.split("/_site/")[1].replace('index.html', '');
          url = new URL(href, `${base}/${location}`);
        } else {
          url = new URL(href);
        }
      } catch (e) {
        throw new Error(`Invalid URL: ${href} on file ${file.path}`);
      }

      const response = await fetch(url.href);
      if (response.ok === false) {
        const domainToExclude = args.exclude as string[] || [];
        if (domainToExclude.some((e) => url.toString().includes(e))) continue;
        console.error(`- ${file.path} --> ${href} | ${url.href}`);
      }
    }
  }
}

if (args['404']) {

  server.addEventListener("start", () => {
    searchFor404();
  });
}

try {
  server.start();
} catch (e) {
  if (e instanceof Deno.errors.AddrInUse && args['404']) searchFor404();
  else throw e;
}
