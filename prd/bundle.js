/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	var common = __webpack_require__(6);
	//var html = require('./tpls/list.html');
	//common.render(html);
	//require('./views/list.js')
	var html = __webpack_require__(7);
	common.render(html);
	//require('./views/listClass.js');
	//import index from './components/index.vue';
	//import list from './components/list.vue';
	//import carts from './components/carts.vue';
	//import my from './components/my.vue';
	//import listClass from './components/listClass.vue';
	//const routes=[{
	//	path:'/',
	//	component:'index'
	//}
	//]
	//const router =new VueRouter({
	//	routes
	//})
	//const app=new vue({
	//	router
	//}).$mount('#app')

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\" id=\"app\">	<router-view>			</router-view>	<footer>		<ul>			<router-link :to=\'/\'>				<li>				<i>1</i>				<b>1</b>			</li>			</router-link>			<router-link :to=\'/\'>			<li>				<i>2</i>				<b>2</b>			</li>			</router-link>			<router-link :to=\'/\'>			<li>				<i>3</i>				<b>3</b>			</li>			</router-link>			<router-link :to=\'/\'>			<li>				<i>4</i>				<b>4</b>			</li>			</router-link>		</ul>	</footer></div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map