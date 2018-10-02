const {pluginsPatch} = require('./webpack-helpers/pluginsPatch');
const {babelPatch} = require('./webpack-helpers/babelPatch');
const {cssPatch} = require('./webpack-helpers/cssPatch');

module.exports = function (webpackConfig, isDevelopment) {
    pluginsPatch(webpackConfig, isDevelopment)
    babelPatch(webpackConfig, isDevelopment)
    cssPatch(webpackConfig, isDevelopment)
};