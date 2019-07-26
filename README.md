# Textile binary installation module for Node _(npm-go-textile)_

[![Made by Textile](https://img.shields.io/badge/made%20by-Textile-informational.svg?style=popout-square)](https://textile.io)
[![Chat on Slack](https://img.shields.io/badge/slack-slack.textile.io-informational.svg?style=popout-square)](https://slack.textile.io)
[![Keywords](https://img.shields.io/github/package-json/keywords/textileio/npm-go-textile.svg?style=popout-square)](./package.json)

[![GitHub package.json version](https://img.shields.io/github/package-json/v/textileio/npm-go-textile.svg?style=popout-square)](./package.json)
[![npm (scoped)](https://img.shields.io/npm/v/@textile/go-textile.svg?style=popout-square)](https://www.npmjs.com/package/@textile/go-textile)
[![node (scoped)](https://img.shields.io/node/v/@textile/go-textile.svg?style=popout-square)](https://www.npmjs.com/package/@textile/go-textile)
[![GitHub license](https://img.shields.io/github/license/textileio/npm-go-textile.svg?style=popout-square)](./LICENSE)
[![David](https://img.shields.io/david/dev/textileio/npm-go-textile.svg)](https://david-dm.org/textileio/npm-go-textile)
[![CircleCI branch](https://img.shields.io/circleci/project/github/textileio/npm-go-textile/master.svg?style=popout-square)](https://circleci.com/gh/textileio/npm-go-textile)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=popout-square)](https://github.com/RichardLitt/standard-readme)
[![docs](https://img.shields.io/badge/docs-master-success.svg?style=popout-square)](https://textileio.github.io/npm-go-textile/)

> Official Textile binary installation module for Node/npm

Join us on our [public Slack channel](https://slack.textile.io/) for news, discussions, and status updates.

## Table of Contents

- [Background](#background)
- [Usage](#usage)
- [Development](#development)
- [Documentation](#documentation)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
- [License](#license)
- [About](#about)

## Background

[Textile](https://www.textile.io) provides encrypted, recoverable, schema-based, and cross-application data storage built on [IPFS](https://github.com/ipfs) and [libp2p](https://github.com/libp2p). We like to think of it as a decentralized data wallet with built-in protocols for sharing and recovery, or more simply, **an open and programmable iCloud**.

## Usage

This module installs `go-textile` from npm. It uses `@textile/npm-go-textile` to download the latest/specified version of `go-textile`, and is kept in sync with `go-textile` releases.

For more control over installing `go-textile` in JS projects, see [`@textile/go-textile`](https://github.com/textileio/npm-go-textile).

### Install globally

You can install `go-textile` globally, which is useful for fetching the latest go-textile installation, running tutorials/workshops, or just generally playing around with Textile from the comfort of tools you already know and use:

```sh
npm install -g @textile/go-textile
textile version
```

### Install locally

```sh
npm install @textile/go-textile
textile version
```

## Development

**Note**: The file `bin/textile` is a placeholder; when downloading stuff, it gets replaced. Do not commit this file, as then you would be commiting a large binary and publishing it to npm!

```sh
# Run all the unit tests
yarn test

# Lint everything
# NOTE: Linting uses `prettier` to auto-fix styling issues when possible
yarn lint
```

You can also compile the Typescript yourself with:

```sh
yarn build
```

## Maintainer

[Carson Farmer](https://github.com/carsonfarmer)

## Contributing

This library is a work in progress. As such, there's a few things you can do right now to help out:

  * Ask questions! We'll try to help. Be sure to drop a note (on the above issue) if there is anything you'd like to work on and we'll update the issue to let others know. Also [get in touch](https://slack.textile.io) on Slack.
  * Log bugs, [file issues](https://github.com/textileio/npm-go-textile/issues), submit pull requests!
  * **Perform code reviews**. More eyes will help a) speed the project along b) ensure quality and c) reduce possible future bugs.
  * Take a look at [go-textile](https://github.com/textileio/go-textile) (which is where the binary is built). Contributions here that would be most helpful are **top-level comments** about how it should look based on our understanding. Again, the more eyes the better.
  * **Add tests**. There can never be enough tests.
  * **Contribute to the [Textile docs](https://github.com/textileio/docs)** with any additions or questions you have about Textile and its various implementations. A good example would be asking, "What is an Textile daemon". If you don't know a term, odds are someone else doesn't either. Eventually, we should have a good understanding of where we need to improve communications and teaching together to make Textile even better.

 Before you get started, be sure to read our [contributors guide](./CONTRIBUTING.md) and our [contributor covenant code of conduct](./CODE_OF_CONDUCT.md).

## License

[MIT](./LICENSE)

## About

This package was heavily inspired (it started as a direct fork) by the [`npm-go-ipfs`](https://github.com/ipfs/npm-go-ipfs) library. Big thanks to all the contributors to that original package! See `package.json`, `LICENSE`, and `CHANGELOG.md` in that project for details and contributions.
