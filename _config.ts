import lume from "lume/mod.ts"

import documentation from "documentation/mod.ts"

const site = lume({
  src: "./src",
  location: new URL("https://docs.aquarium.app")
})

const options = {
  bruno: {
    enabled: true,
    collection: "src/api/rest/collection.bru"
  }
}

site.use(documentation(options))
site.copy("_medias")

export default site
