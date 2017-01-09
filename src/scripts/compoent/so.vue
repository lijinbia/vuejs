<template id="">
	<transition name='search'>
	<div class="m-so">
		<header>
			<div class="slide"><div class="bottom"><input type="text" placeholder="搜索型号、系列、品牌" autofocus="autofocus" name="" id="" value="" /></div>		</div>	
		</header>
		<section>
			<div v-for="item in soList">
				<h6>{{item.title}}</h6>
				<div :class="{box1:item.title == '热门分类',box2:item.title=='历史记录'}">
					<div v-on:click="clickWord(word)" v-for="word in item.wordList">
						<!--<router-link>{{word}}</router-link>-->
						<a href="#/list">{{word}}</a>
						<!--#可以是vm里面的路由地址--》列表页-->
					</div>
				</div>
			</div>
		</section>
	</div>
	</transition>
</template>

<script type="text/javascript">
	module.exports = {
		data:function () {
			return {
				soList:[
					{
						title:"热门分类",
						wordList:[
							'1到3千','3到5千','机械表','男表','女表','情侣'
						]
					},
					
					{
						title:'历史记录',
						wordList:[]
					}
				]
			}
		}
		,
		methods:{
			clickWord:function (word) {
				var myStorage = window.localStorage;				
				var arr = this.soList[1].wordList;
				var index = arr.indexOf(word);
				if (index != -1) {
					arr.splice(index,1)
				}
				arr.unshift(word)
				myStorage.setItem("soH",arr);
			}
		},
		beforeMount:function () {
			//console.log(this.soList[1].wordList)
			var myStorage = window.localStorage;
			if (myStorage.getItem("soH")) {
				//console.log(typeof myStorage.getItem("soH"));
				var str = myStorage.getItem("soH");
				var arr = str.split(",");
				//console.log(arr)
				this.soList[1].wordList = arr;
			}
		}
		
	
		
	}
	
</script>