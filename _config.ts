import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";

// import lumocs from "lumocs/mod.ts";

import attributes from "lume/plugins/attributes.ts";
import sass from "lume/plugins/sass.ts";

import digitalOceanMd from "npm:@digitalocean/do-markdownit";
import multilanguage from "lume/plugins/multilanguage.ts";
import pagefind from "lume/plugins/pagefind.ts";
import prism from "lume/plugins/prism.ts";


const markdown = {
  plugins: [[digitalOceanMd, { prismjs: false, user_mention: false }]],
};

const site = lume({
  src: "./src",
  location: new URL("https://docs.aquarium.app"),
  server: {
    page404: "./404.html",
  },
}, { markdown });

// site.use(lumocs());
site.use(toc({
  level: 1
}));
site.use(pagefind());
site.use(nav());
site.use(attributes());
site.use(sass({
  extensions: [".scss"],
  includes: "_includes/styles",
}));
site.use(prism());


site.use(multilanguage({
  languages: ["en", "fr"],
  defaultLanguage: "en",
}))

site.copy("_medias");
site.copy("_styles");
site.copy("_js");

export default site;
