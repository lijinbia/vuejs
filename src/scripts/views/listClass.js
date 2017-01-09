//var vue=require('../libs/vue.js');
//var Swiper=require('../libs/swiper.js');
new vue({
	el:"#m-listClass",
	data:{
		listClass:[]
	},
	mounted:function(){
		fetch('/api/listClass').then(response=>response.json())
        .then(res=>{
        	console.log(res);
        	var that=this;
        	that.listClass=res;
        })
        .catch(e => console.log("error",e))
       }
})
