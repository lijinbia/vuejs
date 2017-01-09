require('../styles/usage/app.scss');
var common = require('./utils/util.common.js');
//var html = require('./tpls/list.html');
//common.render(html);
//require('./views/list.js')
var html = require('./tpls/layout.html');
common.render(html);
//require('./views/listClass.js');
import index from "./components/index.vue";
import list from "./components/list.vue";
//import carts from './components/carts.vue';
//import my from './components/my.vue';
//import listClass from "./components/listClass.vue";
const routes=[{
	path:'/',
	component:index
},{
	path:'/list',
	component:list
}
]
const router =new VueRouter({
	routes
})
const app=new Vue({
	router
}).$mount('#app')
