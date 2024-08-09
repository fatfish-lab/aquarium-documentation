---
id: typescript
title: Typescript
lang: en
nav_order: 10
---

# Typescript

Aquarium typescript API is a tool that allows [Aquarium Studio](https://fatfi.sh/aquarium) users to interact with there data directly from JS.

![aquarium-ts-logo](https://storage.googleapis.com/fatfishlab-public/aquarium-studio-website/aquarium-ts-logo.png)

This package is still in early access. Open issues or contact our [support team](../../contact.md) if you are looking for more functions.

```js

import Aquarium from '@fatfish-lab/aquarium-ts-api'

const aq = new Aquarium('https://studio.aquarium.app')

await aq.signin(AQ_USER, AQ_PASSWORD)

```

## Installation

### NPM

Our package is available on [Github NPM registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

1. In the same directory as your package.json file, create or edit an .npmrc file to include a line specifying GitHub Packages URL and the namespace where the package is hosted.
`@fatfish-lab:registry=https://npm.pkg.github.com`
2. Install the package
`npm install --save-dev @fatfish-lab/aquarium-ts-api`

### Deno

Simply import the package from the github repository:

`import Aquarium from https://github.com/fatfish-lab/aquarium-ts-api/blob/main/index.ts`

## Usage

### Signin

```js
import Aquarium from '@fatfish-lab/aquarium-ts-api'

const aq = new Aquarium('https://studio.aquarium.app')

await aq.signin(AQ_USER, AQ_PASSWORD)
```

### Requests

The package is very basic and only provide a `get`, `post`, `patch`, `put` and `delete` functions to interact with the API.

Check out the [REST API documentation](../../rest) for the list of all endpoints

> Example: Get all projects
> ```js
> const meshql = '# $Project'
> const projects = await aq.post('query', { meshql })
> ```