#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import execa from 'execa'

const isWin = process.platform === 'win32'
const version = require('../package.json').version.replace(/-dirty[0-9]+/, '') // remove superfluous -suffix.

var depPath = require.resolve('@textile/go-textile-dep')
depPath = path.dirname(path.dirname(depPath)) // walk up ../../
var depBin = path.join(depPath, 'binary', 'textile')
var localBin = path.join(__dirname, '..', 'bin', 'textile')

if (isWin) {
  depBin += '.exe'
  localBin += '.exe'
}

if (!fs.existsSync(depBin)) {
  die('Textile binary not found. Maybe go-textile-dep did not install correctly?')
}

if (fs.existsSync(localBin)) {
  fs.unlinkSync(localBin)
}

fs.symlinkSync(depBin, localBin)

if (isWin) {
  // On Windows, update the shortcut file to use the .exe
  let cmdFile = path.join(__dirname, '..', '..', 'textile.cmd')

  fs.writeFileSync(
    cmdFile,
    `@ECHO OFF
"%~dp0\\node_modules\\go-textile\\bin\\textile.exe" %*`,
  )
}

// test that textile installed correctly.
var result = execa.sync(localBin, ['version'])
if (result.failed) {
  die('textile binary failed: ' + result.stderr)
}

var outstr = result.stdout.toString()
var m = /go-textile version v([^\n]+)/.exec(outstr)
var actualVersion = m ? m[1] : undefined

if (actualVersion !== version) {
  die('version mismatch: expected ' + version + ' got ' + actualVersion)
}

function die(err: string) {
  console.error(err)
  process.exit(1)
}
