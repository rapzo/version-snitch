'use strict'

const path = require('path')
const fs = require('fs')

module.exports = (m) => new Promise((resolve, reject) => {
  const cmd = path.resolve(process.cwd(), 'node_modules', m, 'package.json')

  fs.stat(cmd, (err, stat) => {
    if (err) return reject(err.message)
    if (!stat.isFile()) return reject(`Bad path: ${pkg}`)

    resolve(cmd)
  })
}).then((cmd) => {
  const pkg = require(cmd)

  console.log(`${pkg.name}: ${pkg.version}`)
}).catch((err) => {
  console.error(err)
})
