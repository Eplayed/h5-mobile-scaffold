const ghpages = require('gh-pages')
const tplconfig = require('../.tplconfig')

const config = {
  repo: 'git@github.com:cntanglijun/h5-mobile-scaffold.git',
  message: 'Site Update'
}

ghpages.publish(tplconfig.distRoot, config)
