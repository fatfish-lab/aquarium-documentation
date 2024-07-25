export * as log from "https://deno.land/std@0.218.2/log/mod.ts"

export function parseSetCookies(headers) {
  return headers.map(header => {
    const cookieObj = {};

    // Split the header into key-value pairs and attributes
    const parts = header.split(/; */);

    parts.forEach((part, index) => {
      const [key, ...valueParts] = part.split('=');
      const value = valueParts.join('=').trim();

      if (index === 0) {
        // This is the main cookie part
        cookieObj.name = key.trim();
        cookieObj.value = value;
      } else {
        // These are the attributes
        cookieObj[key.trim()] = value === '' ? true : value;
      }
    });

    const url = new URL(Deno.env.get('AQ_API') || 'http://localhost:8000');

    // Convert the object to a CookieParam object compatible with Puppeteer
    const cookieParam = {
      name: cookieObj.name,
      value: cookieObj.value,
      domain: url.hostname,
      path: cookieObj.path || '/',
      expires: cookieObj.expires ? new Date(cookieObj.expires).getTime() / 1000 : undefined,
      httpOnly: !!cookieObj.httpOnly,
      secure: !!cookieObj.secure,
      sameSite: cookieObj.sameSite
    };

    return cookieParam;
  });
}

interface Screenshot {
  name: string;
  url: string;
  click: string[]
  focus: {
    selector: string
    type: 'arrow'
    color: string
    content: string
    vignetting: boolean
  }[]
}

export async function getAllScreenshots(rootPath = 'src') {
  const screenshots: Screenshot[] = [];

  const getScreenshots = async (path) => {
    for await (const entry of Deno.readDir(path)) {
      if (entry.isFile && entry.name === "_screenshots.json") {
        const file = await Deno.readTextFile(`${path}/${entry.name}`);
        screenshots.push(...JSON.parse(file));
      } else if (entry.isDirectory) {
        await getScreenshots(`${path}/${entry.name}`);
      }
    }
  }
  await getScreenshots(rootPath);

  if (screenshots.length === 0) {
    throw new Error('No screenshots)');
  }

  return screenshots;
}