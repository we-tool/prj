# prj

Init your project with templates from npm

> Another "git clone", the one for [npm](https://npmjs.com)

But other than [npm-clone](https://github.com/juliangruber/npm-clone), which uses git

## Usage

```
$ npm install --global prj
$ cd my-site/
$ prj get-voice-site
```

Or:

```
$ prj get-voice-site some/dir/else/
```

Or:

```js
var init = require('prj').init
var colors = require('colors-mini')

init('./my-site/', 'get-voice-site', function(e, stdout, stderr){
  if (stdout) {
    console.log(colors.green(stdout))
  }
  if (stderr) {
    console.log(colors.red(stderr))
  }
  if (e) throw e
})
```
