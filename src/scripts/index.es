import $ from 'jquery'
import getData from './lib/getData'

console.log($().jquery)

getData({ url: 'https://api.bootcdn.cn/names.min.json' })
