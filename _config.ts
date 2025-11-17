import lume from "lume/mod.ts"

import documentation from "documentation/mod.ts"
import { posthog } from "posthog/mod.ts"

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
site.use(posthog({
  apiKey: Deno.env.get("POSTHOG_API_KEY") ?? "",
  options: {
    api_host: Deno.env.get("POSTHOG_API_HOST") ?? "",
    ui_host: Deno.env.get("POSTHOG_UI_HOST") ?? "",
    defaults: "2025-05-24",
    person_profiles: "identified_only",
  }
}))
site.copy("_medias")

export default site
