//var vue=require('../libs/vue.js');
//var Swiper=require('../libs/swiper.js');
new vue({
	el:"#m-list",
	data:{
		swiper:null,
		nav:[
		"热门","分类","品牌","珠宝"
		],
		list:[],
		listbanner:[],
		navIndex:0
	},
	methods:{
		changeTab:function(index){
			this.navIndex=index;
			this.swiper.slideTo(index);
		}
	},
	mounted:function(){
		fetch('/api/list01banner').then(response=>response.json())
        .then(res=>{
        	//console.log(res)
        	var that=this;
        	that.listbanner=res;
        })
        .catch(e => console.log("error",e))
		fetch('/api/list01').then(response=>response.json())
        .then(res=>{
        	//console.log(res)
        	var that=this;
        	that.list=res;
        	console.log(res)
        	this.swiper=new Swiper('#index-swiper',{
        		loop:false,
        		onSlideChangeStart:function(swiper){
        		  that.navIndex = swiper.activeIndex;	
        		}
        	})
        })
        .catch(e => console.log("error",e))
	}
	
	
})
