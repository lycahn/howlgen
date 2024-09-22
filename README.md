[npm]: https://img.shields.io/npm/v/polish-random-username
[npm-url]: https://www.npmjs.com/package/polish-random-username

[![npm][npm]][npm-url]

# polish-random-username

🍣 A TypeScript/JavaScript plugin to generate polish random usernames based on polish language.

## Requirements

This plugin does not include TypeScript or tslib as a dependency, you must install those yourself.

## Install

Using npm:

```console
npm install polish-random-username
```

## Usage

Create a project and import the plugin:

```js
import { getRandomUsername } from "polish-random-username";
```

or

```js
const { getRandomUsername } = require("polish-random-username");
```

Then you can call it like this:

```js
const username = getRandomUsername();
console.log(username); //for example: Szczęśliwy Jaguar
```

## Issues

If you enountered an issue, please open new one on [GitHub](https://github.com/szymonwilczek/polish-random-username/issues).

Issues and bugs are appreciated and could be following:

- wrong username generation
- wrong username validation
- wrong output
- wrong gender recognition
- wrong last letter recognition
- problems with installing package
- problems with used dependencies

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](https://github.com/szymonwilczek/polish-random-username/blob/main/LICENSE.md)
