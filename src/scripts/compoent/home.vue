<template>
	<div class="home">
		<header>
			<ul>
				<li>
					<i class="yo-ico"></i>
					<b>扫一扫</b>
				</li>
				<li><a href="#/so">搜索品牌、系列和型号</a></li>
				<li>
					<i class="yo-ico"></i>
					<b>咨询</b>
				</li>
			</ul>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in lunboList" :class="item">
						<img :src="item" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</header>

		<section>

			<!--菜单列表-->
			<ul class="m-list">
				<!--vue绑定时间不用非得调用，angular要-->
				<li v-for="item in mList" v-on:click="clickMList(item.word)">
					<i>
					<img :src="item.img" />
				</i>
					<b>{{item.word}}</b>

				</li>

			</ul>
			<!--展示列表-->
			<!--限时秒杀-->
			<div class="g-list">
				<div v-for="item in gList">
					<h2 class="list-h">
					<i class="yo-ico">|</i>
					{{item.listH}}
				</h2>
					<div class="img-box">
						<div v-for="image in item.listImg">
							<img :src="image" />
						</div>
					</div>
					<div class="goods-box">
						<div class="goods-items" v-for="goodsItem in item.goods">
							<div v-if="goodsItem.zhekou" class="items-zhekou">
								<span>{{goodsItem.zhekou}}</span>折
							</div>
							<div class="items-img">
								<img :src="goodsItem.img" />
							</div>
							<div v-if="goodsItem.time" class="items-time">
								<!--获取goodsItem.time暂不处理-->
								<span>{{time[0]}}</span>
								<b>
								:
							</b>
								<span>{{time[1]}}</span>
								<b>
								:
							</b>
								<span>{{time[2]}}</span>
							</div>
							<div v-if="goodsItem.word" class="items-word">
								{{goodsItem.word}}
							</div>
							<div class="items-price">
								￥<span>{{goodsItem.price}}</span>
							</div>
						</div>
					</div>
				</div>
				<!--<h2 class="list-h">
				<i class="yo-ico">|</i>
				限时秒杀
			</h2>			
			<div class="img-box">
				<img src="/images/listh4.png"/>
			</div>
			<div class="goods-box">
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3.5</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (1).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (2).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3.5</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (3).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
			</div>
			<h2 class="list-h">
				<i class="yo-ico">|</i>
				限时秒杀
			</h2>			
			<div class="img-box">
				<img src="/images/listh4.png"/>
			</div>
			<div class="goods-box">
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3.5</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (1).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (2).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
				<div class="goods-items">
					<div class="items-zhekou">
						<span>3.5</span>折
					</div>
					<div class="items-img">
						<img src="/images/goods (3).jpg"/>
					</div>
					<div class="items-time">
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
						<b>
							:
						</b>
						<span>00</span>
					</div>
					<div class="items-price">
						￥<span>1190</span>
					</div>
				</div>
			</div>-->
			</div>

		</section>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data: function() {
			return {
				myTime:null,
				time:['00','00','00'],
				lunboList: ['/images/lunbo (1).jpg', '/images/lunbo (2).jpg', '/images/lunbo (3).jpg', '/images/lunbo (4).jpg', '/images/lunbo (5).jpg', '/images/lunbo (6).jpg', '/images/lunbo (7).jpg'],
				mList: [{
					img: '/images/m-list (1).jpg',
					word: '选表'
				}, {
					img: '/images/m-list (1).jpg',
					word: '闪购'
				}, {
					img: '/images/m-list (3).jpg',
					word: '手机专享'
				}, {
					img: '/images/m-list (4).jpg',
					word: '中奖纪录'
				}, {
					img: '/images/m-list (5).jpg',
					word: '商务馆'
				}, {
					img: '/images/m-list (6).jpg',
					word: '时尚馆'
				}, {
					img: '/images/m-list (7).jpg',
					word: '热销榜'
				}, {
					img: '/images/m-list (8).jpg',
					word: 'App礼包'
				}],
				gList: [{
					listH: "限时秒杀",
					listImg: ["/images/listh1.png"],
					goods: [{
						zhekou: "3.5",
						img: "/images/goods (1).jpg",
						time: 95000,
						price: 1190
					}, {
						zhekou: "4",
						img: "/images/goods (2).jpg",
						time: 80000,
						price: 2190
					}, {
						zhekou: "5",
						img: "/images/goods (3).jpg",
						time: 60000,
						price: 190
					}]
				}, {
					listH: "口碑排行",
					listImg: ["/images/listh21.png", "/images/listh22.png"],
					goods: [{
						zhekou: null,
						img: "/images/goods (4).jpg",
						time: null,
						word: "天梭",
						price: 1190
					}, {
						zhekou: null,
						img: "/images/goods (5).jpg",
						time: null,
						word: "迪沃斯",
						price: 2190
					}, {
						zhekou: null,
						img: "/images/goods (6).jpg",
						time: null,
						word: "赫柏林",
						price: 190
					}]
				}]

			}
		},
		methods: {
			//事件绑定，处理程序	
			clickMList: function(str) {
				alert(str)
			},
			setTime:function (h,m,s) {
				this.time = [h,m,s];
			}
		},
		mounted: function() {
			//dom渲染完成
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000, //可选选项，自动滑动
				pagination: '.swiper-pagination',
				loop: true
			})
			
			if (!this.myTime) {
				myTime = new CountDown(this.setTime,'2017/1/6');
				//console.log(myTime)
			}
			
		}

	}
</script>