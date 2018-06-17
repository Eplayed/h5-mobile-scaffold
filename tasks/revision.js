const { resolve } = require('path')
const pump = require('pump')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('revision', [ 'combine' ], cb => {
  pump(
    [
      gulp.src(
        [
          resolve(__dirname, '..', config.distRoot, '**/*'),
          '!**/*.{html,json}'
        ]
      ),

      gulpPlugins.rev(),
      gulpPlugins.revDeleteOriginal(),

      gulp.dest(config.distRoot),

      gulpPlugins.rev.manifest(),

      gulp.dest(config.distRoot)
    ],
    cb
  )
})
