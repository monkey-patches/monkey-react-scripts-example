# monkey-react-scripts example

## what happen
- create app 
  - `yarn create react-app monkey-react-scripts-example`
- git init, move readme file
- add [monkey-react-scripts][]
  - add package: `yarn add monkey-react-scripts`
  - add `webpack.monkey.js` file
  - edit `package.json` file
- add `webpack-visualizer-plugin`
  - add package: `yarn add webpack-visualizer-plugin`
  - add `./webpack-helpers/pluginsPatch.js` and use it in `webpack.monkey.js` 
  - build project: `yarn build`
  - check `build/stats.html` file
- add decorator support
  - add package `yarn add babel-plugin-transform-decorators-legacy`
  - and `webpack-helpers/utils.js` (add `findRule` function)
  - add `webpack-helpers/babelPatch.js` and use it in `webpack.monkey.js`
  - add and use sample decorator
- add sass support
  - add package `yarn add node-sass sass-loader`
  - edit `webpack-helpers/utils.js` (add `addRule` function)
  - add `webpack-helpers/sassPatch.js` and use it in `webpack.monkey.js`
  - add and use sample sass file

[monkey-react-scripts]: https://github.com/monkey-patches/monkey-react-scripts