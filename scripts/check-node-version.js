#!/usr/bin/env node
import semver from 'semver'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const pkg = require('../package.json')
const range = pkg.engines?.node

if (!range) {
  console.log('No engines.node field defined.')
  process.exit(0)
}

const current = process.version.replace('v', '')

if (!semver.satisfies(current, range, { includePrerelease: true })) {
  console.error(`\n[engine] Node version ${current} does not satisfy required range ${range}.\nPlease install a compatible Node.js version.\n`)
  process.exit(1)
}

console.log(`Node version ${current} satisfies required range ${range}. ✅`)
