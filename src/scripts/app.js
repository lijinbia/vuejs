require('../styles/usage/app.scss')

var html = require('./tpls/index.html')

var common = require('./utils/util.common.js')

common.render(html);

//import index from './compoent/index.vue'

//console.log(index)//设置的属性和方法会直接挂在该对象上
//index.lader();//buxing 应该在生命周期函数上执行
//
//无法解析.vue中的vue指令具体router-view、router-link :to="''" 
//暂时只能这样了和用a模拟了
const index = {
	template: `
		<transition name="index">
		<div class="m-index" id="m-index">
		<router-view></router-view>
		
		<footer>
			
		</footer>
	</div>
	</transition>`
}

import home from './compoent/home.vue'
import so from './compoent/so.vue'
import list from './compoent/list.vue'
const routes = [
	{
		path: "/",
		component: index,
		children: [{
			path: "/",
			component: home
		}]
	},
	{
		path:"/so",
		component:so
	},
	{
		path:'/list',
		component:list
	}
]

const router = new VueRouter({
	routes
})

const vue = new Vue({
	router
}).$mount("#app")