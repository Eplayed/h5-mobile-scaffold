module.exports = {

  // 资源目录
  srcRoot: 'src',

  // 发布目录
  distRoot: 'dist',

  // 需要 babel 解析的文件后缀名
  jsExtName: 'es',

  // 需要 pug 解析的文件后缀名
  htmlExtName: 'pug',

  // 需要 styl 解析的文件后缀名
  cssExtName: 'styl',

  // 发布需要忽略的目录或文件
  distIgnoreDirs: [
    'template',
    'scripts/lib'
  ],

  // 需要进行 requirejs 合并的文件列表
  needCombineFiles: [
    'index'
  ]
}
