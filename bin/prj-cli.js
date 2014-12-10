#!/usr/bin/env node
var init = require('../').init
var colors = require('colors-mini')
run(process.argv.slice(2))

function run(args){
  var base_dir = args[1] || process.cwd()
  var tar = args[0]

  init(base_dir, tar, function(e, stdout, stderr){
    if (stdout) {
      console.log(colors.green(stdout))
    }
    if (stderr) {
      console.log(colors.red(stderr))
    }
    if (e) throw e
  })
}
