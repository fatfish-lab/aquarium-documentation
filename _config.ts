import lume from "lume/mod.ts";

import nav from "lume/plugins/nav.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";

import attributes from "lume/plugins/attributes.ts";
import sass from "lume/plugins/sass.ts";

import digitalOceanMd from "npm:@digitalocean/do-markdownit";
import multilanguage from "lume/plugins/multilanguage.ts";
import pagefind from "lume/plugins/pagefind.ts";
import prism from "lume/plugins/prism.ts";
import 'npm:prismjs@1.29.0/components/prism-json.js';
import 'npm:prismjs@1.29.0/components/prism-python.js';
import mermaid from "./src/_plugins/markdown/mermaid.js";
import card from "./src/_plugins/markdown/card.js";
import brunoLoader from "./src/_plugins/bruno.ts";


const markdown = {
  plugins: [mermaid, card, [digitalOceanMd, { prismjs: false, user_mention: false }]],
};

const site = lume({
  src: "./src",
  location: new URL("https://docs.aquarium.app"),
  server: {
    page404: "./404.html",
  },
  watcher: {
    ignore: [
      "/.git",
      (path) => path.endsWith("/.DS_Store"),
      (path) => path.endsWith("/_screenshots.json"),
    ],
  },
}, { markdown });

site.use(resolveUrls());
site.use(toc({
  level: 1
}));
site.use(pagefind({
  ui: {
    containerId: "search",
    showImages: true,
    excerptLength: 0,
    showEmptyFilters: false,
    showSubResults: false,
    resetStyles: true,
    openFilters: ['topic']
  }
}));
site.use(nav());
site.use(attributes());
site.use(sass({
  extensions: [".scss"],
  includes: "_includes/styles",
}));
site.use(prism());

site.loadPages([".bru"], {
  loader: brunoLoader
})

site.use(multilanguage({
  languages: ["en", "fr"],
  defaultLanguage: "en",
}))

site.copy("_medias");
site.copy("_styles");
site.copy("_js");

site.mergeKey("id", "array");
site.mergeKey("pagefind", "object");


export default site;
