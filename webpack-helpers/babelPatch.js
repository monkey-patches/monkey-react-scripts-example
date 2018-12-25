const {findRule} = require('./utils');

module.exports.babelPatch = function babelPatch(webpackConfig, isDevelopment) {
    // find babel rule
    const babelRule = findRule(webpackConfig, (rule) => {
        return ('' + rule.test === '' + /\.(js|mjs|jsx|ts|tsx)$/)
    });

    babelRule.options.babelrc = true
};
