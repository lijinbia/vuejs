
//回调函数参数时间、定时时间
/*
 	提供的方法this.timeOut()/this.timeStart()/this.timereset();
 	属性，。fn：回调函数(h,m,s,倒计时的一个紫福春拼接)；。numTime：实时相差的毫秒数
 	
 	有空做好模块暴露
 */

function CountDown (fn,strTime) {
		this.fn = fn;
		this.str = null;
		this.numTime = this.getTime(strTime);
		//alert(this.numTime)
		//计时器
		this.timer = null;
		//秒数
		this.num =parseInt(this.numTime/1000);        
		this.timeStart();
	}
	CountDown.prototype = {
		//得到并定义属性numTime---倒计时的工作时间；
		getTime:function (strTime) {
			var date = new Date(strTime)
			var date0 = new Date();
			return date.getTime() - date0.getTime();			
		},
		//暂停功能
		timeOut:function(){
			clearInterval(this.timer);
		},
		//开始
		timeStart:function(){
			clearInterval(this.timer);
			var that = this;
			this.timer = setInterval(function () {
			var s = that.num%60 ;
			var min = (that.num - s)/60%60;
			var h = Math.floor(that.num/3600);
			that.str ="剩余：" + h + "小时" + min + "分" + s + "秒";
			if (h<10) {
				h = "0"+h;
			}
			if (min < 10) {
				min = "0" + min;
			}
			if (s < 10) {
				s = "0" + s;
			}
			//返回，更新时间；
			that.fn(h,min,s,that.str);
			if (that.num <= 0 ) {
				//console.log("s")
				clearInterval(that.timer);
			}
			that.num --;
			},1000);
		},
		//清零/重设,传入的参数就是重新设定的时间，为零时是倒计时清零，以小时为单位，
		reset:function (num) {
			this.numTime = num*3600000;
			this.num =parseInt(this.numTime/1000);        
			this.timeStart();
		}
		//

		
		
	}