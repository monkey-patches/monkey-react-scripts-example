# monkey-react-scripts example

## what happened
- create app 
  - `yarn create react-app monkey-react-scripts-example`
- git init, move readme file ([ca1a7b9])
- add [monkey-react-scripts][] ([93566ba])
  - add package: `yarn add monkey-react-scripts`
  - add `webpack.monkey.js` file
  - edit `package.json` file
- add `webpack-visualizer-plugin` ([f966fce])
  - add package: `yarn add webpack-visualizer-plugin`
  - add `./webpack-helpers/pluginsPatch.js` and use it in `webpack.monkey.js` 
  - build project: `yarn build`
  - check `build/stats.html` file
- add decorator support ([a9d844b])
  - add package `yarn add babel-plugin-transform-decorators-legacy`
  - and `webpack-helpers/utils.js` (add `findRule` function)
  - add `webpack-helpers/babelPatch.js` and use it in `webpack.monkey.js`
  - add and use sample decorator
- add sass support ([cbdf2d5])
  - add package `yarn add node-sass sass-loader`
  - edit `webpack-helpers/utils.js` (add `addRule` function)
  - add `webpack-helpers/sassPatch.js` and use it in `webpack.monkey.js`
  - add and use sample sass file
- edit postcss configs ([9095c31])
  - add package `yarn add postcss-inline-rtl`
  - edit `webpack-helpers/sassPatch.js`
  - add required changes in `src/index.js` and `sample.scss`

[monkey-react-scripts]: https://github.com/monkey-patches/monkey-react-scripts

[9095c31]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/9095c31572d5aded2cd9b66c2d356a3b73bcc8ed
[cbdf2d5]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/cbdf2d5be89e30cef21408eb96704a33791aecb7
[a9d844b]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/a9d844b8f38397ce317c7f6ddbfb67dd184de68c
[f966fce]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/f966fce01c592f67bee451728bd7028f9f266c1e
[93566ba]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/93566ba660e7d40b946d6c96fbbb74820e95b6f4
[ca1a7b9]: https://github.com/monkey-patches/monkey-react-scripts-example/commit/ca1a7b9b741a67a7891a9a3068c10ac666d750e6