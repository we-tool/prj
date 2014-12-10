var fs = require('fs-extra')
var path = require('path')
var exec = require('child_process').exec

exports.init = init

function init(base_dir, tar, callback){
  if (!base_dir || !tar || !callback) {
    return callback(new Error('params error'))
  }
  base_dir = path.resolve(process.cwd(), base_dir)
  var nod_mod_dir = path.join(base_dir, 'node_modules')

  fs.mkdirpSync(base_dir)
  fs.mkdirpSync(nod_mod_dir)
  process.chdir(base_dir)
  var cmd = ['npm i', tar].join(' ')

  exec(cmd, function(e, stdout, stderr){
    if (e) return callback(e)
    if (stderr) {
      return callback(new Error('install fail'), stdout, stderr)
    }
    var tar_dir = path.join(nod_mod_dir, tar)

    try {
      fs.copySync(tar_dir, base_dir)

      //fs.removeSync(nod_mod_dir)
      fs.removeSync(tar_dir)
    } catch (e1) {
      return callback(e1, stdout)
    }
    callback(e, stdout)
  })
}
