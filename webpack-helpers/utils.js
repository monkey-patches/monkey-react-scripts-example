module.exports.findRule = function findRule(webpackConfig, callback) {
    const rules = webpackConfig.module.rules[1].oneOf;
    const index = rules.findIndex(callback);
    if (index === -1) throw Error('Loader not found');
    return rules[index]
};

module.exports.findRules = function findRule(webpackConfig, callback) {
    const rules = webpackConfig.module.rules[1].oneOf;
    return rules.filter(callback);
};

module.exports.addRule = function addRule(webpackConfig, rule) {
    const rules = webpackConfig.module.rules[1].oneOf
    rules.splice(rules.length - 1, 0, rule) // add before exclude rule
}
