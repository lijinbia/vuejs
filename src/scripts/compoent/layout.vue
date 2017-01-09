<template>
		<div class="wrap">
			<!--左右布局-->
			<aside class="aside-left">
				
					<ul class="userBox">
						<li class="shezhi">
							<a href="#"></a>
						</li>
						<li class="userImg">
							<a href=""><img src="/img/user (1).jpg"/></a>
						</li>
						<li class="userName">
							李丽
						</li>
						<li class="userTimed">
							上次登录2016.12.8
						</li>
						<li class="userSearch">
							<a href=""></a>
						</li>
					</ul>
				<ul class = "module-tab-box">
					<li><a href="#">合同管理</a></li>
					<li><a href="#">信息</a></li>
					<li class="active"><a href="#">项目管理</a></li>
					<li><a href="#">工程进度</a></li>
					<li><a href="#">客户管理</a></li>
					<li><a href="#">更多</a></li>
				</ul>
				
			</aside>
			<div class="content">
				<header>
					<div class="active">
						<span>项目管理</span>
						<a href=""></a>
					</div>
					<div><span>北京三里屯房建</span><a href=""></a></div>
					<div><span>西三旗五区项目</span><a href=""></a></div>
				</header>
				<section>
					<!--切换效果1-->
					<div class="shadow"></div>
					<div class="cmrbox">
						
						<div class="cmr-nav">
							<div class="layout1"><i></i><em></em><span>全选</span><b class="color1">i</b></div>
							<div class="layout2">项目名称</div>
							<div class="layout3">客户</div>
							<div class="layout4"><div><span>所属公司</span><b></b></div><ul><li></li></ul></div>
							<div class="layout5"><div><span>所属部门</span><b></b></div><ul><li></li></ul></div> 
							<div class="layout6"><div><span>业务员</span><b></b></div><ul><li></li></ul></div> 
							<div class="layout7">地址</div>
							<div class="active layout8"><div><span>项目性质</span><b></b> </div><ul><li>重大</li><li>直属</li><li>TPO</li></ul></div>
							
							<div class="layout9">阶段/字段</div>
							<div class="layout10">周期/天数</div>
						</div>
						<!---->
						<div class="cmr-cont">
							<div class="cmr-cont-items" v-for="(items,inde) in cmrConList">
								<div class="layout1"><em></em><b :class="{color1:inde==1,color2:inde==0,color3:inde==2,color4:inde==3}">4</b></div>
								<div :class="'layout'+(index+2)"  v-for = "(item,index) in items">
									<span :class="{textCenter:inde>=1}" v-for="txt in item">{{txt}}</span>
								</div>
							</div>
						</div>
						
						<!--悬浮-->
						<div class="lastbox">
							<div>
								<b class="color2">i</b>
								<span>15天已经超过期限2天未维修数据</span>
								<b class="active color1">x</b>
							</div>
							<div>
								<b class="color2">i</b>
								<span>15天已经超过期限2天未维修数据</span>
								<b class="active color1">x</b>
							</div>
							<div>
								<b class="color4">v</b>
								<span>已成功分配信息</span>
								<b class="active color1">x</b>
							</div>
							<div>
								<b class="color4">v</b>
								<span>已成功分配信息</span>
								<b class="active color1">x</b>
							</div>
							<div class="remove">
								<span>删除所有</span>
								<b class="active color1">x</b>
							</div>
						</div>
					</div>
				</section>
				<!--翻页-->
						<div class="nextbox">
							<div class="pre-button">&lt;</div>
							<ul class="es-button">
								<li v-for="item in btnList">{{item}}</li>
							</ul>
							<div class="next-button">&gt;</div>
						</div>
			</div>
		</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function () {
			return {
				cmrConList:[
						[['天津远洋城宾悦花园11号楼屋面维修'],
						['美联钢结构建筑系统（上海 ）股份有限公司'],
						['北京'],
						['一部'],
						['张三'],
						['美联钢结构建筑系统北京市通州区中关村科技园区通州园光电一体化产业基地兴光五街8号'],
						['重大'],
						['立项','0/9'],
						['']],
						[['康希诺疫苗003生产车间等'],
						['江苏南通二建集团有限公司'],
						['北京'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['立项','0/9'],
						['2/12']],
						[[''],
						['天津兴泰吉盛置业有限公司'],
						['北京'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['立项','0/9'],
						['4/61']],
						
						[[''],
						['美联钢结构建筑系统（上海 ）股份有限公司'],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[[''],
						['美联钢结构建筑系统（上海 ）股份有限公司'],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[[''],
						['美联钢结构建筑系统（上海 ）股份有限公司'],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[[''],
						['美联钢结构建筑系统（上海 ）股份有限公司'],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[[''],
						[''],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[[''],
						[''],
						['上海'],
						['一部'],
						['张三'],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						['重大'],
						['开工','20/24'],
						['24/58']],
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						,
						
						[['天津地铁1号线'],
						[''],
						[''],
						[''],
						[''],
						['北京市顺义区后沙峪地区古城村东大街十七条12号'],
						[''],
						[''],
						['']]
						
						
					],
					btnList:[1,2,3,4,5,6,7,8,'...',19,20]
			}
		}
	}
</script>
         