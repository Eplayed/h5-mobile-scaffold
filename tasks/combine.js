const { resolve, join, basename, dirname } = require('path')
const fs = require('fs')
const pump = require('pump')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('combine', [ 'compile' ], cb => {

  const queue = []
  const baseUrl = resolve(__dirname, '..', config.distRoot, 'scripts')
  const output = []

  function onModuleBundleComplete(data) {
    output.push(data)

    if (config.needCombineFiles.length === output.length) {
      fs.writeFile(
        join(dirname(baseUrl), 'rjs-manifest.json'),
        JSON.stringify(output, null, 2),
        'utf-8',
        () => {}
      )
    }
  }

  config.needCombineFiles.forEach(file => {
    queue[queue.length] = gulpPlugins.requirejs(
      {
        baseUrl,
        onModuleBundleComplete,
        out: join(basename(baseUrl), file + '.js'),
        name: file,
        mainConfigFile: resolve(baseUrl, 'config.js'),
        optimize: 'none',
        findNestedDependencies: true
      }
    )

    queue[queue.length] = gulp.dest(config.distRoot)
  })

  pump(queue, cb)
})
