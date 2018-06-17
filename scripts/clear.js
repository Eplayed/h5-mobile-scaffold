const { resolve } = require('path')
const del = require('del')
const config = require('../.tplconfig')

del(config.distIgnoreDirs.map(ignoreDir => resolve(__dirname, '..', config.distRoot, ignoreDir)))
