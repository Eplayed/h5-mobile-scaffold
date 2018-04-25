const { resolve } = require('path')
const del = require('del')
const config = require('../.tplconfig')

del(config.ignoreDirs.map(ignoreDir => resolve(__dirname, '..', config.distRoot, ignoreDir)))
