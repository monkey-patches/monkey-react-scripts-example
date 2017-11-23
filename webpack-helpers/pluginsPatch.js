const Visualizer = require('webpack-visualizer-plugin');

module.exports.pluginsPatch = function pluginsPatch(webpackConfig, isDevelopment) {
    if (!isDevelopment) {
        webpackConfig.plugins.push(new Visualizer());
    }
};
