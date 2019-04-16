# This is a monorepo sample managed by 'Lerna'
Motivation: Making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Official Docs: https://github.com/lerna/lerna#readme

## Setup
`npx lerna init`

## Running
`lerna bootstrap`
Will link dependencies in the repo together.

`lerna publish`
Publish any updated packages.

## Modes
a) Fixed/Locked mode (default) **for publishing versioning**
    tie all package versions together, major change in any package will result in all packages having a new major version
b) Independent
    maintainers to increment package versions independently of each other
    Set the version key in lerna.json to independent to run in independent mode.

## Project structure
monorepo/
  package.json
  packages/
    package-1/
      package.json
    package-2/
      package.json

## Commands Available:
lerna publish
lerna version
lerna bootstrap
lerna list
lerna changed
lerna diff
lerna exec
lerna run
lerna init
lerna add
lerna clean
lerna import
lerna link
lerna create