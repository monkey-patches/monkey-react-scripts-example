const {addRule, findRule} = require('./utils')

module.exports.sassPatch = function sassPatch (webpackConfig, isDevelopment) {
  // find css rule
  const cssRule = findRule(webpackConfig, (rule) => {
    return ('' + rule.test === '' + /\.css$/)
  })
  const cssLoaders = isDevelopment ? cssRule.use : cssRule.loader

  const postCssLoader = cssLoaders[cssLoaders.length - 1]
  postCssLoader.options.sourceMap = true // add source option to postcss

  // add rtl css support
  const postCssFunction = postCssLoader.options.plugins
  postCssLoader.options.plugins = () => {
      return [...postCssFunction(), require('postcss-inline-rtl')]
  }

  // add sass support
  const sassLoader = {loader: require.resolve('sass-loader'), options: {sourceMap: true}}
  const sassLoaders = cssLoaders.concat(sassLoader)

  const sassRule = {
    test: /\.scss$/,
    [isDevelopment ? 'use' : 'loader']: sassLoaders,
  }

  addRule(webpackConfig, sassRule)

}