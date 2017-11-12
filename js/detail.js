// 页面加载后三个次日发生变化
var cir1 = document.querySelector("#cir1");
var cir2 = document.querySelector("#cir2");
var cir3 = document.querySelector("#cir3");
var cirbox = document.querySelector(".cirbox");
var close = document.querySelector(".closecir");
var cover = document.getElementById("cover");
var car1 = document.querySelector(".car1");
var car2 = document.querySelector(".car2");
var car3 = document.querySelector(".car3");
var car4 = document.querySelector(".car4");
var nav = document.querySelector("#nav");
window.onscroll = function(){
	var top =document.documentElement.scrollTop||  window.pageYOffset  || document.body.scrollTop;
	if(top>500){
		cirbox.style.bottom = 115/20 + "rem";
		cirbox.style.transition = "1s"
		cir3.style.display = "block";
		cir3.style.transition = "1s"
	}else{
		cirbox.style.bottom = 50/20 + "rem";
		cirbox.style.transition = ".8s"
		cir3.style.display = "none";
		cir3.style.transition = "1s"
	}
}
cir1.onclick = function(){
	cir1.style.display =" none";
	close.style.display = "block";
	cover.style.display = "block";
	nav.style.opacity = "10";
	car1.style.bottom = 275/20 + "rem";
	car2.style.bottom = 225/20+ "rem";
	car3.style.bottom = 175/20+ "rem";
	car4.style.bottom = 125/20 + "rem"; 
	car1.style.transition = "0.5s"
	car2.style.transition = "0.5s"
	car3.style.transition = "0.5s"
	car4.style.transition = "0.5s"
}
close.onclick = function(){
	close.style.display = "none";
	cover.style.display = "none";
	cir1.style.display ="block";
	nav.style.opacity = "0";
	car1.style.bottom = 65 + "rem";
	car2.style.bottom = 65 + "rem";
	car3.style.bottom = 65 + "rem";
	car4.style.bottom = 65 + "rem"; 
	car1.style.transition = "0.5s"
	car2.style.transition = "0.5s"
	car3.style.transition = "0.5s"
	car4.style.transition = "0.5s"
}
