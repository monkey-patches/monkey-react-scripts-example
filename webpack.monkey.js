const {pluginsPatch} = require('./webpack-helpers/pluginsPatch');
const {babelPatch} = require('./webpack-helpers/babelPatch');
const {sassPatch} = require('./webpack-helpers/sassPatch');

module.exports = function (webpackConfig, isDevelopment) {
    pluginsPatch(webpackConfig, isDevelopment)
    babelPatch(webpackConfig, isDevelopment)
    sassPatch(webpackConfig, isDevelopment)
};