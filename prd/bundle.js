!function(t){function i(s){if(e[s])return e[s].exports;var n=e[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}var e={};return i.m=t,i.c=e,i.p="",i(0)}([function(t,i,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=e(1),o=s(n),r=e(4),a=s(r),l=e(7),c=s(l);e(9);var u=e(13),d=e(14);d.render(u);var m={template:'<div class="m-index" id="m-index">\n\t\t<router-view></router-view>\n\t\t\n\t\t<footer>\n\t\t\t\n\t\t</footer>\n\t</div>'},p=[{path:"/",component:m,children:[{path:"/",component:o.default}]},{path:"/so",component:a.default},{path:"/list",component:c.default}],g=new VueRouter({routes:p});new Vue({router:g}).$mount("#app")},function(t,i,e){var s,n;s=e(2);var o=e(3);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,i){t.exports={data:function(){return{lunboList:["/images/lunbo (1).jpg","/images/lunbo (2).jpg","/images/lunbo (3).jpg","/images/lunbo (4).jpg","/images/lunbo (5).jpg","/images/lunbo (6).jpg","/images/lunbo (7).jpg"],mList:[{img:"/images/m-list (1).jpg",word:"选表"},{img:"/images/m-list (1).jpg",word:"闪购"},{img:"/images/m-list (3).jpg",word:"手机专享"},{img:"/images/m-list (4).jpg",word:"中奖纪录"},{img:"/images/m-list (5).jpg",word:"商务馆"},{img:"/images/m-list (6).jpg",word:"时尚馆"},{img:"/images/m-list (7).jpg",word:"热销榜"},{img:"/images/m-list (8).jpg",word:"App礼包"}],gList:[{listH:"限时秒杀",listImg:["/images/listh1.png"],goods:[{zhekou:"3.5",img:"/images/goods (1).jpg",time:95e3,price:1190},{zhekou:"4",img:"/images/goods (2).jpg",time:8e4,price:2190},{zhekou:"5",img:"/images/goods (3).jpg",time:6e4,price:190}]},{listH:"口碑排行",listImg:["/images/listh21.png","/images/listh22.png"],goods:[{zhekou:null,img:"/images/goods (4).jpg",time:null,word:"天梭",price:1190},{zhekou:null,img:"/images/goods (5).jpg",time:null,word:"迪沃斯",price:2190},{zhekou:null,img:"/images/goods (6).jpg",time:null,word:"赫柏林",price:190}]}]}},methods:{clickMList:function(t){alert(t)}},mounted:function(){new Swiper(".swiper-container",{autoplay:5e3,pagination:".swiper-pagination",loop:!0})}}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home"},[e("header",[t._m(0),t._v(" "),e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.lunboList,function(t){return e("div",{staticClass:"swiper-slide",class:t},[e("img",{attrs:{src:t}})])})),t._v(" "),e("div",{staticClass:"swiper-pagination"})])]),t._v(" "),e("section",[e("ul",{staticClass:"m-list"},t._l(t.mList,function(i){return e("li",{on:{click:function(e){t.clickMList(i.word)}}},[e("i",[e("img",{attrs:{src:i.img}})]),t._v(" "),e("b",[t._v(t._s(i.word))])])})),t._v(" "),e("div",{staticClass:"g-list"},t._l(t.gList,function(i){return e("div",[e("h2",{staticClass:"list-h"},[e("i",{staticClass:"yo-ico"},[t._v("|")]),t._v("\n\t\t\t\t"+t._s(i.listH)+"\n\t\t\t")]),t._v(" "),e("div",{staticClass:"img-box"},t._l(i.listImg,function(t){return e("div",[e("img",{attrs:{src:t}})])})),t._v(" "),e("div",{staticClass:"goods-box"},t._l(i.goods,function(i){return e("div",{staticClass:"goods-items"},[i.zhekou?e("div",{staticClass:"items-zhekou"},[e("span",[t._v(t._s(i.zhekou))]),t._v("折\n\t\t\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"items-img"},[e("img",{attrs:{src:i.img}})]),t._v(" "),i.time?e("div",{staticClass:"items-time"},[e("span",[t._v("00")]),t._v(" "),e("b",[t._v("\n\t\t\t\t\t\t\t:\n\t\t\t\t\t\t")]),t._v(" "),e("span",[t._v("00")]),t._v(" "),e("b",[t._v("\n\t\t\t\t\t\t\t:\n\t\t\t\t\t\t")]),t._v(" "),e("span",[t._v("00")])]):t._e(),t._v(" "),i.word?e("div",{staticClass:"items-word"},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.word)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"items-price"},[t._v("\n\t\t\t\t\t\t\t￥"),e("span",[t._v(t._s(i.price))])])])}))])}))])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",[e("li",[e("i",{staticClass:"yo-ico"}),t._v(" "),e("b",[t._v("扫一扫")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#/so"}},[t._v("搜索品牌、系列和型号")])]),t._v(" "),e("li",[e("i",{staticClass:"yo-ico"}),t._v(" "),e("b",[t._v("咨询")])])])}]}},function(t,i,e){var s,n;s=e(5);var o=e(6);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,i){t.exports={data:function(){return{soList:[{title:"热门分类",wordList:["1到3千","3到5千","机械表","男表","女表","情侣"]},{title:"历史记录",wordList:[]}]}},methods:{clickWord:function(t){var i=window.localStorage,e=this.soList[1].wordList,s=e.indexOf(t);s!=-1&&e.splice(s,1),e.unshift(t),i.setItem("soH",e)}},beforeMount:function(){var t=window.localStorage;if(t.getItem("soH")){var i=t.getItem("soH"),e=i.split(",");this.soList[1].wordList=e}}}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"search"}},[e("div",{staticClass:"m-so"},[e("header",[e("div",{staticClass:"slide"},[e("div",{staticClass:"bottom"},[e("input",{attrs:{type:"text",placeholder:"搜索型号、系列、品牌",autofocus:"autofocus",name:"",id:"",value:""},domProps:{value:""}})])])]),t._v(" "),e("section",t._l(t.soList,function(i){return e("div",[e("h6",[t._v(t._s(i.title))]),t._v(" "),e("div",{class:{box1:"热门分类"==i.title,box2:"历史记录"==i.title}},t._l(i.wordList,function(i){return e("div",{on:{click:function(e){t.clickWord(i)}}},[e("a",{attrs:{href:"#/list"}},[t._v(t._s(i))])])}))])}))])])},staticRenderFns:[]}},function(t,i,e){var s,n,o=e(8);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("h1",[t._v("\n\t商品列表页\n")])},staticRenderFns:[]}},function(t,i){},,,,function(t,i){t.exports='<div id="app">\t<router-view></router-view></div>'},function(t,i){"use strict";t.exports={render:function(t){var i=document.body;i.innerHTML=t+i.innerHTML}}}]);
//# sourceMappingURL=bundle.js.map