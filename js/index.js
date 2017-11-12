var img = document.querySelector(".img");
var cirs = document.querySelector(".cir");
var cir = cirs.querySelectorAll("li");

// 创造函数来改变图片路径和小圆点cir颜色
	var a = 0;
	setInterval(function(){
		if(a>=cir.length){
			a = 0;
		}
		for(var i = 0;i<cir.length;i++){
			if(i == a){
				cir[i].style.backgroundColor ="red"; 
			}else{
				cir[i].style.backgroundColor = "#fff";
			}
		}
		a++;
		img.src = "img/banner" + a + ".jpg";
	},1000)
	
//倒计时
function add0(num){
	if(num<9){
		return "0" + num;
	}else{
		return num;
	}
}
function countDown(year,moth,day,hour,minute,second,x){
	var now = new Date();
	var nowtime = now.getTime();//当前时间转换成毫秒
	var future = new Date(year,moth,day,hour,minute,second);
	var futuretime = future.getTime();//未来结束时的时间换成毫秒
	var diff = futuretime - nowtime;//之间差值，就是要进行倒计时的时间

	var mt = 1000*60;//minutes每分钟多少毫秒
	var ht = mt*60;
	var dt = 24*ht;
	var d = parseInt(diff/dt);
	var h = parseInt(diff%dt/ht);
	var m = parseInt(diff%dt%ht/mt);
	var s = parseInt(diff%dt%ht%mt/1000);

	if(x == "a"){
		return add0(h);
	}else if(x == "b"){
		return add0(m);
	}else if(x == "c"){
		return add0(s);
	}
}

setInterval(function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var hours = now.getHours();
	var h = document.getElementById("h");
	var m = document.getElementById("m");
	var s = document.getElementById("s");
	if(h<=16){
		h.innerHTML = countDown(year,month,date,16,00,00,"a")
	}else{
		h.innerHTML = countDown(year,month,date+1,16,00,00,"a");
	}
	m.innerHTML = countDown(year,month,date,00,00,00,"b");
	s.innerHTML = countDown(year,month,date,00,00,00,"c");
},1000)