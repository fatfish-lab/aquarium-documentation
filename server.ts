import Server from "https://deno.land/x/lume@v2.2.4/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.start();