const {findRules} = require('./utils')

module.exports.cssPatch = function cssPatch(webpackConfig, isDevelopment) {
    const cssRules = findRules(webpackConfig, (rule) => {
        return (
            '' + rule.test === '' + /\.css$/ ||
            '' + rule.test === '' + /\.module\.css$/ ||
            '' + rule.test === '' + /\.(scss|sass)$/ ||
            '' + rule.test === '' + /\.module\.(scss|sass)$/
        )
    });

    cssRules.forEach((cssRule) => {
        const cssLoaders = cssRule.use
        cssLoaders.forEach((loader) => {
            if (loader.options && loader.options.postcssOptions && loader.options.postcssOptions.ident === 'postcss') {
                loader.options.postcssOptions.plugins.push('rtlcss')
            }
        });
    });
}