const { resolve } = require('path')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const config = require('../.tplconfig')

gulp.task('copy', () => {
  return gulp.src([
    resolve(__dirname, '..', config.srcRoot, '**/*.png'),
    resolve(__dirname, '..', config.srcRoot, '**/*.ico')
  ])
    .pipe(imagemin())
    .pipe(gulp.dest(config.distRoot))
})
