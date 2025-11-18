# node-poppler-win32

[![GitHub release](https://img.shields.io/github/release/Fdawgs/node-poppler-win32.svg)](https://github.com/Fdawgs/node-poppler-win32/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-poppler-win32)](https://npmjs.com/package/node-poppler-win32)
[![CI](https://github.com/Fdawgs/node-poppler-win32/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/node-poppler-win32/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/node-poppler-win32/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/node-poppler-win32?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> 64-bit Poppler Windows binaries packaged for Node.js

## Overview

This package provides 64-bit Windows Poppler binaries packaged up into a Node.js module to make it easier to include in Node-based applications.
It is intended for use with the [node-poppler](https://github.com/Fdawgs/node-poppler) package but can be used independently.

## Installation

Install using `npm`:

```bash
npm i node-poppler-win32
```

## Example Usage

```js
const popplerPath = require("node-poppler-win32");
console.log(`poppler binaries path: ${popplerPath}`);
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

- [**Albert Astals Cid**](https://github.com/albert-astals-cid-kdab) - [Poppler](https://poppler.freedesktop.org/) developer
- [**Filipe Fernandes**](https://github.com/ocefpaf/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Peter Williams**](https://github.com/pkgw/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Owen Schwartz**](https://github.com/oschwartz10612) - [poppler-windows](https://github.com/oschwartz10612/poppler-windows) developer
- [**Uwe Korn**](https://github.com/xhochy/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer
- [**Xylar Asay-Davis**](https://github.com/xylar/) - [poppler-feedstock](https://github.com/conda-forge/poppler-feedstock) maintainer

## License

`node-poppler-win32` is licensed under the [GPL-3.0 or later](./LICENSE) license.
