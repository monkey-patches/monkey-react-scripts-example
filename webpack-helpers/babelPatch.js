const {findRule} = require('./utils');

module.exports.babelPatch = function babelPatch(webpackConfig, isDevelopment) {
    // find babel rule
    const babelRule = findRule(webpackConfig, (rule) => {
        return ('' + rule.test === '' + /\.(js|jsx)$/)
    });
    const plugins = babelRule.options.plugins || [];
    babelRule.options.plugins = [
        ...plugins,
        ["@babel/plugin-proposal-decorators", {legacy: true}],
    ]
};
