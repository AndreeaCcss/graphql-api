
const modifyBabelPreset = require('modify-babel-preset')

module.exports = function preset(context, opts = {}) {
  const es2015 = modifyBabelPreset(['es2015', opts.es2015 || {}], {
    'transform-regenerator': false
  })

  return {
    presets: [
      es2015,
      require('babel-preset-es2016'),
      require('babel-preset-es2017')
    ],

    plugins: [
      'transform-do-expressions',
      'transform-function-bind',
      'transform-export-extensions',
      'transform-class-properties',
      'transform-object-rest-spread',
      'syntax-trailing-function-commas',
      'transform-async-to-generator',
      'transform-exponentiation-operator',
      'transform-decorators-legacy',
      ['transform-async-to-module-method', {'module': 'co', 'method': 'wrap'}]
    ]
  }
}
