const { resolve, basename, extname } = require('path')
const pump = require('pump')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const config = require('../.tplconfig')

const gulpPlugins = gulpLoadPlugins()

gulp.task('rewrite', [ 'revision' ], cb => {
  const manifest = gulp.src(
    [
      resolve(__dirname, '..', config.distRoot, 'rev-manifest.json')
    ]
  )

  const specialFiles = config.needCombineFiles.join('')

  function doSpecial(filename) {
    const extName = extname(filename)
    const fileBaseName = basename(filename, extName)

    if (extName === '.js') {
      if (specialFiles.includes(fileBaseName.match(/([^-]*)/)[1])) {
        return fileBaseName
      }
    }

    return filename
  }

  pump(
    [
      gulp.src(
        [
          resolve(__dirname, '..', config.distRoot, '**/*.{html,css}')
        ]
      ),

      gulpPlugins.revRewrite(
        {
          manifest: manifest,
          modifyUnreved: doSpecial,
          modifyReved: doSpecial
        }
      ),

      gulp.dest(config.distRoot)
    ],
    cb
  )
})
