const {pluginsPatch} = require('./webpack-helpers/pluginsPatch');

module.exports = function (webpackConfig, isDevelopment) {
    pluginsPatch(webpackConfig, isDevelopment)
};