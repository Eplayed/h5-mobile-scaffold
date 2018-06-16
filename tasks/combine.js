const { resolve } = require('path')
const pump = require('pump')
const glob = require('glob')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('combine', [ 'compile' ], cb => {

  const queue = []

  // pump(queue, cb)
  cb()
})
