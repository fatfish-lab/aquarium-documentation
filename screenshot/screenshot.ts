import { Session } from "./page.ts";
import { getAllScreenshots, log } from "./utils.ts";
import vento from "https://deno.land/x/vento@v1.12.10/mod.ts";
import { parseArgs } from "@std/cli/parse-args";


const args = parseArgs(Deno.args)
if (args.debug || args.d) {
  Deno.env.set("DEBUG", "true")
}


const isDebug = Boolean(Deno.env.get("DEBUG"))
const screenshotsNames = args._

const v = vento()
const screenshots = (await getAllScreenshots(args.path)).filter((screenshot) => {
  return screenshotsNames.length === 0 || screenshotsNames.includes(screenshot.name)
})

const session = await Session.new()
const ventoData: Record<string, unknown> = {
  me: session.me
}
const projectKey = Deno.env.get("AQ_PROJECT")
if (projectKey) {
  ventoData.project = await session.aq.get(`items/${Deno.env.get("AQ_PROJECT")}`)
}

for (const screenshot of screenshots) {
  const path = await v.runString(screenshot.url, ventoData)
  const url = new URL(path.content, Deno.env.get("AQ_WEB")).toString()

  log.info(`Taking ${screenshot.name} screenshot of ${url}`)

  if (screenshot.localStorage) {
    await session.page.evaluate((dataToStore: Record<string, unknown>) => {
      for (const [key, value] of Object.entries(dataToStore)) {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }, screenshot.localStorage)
  }

  await session.page.goto(url, {
    waitUntil: "networkidle0",
  })

  if (screenshot.click) {
    for (const click of screenshot.click) {
      if (click.length == 0) {
        log.info(`Waiting for network idle`)
        await session.page.waitForNetworkIdle()
      } else {
        log.info(`Click on ${click}`)
        await session.page.waitForSelector(click)
        await session.page.click(click)
        log.info(`* Clicked`)
      }
    }
  }

  if (screenshot.scrollTo) {
    await session.page.waitForSelector(screenshot.scrollTo)
    await session.page.$eval(screenshot.scrollTo, (el) => {
      el.scrollIntoView()
    })
  }

  if (screenshot.focus) {
    for (const focus of screenshot.focus) {
      await session.page.$eval("body", (body) => {
        body.style.padding = "52px";
      })

      await session.page.waitForSelector(focus.selector)

      let innerHTML = ""

      if (focus.type === "arrow") {
        innerHTML = `<svg clip-rule="evenodd" fill-rule="evenodd" height="108" stroke-linecap="round" stroke-miterlimit="10" width="82"><clipPath id="a"><path clip-rule="evenodd" d="m26.889-1.224h115.092v140.644h-115.092z"/></clipPath><g transform="matrix(.704584 0 0 .765366 -18.9458 .936473)"><path d="m26.889-1.224h115.092v140.644h-115.092z" fill="none"/><g clip-path="url(#a)"><g fill="none" stroke="var(--${focus.color || 'orange-50'})" stroke-width="6px" transform="matrix(1.41928 0 0 1.30657 26.889174832 -1.22352)"><path d="m77.994 96.091.097 8.485-8.485.096"/><path d="m2.757 3.644c12.438 103.884 98.003 66.301 62.174 32.475-24.748-23.365-37.362-7.197-27.581 17.381 7.617 19.141 22.51 33.275 40.741 51.076" stroke-linejoin="round" stroke-miterlimit="2"/></g></g></g></svg>`
      } else if (focus.type === "circle") {
        innerHTML = `<strong>${focus.content}</strong>`
      }

      await session.page.evaluate((focus, innerHTML) => {
        const elementToFocus = document.querySelector(focus.selector)
        if (!elementToFocus) return

        const { x, y, left, top } = elementToFocus.getBoundingClientRect()
        const elementToAdd = document.createElement("div")
        elementToAdd.innerHTML = innerHTML
        elementToAdd.style.position = "absolute"
        elementToAdd.style.pointerEvents = "none"
        let width = "52px"
        let height = "52px"
        let absTop = `${y}px`
        let absLeft = `${x}px`

        if (focus.type === "arrow") {
          width = '82px'
          height = '108px'
          absLeft = `calc(${x}px - 82px + 12px)`
          absTop = `calc(${y}px - 108px + 12px)`
        } else if (focus.type === "circle") {
          absLeft = `calc(${x}px - ${width} / 2)`
          absTop = `calc(${y}px - ${width} / 2)`
          elementToAdd.style.display = "flex"
          elementToAdd.style.alignItems = "center"
          elementToAdd.style.justifyContent = "center"
          elementToAdd.style.background = `var(--${focus.color || 'orange-50'})`
          // elementToAdd.style.opacity = "0.8"
          elementToAdd.style.color = "var(--bg-00)"
          elementToAdd.style.textShadow = "1px 1px 2px var(--text-30)"
          elementToAdd.style.borderRadius = height
          elementToAdd.style.padding = "8px"
          elementToAdd.style.border = `solid 2px var(--text-00)`
          elementToAdd.style.fontSize = "2em"
        }

        elementToAdd.style.left = absLeft
        elementToAdd.style.top = absTop
        elementToAdd.style.width = width
        elementToAdd.style.height = height
        elementToAdd.style.zIndex = "9999"
        document.body.appendChild(elementToAdd)

        if (focus.vignetting === true) {
          const referenceX = left + window.scrollX
          const referenceY = top + window.scrollY
          const vignette = document.createElement("div")
          vignette.style.position = "absolute"
          vignette.style.width = "100%"
          vignette.style.height = "100%"
          vignette.style.top = `0`
          vignette.style.left = `0`
          vignette.style.background = `radial-gradient(circle at ${referenceX}px ${referenceY}px, transparent 15%, rgba(0, 0, 0, 0.5) 30%)`
          // Blur is not working in Chromium
          // vignette.style.backdropFilter = "blur(2px)"
          // vignette.style.maskImage = `radial-gradient(circle at ${referenceX}px ${referenceY}px, transparent 20%, rgb(0, 0, 0) 35%)`
          vignette.style.pointerEvents = "none"
          vignette.style.zIndex = "9998"
          document.body.appendChild(vignette)
        }
      }, focus, innerHTML)

      if (focus.hover) {
        await session.page.hover(focus.selector)
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }


  await session.page.screenshot({ path: `src/_medias/${screenshot.name}.png` })
}

if (!isDebug) await session.close()