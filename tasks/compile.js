const { resolve } = require('path')
const pump = require('pump')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('compile', cb => {

  const htmlFilter = gulpPlugins.filter([ '**/*.' + config.htmlExtName ], { restore: true })
  const cssFilter = gulpPlugins.filter([ '**/*.' + config.cssExtName ], { restore: true })
  const jsFilter = gulpPlugins.filter([ '**/*.' + config.jsExtName ], { restore: true })

  pump(
    [
      gulp.src(
        [
          resolve(__dirname, '..', config.srcRoot, '**/*')
        ]
      ),

      // 处理 html
      htmlFilter,
      gulpPlugins.pug(
        {
          pretty: true
        }
      ),
      htmlFilter.restore,

      // 处理 css
      cssFilter,
      gulpPlugins.stylus(
        {
          compress: true,
          'include css': true
        }
      ),
      cssFilter.restore,

      // 处理 js
      jsFilter,
      gulpPlugins.babel(),
      jsFilter.restore,

      gulp.dest(config.distRoot)
    ],
    cb
  )

})
