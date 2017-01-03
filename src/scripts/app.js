require('../styles/usage/app.scss');
var common = require('./utils/util.common.js');
var html = require('./tpls/list.html');
//console.log(html);
common.render(html);
require('./views/list.js')
