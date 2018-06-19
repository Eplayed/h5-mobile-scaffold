const { resolve, dirname, join, basename, sep } = require('path')
const fs = require('fs')
const config = require('../.tplconfig')

// 基础路径
const baseUrl = resolve(__dirname, '..', config.distRoot, 'scripts')

// Hash 映射文件
const manifest = require(join(dirname(baseUrl), 'rev-manifest.json'))

// Requirejs 映射文件
const rjsManifest = require(join(dirname(baseUrl), 'rjs-manifest.json'))

config.needCombineFiles.forEach(file => {

  // 原文件
  const filePath = join(basename(baseUrl), file + '.js')

  // Hash 后的文件
  const hashFilePath = manifest[filePath.split(sep).join('/')]

  // Requirejs 文件信息
  const fileInfo = rjsManifest.find(item => item.name === file)

  fs.readFile(join(baseUrl, basename(hashFilePath)), 'utf-8', (err, contents) => {
    let resultContent = contents

    if (!err) {
      fileInfo.included.forEach(fileName => {
        const key = fileName.match(/scripts\/(.*)\.js$/)[1]
        const hashName = basename(manifest['scripts/' + key + '.js'], '.js')
        const pattern1 = new RegExp('\'((?:\\.\\/|)' + key + '|(?:\\.\\/|)' + basename(key) + ')\'', 'g')

        resultContent = resultContent.replace(pattern1, '\'' + hashName + '\'')
      })
    }

    fs.writeFile(join(baseUrl, basename(hashFilePath)), resultContent, 'utf-8', () => {})
  })
})
