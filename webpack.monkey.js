const {pluginsPatch} = require('./webpack-helpers/pluginsPatch');
const {babelPatch} = require('./webpack-helpers/babelPatch');

module.exports = function (webpackConfig, isDevelopment) {
    pluginsPatch(webpackConfig, isDevelopment)
    babelPatch(webpackConfig, isDevelopment)
};