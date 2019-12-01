//webpack 是一个模块打包工具  (js模块打包工具 -->)
//CMD
//AMD

//ES moudule 模块引入方式
// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content'

//CommonJS 模块引入规范
var Header = require('./header')
var Sidebar = require('./sidebar')
var Content = require('./content')

new Header()
new Sidebar()
new Content()

//npm info webpack 查版本号
//npm i webpack@4.26.1 -D      具体版本号/--save-dev
//npx webpack -v   非全局查版本号
//拉仓库先npm install
//默认配置文件名：webpack.config.js   命令:npx webpack
//自定义配置文件时：npx webpack --config  xxx.js
//npm scripts -->查找package.json文件的scripts设置