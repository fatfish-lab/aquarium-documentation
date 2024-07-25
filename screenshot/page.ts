import "@std/dotenv/load";

import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import type { Browser, Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

import { parseSetCookies } from "./utils.ts";

const url = new URL('/v1/signin', Deno.env.get("AQ_API"))

const signin = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-aquarium-domain": Deno.env.get("AQ_DOMAIN")
  },
  body: JSON.stringify({
    "email": Deno.env.get("AQ_EMAIL"),
    "password": Deno.env.get("AQ_PASSWORD")
  })
})

if (!signin.ok) {
  throw new Error(`Failed to sign in: ${signin.statusText}`)
}

export class Session {
  me: Record<string, unknown> | null
  cookies: Record<string, unknown>[]
  browser: Browser
  page: Page

  constructor(me: Record<string, unknown>, cookies: Record<string, unknown>[], browser: Browser, page: Page) {
    this.me = me
    this.cookies = []
    this.browser = browser
    this.page = page

    cookies.forEach((cookie) => {
      cookie.domain = 'localhost'
      // @ts-ignore, Can't find type for CookieParam
      this.page.setCookie(cookie)
    })

  }

  static async new() {
    const me = (await signin.json()).user
    const cookies = parseSetCookies(signin.headers.getSetCookie())

    const options = {
      devtools: Boolean(Deno.env.get("DEBUG")),
    }
    const browser = await puppeteer.launch(options);

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(`http://localhost:3000/${me._key}`)
    await page.evaluate(() => {
      localStorage.setItem('alreadyRecoChrome', 'true');
    })

    const session = new Session(me, cookies, browser, page)

    return session
  }

  close() {
    return this.browser.close()
  }
}
