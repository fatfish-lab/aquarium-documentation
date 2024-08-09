# Aquarium documentation

This repository contains the documentations for [Aquarium](https://fatfi.sh/aquarium), a software developed by the [Fatfish Lab](https://fatfi.sh).

![Aquarium documentation logo](src/_medias/documentation_logo.png)

This documentation use [Lume](https://lume.land) to generate the static website. The content is written in Markdown. The REST API documentation is generated using [Bruno](https://www.usebruno.com)

You are free to contribute to this documentation by submitting a pull request. You can also clone this repository and generate the documentation locally and customize it to your needs.

## Table of contents

All the content of the documentation is available in the [`src` folder](src). It's organized in few main categories:

- **Web**: The web interface of Aquarium
- **API**: The API of Aquarium
- **How-to**: Guides on how to use Aquarium
- **Integrations**: Guides of the integrations available in Aquarium

A script is responsible to generate screenshots of the web interface of Aquarium. It's stored in the [screenshot folder](screenshot/screenshot.ts). Refer to its dedicated [README](screenshot/README.md) for more information.

Another script is available to check all dead links in the documentation. To run it, use the command `deno task 404`. This script have one option available: `--exclude` to specify domains to exclude from the check. Example: `deno task 404 --exclude google.com --exclude github.com`.

## Installation

1. Install [Deno](https://docs.deno.com/runtime/manual/#install-deno)
2. Run the dev server with: `deno task dev`



