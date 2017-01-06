<template>
	<div id="m-list" class="m-list">
		<header>
			<input type="text" placeholder="搜索品牌或型号" /><img src="./images/icon/icon_consult_grey.png">
		</header>
		<section>
			<nav>
				<ul>
					<li v-for="(item,index) in nav" v-on:click="changeTab(index)" v-bind:class="{active:index==navIndex}">{{item}}</li>
				</ul>
			</nav>
			<article>
				<div class="swiper-container" id="index-swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img :src="listbanner.img" class="listBanner" />
							<h5>推荐</h5>
							<ul>
								<li v-for="item in list">
									<img :src="item.listclassImg" />
									<span>{{item.listclassDes}}</span>
								</li>
							</ul>
							<h5>其它</h5>
						</div>
						<div class="swiper-slide">
							<img :src="listbanner.img" class="listBanner" />
							<h5>推荐</h5>
							<ul>
								<li v-for="item in list">
									<img :src="item.listclassImg" />
									<span>{{item.listclassDes}}</span>
								</li>
							</ul>
							<h5>其它</h5>
						</div>
						<div class="swiper-slide">
							<img :src="listbanner.img" class="listBanner" />
							<h5>推荐</h5>
							<ul>
								<li v-for="item in list">
									<img :src="item.listclassImg" @click="" />
									<span>{{item.listclassDes}}</span>
								</li>
							</ul>
							<h5>其它</h5>
						</div>
						<div class="swiper-slide">
							<img :src="listbanner.img" class="listBanner" />
							<h5>推荐</h5>
							<ul>
								<li v-for="item in list">
									<img :src="item.listclassImg" />
									<span>{{item.listclassDes}}</span>
								</li>
							</ul>
							<h5>其它</h5>
						</div>

					</div>
				</div>
			</article>
		</section>
	</div>
	<script>
	//var vue = require('../libs/vue.js');
    var Swiper = require('../libs/swiper.js');
		module.exports = {
				data: function(){
					return {
						swiper: null,
						nav: [
							"热门", "分类", "品牌", "珠宝"
						],
						list: [],
						listbanner: [],
						navIndex: 0
					}				
				},
				methods: {
					changeTab: function(index) {
						this.navIndex = index;
						this.swiper.slideTo(index);
					}
				},
				mounted: function() {
					fetch('/api/list01banner').then(response => response.json())
						.then(res => {
							//console.log(res)
							var that = this;
							that.listbanner = res;
						})
						.catch(e => console.log("error", e))
					fetch('/api/list01').then(response => response.json())
						.then(res => {
							//console.log(res)
							var that = this;
							that.list = res;
							console.log(res)
							this.swiper = new Swiper('#index-swiper', {
								loop: false,
								onSlideChangeStart: function(swiper) {
									that.navIndex = swiper.activeIndex;
								}
							})
						})
						.catch(e => console.log("error", e))
				}
		}
	</script>
</template>