const ghpages = require('gh-pages')
const tplconfig = require('../tplconfig')

ghpages.publish(tplconfig.distRoot, err => console.log(err))
