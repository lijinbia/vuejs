require('../styles/usage/app.scss');
//
//console.log(2)
//var str = require("./common.js");
//console.log(str)
//var date = require('./date.js');
//console.log(date.getTime())

//import name from './date';
//console.log(name)

//var ajax = require('./child');
//ajax.getPerson();
//
//
//import ES6 from './es6';

var common = require('./utils/util.common.js');

//common.render("hahha");

var html = require('./tpls/home.html');
//console.log(html);
common.render(html);
