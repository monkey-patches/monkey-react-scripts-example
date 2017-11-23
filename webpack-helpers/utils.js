module.exports.findRule = function findRule(webpackConfig, callback) {
    const rules = webpackConfig.module.rules[1].oneOf;
    const index = rules.findIndex(callback);
    if (index === -1) throw Error('Loader not found');
    return rules[index]
};
