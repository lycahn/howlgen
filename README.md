[npm]: https://img.shields.io/npm/v/%40lycahn%2Fhowlgen
[npm-url]: https://www.npmjs.com/package/@lycahn/howlgen

[![npm][npm]][npm-url]

# howlgen

🍣 A TypeScript/JavaScript plugin to generate random usernames based on (mostly) forest creatures.

## Requirements

This plugin does not include `TypeScript` or `tslib` as a dependency, you must install those yourself.

## Install

Using npm:

```console
npm install @lycahn/howlgen
```

## Usage

Create a project and import the plugin:

```js
import { getRandomUsername } from "@lycahn/howlgen";
```

or

```js
const { getRandomUsername } = require("@lycahn/howlgen");
```

Then you can call it like this:

```js
const username = getRandomUsername();
console.log(username); //for example: Wise Wolf
```

## Issues

If you enountered an issue, please open new one on [GitHub](https://github.com/lycahn/howlgen/issues).

Issues and bugs are more than welcome, as they help to improve the plugin.

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](https://github.com/lycahn/howlgen?tab=MIT-1-ov-file)
