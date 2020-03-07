'use strict'

const cheerio = require('react-native-cheerio')

module.exports = (html = '') =>
  cheerio.load(html, {
    lowerCaseTags: true,
    decodeEntities: true,
    lowerCaseAttributeNames: true
  })
