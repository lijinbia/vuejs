<template>
<div class="m-listClass" id="m-listClass">
	<header>
		<input type="text" placeholder="搜索品牌或型号" /><img src="./images/icon/icon_consult_grey.png">
	</header>	
	<nav>
		<ul>
			<li>综合</li>
			<li>销量</li>
			<li>价格</li>
			<li>筛选</li>
		</ul>
	</nav>
	<div class="choice">
		<ul>
			<li>
				<i>品牌</i>
			</li>
			<li>
				<i>机芯</i>
			</li>
			<li>
				<i>人群</i>
			</li>
			<li>
				<i>正装</i>
			</li>
		</ul>
	</div>
	<section>
		<ul>
			<li v-for="item in listClass">
				<img :src="item.img">
				<b>{{item.des}}</b>
				<p><span>{{item.price}}</span><i>{{item.discount}}</i></p>
				<em>{{item.num}}</em>
			</li>
		</ul>
	</section>
</div>
</template>
<script>
	module.exports={
		data:function(){
			return {
				listClass:[]
			}
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
	}
</script>