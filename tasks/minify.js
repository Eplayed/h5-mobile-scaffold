const { resolve } = require('path')
const pump = require('pump')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('minify', cb => {
  const htmlFilter = gulpPlugins.filter([ '**/*.html' ], { restore: true })
  const cssFilter = gulpPlugins.filter([ '**/*.css' ], { restore: true })
  const jsFilter = gulpPlugins.filter([ '**/*.js' ], { restore: true })
  const imageFilter = gulpPlugins.filter([ '**/*.{png,jpg,ico,gif}' ], { restore: true })

  pump(
    [
      gulp.src(
        [
          resolve(__dirname, '..', config.distRoot, '**/*')
        ]
      ),

      htmlFilter,
      gulpPlugins.htmlmin(
        {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          collapseBooleanAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      ),
      htmlFilter.restore,

      cssFilter,
      gulpPlugins.cleanCss(
        {
          compatibility: 'ie8'
        }
      ),
      cssFilter.restore,

      jsFilter,
      gulpPlugins.uglify(),
      jsFilter.restore,

      imageFilter,
      gulpPlugins.imagemin(),
      imageFilter.restore,

      gulp.dest(config.distRoot)
    ],
    cb
  )
})
