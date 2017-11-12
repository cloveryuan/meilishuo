var inp1 = document.querySelector(".inp1");
var inp2 = document.querySelector(".inp2");
var inp3 = document.querySelector(".inp3");
var select = true;
inp1.onclick = function(){
	if (select) {
		selects("0% 0%");
	}else{
		selects("0% 100%");
	}
	select = !select;
}
inp2.onclick = function(){
	if (select) {
		selects("0% 0%");
	}else{
		selects("0% 100%");
	}
	select = !select;
}
inp3.onclick = function(){
	if (select) {
		selects("0% 0%");
	}else{
		selects("0% 100%");
	}
	select = !select;
}
function selects(a){
	inp1.style.background = "url(img/shopcar/checkbox.png)";
	inp2.style.background = "url(img/shopcar/checkbox.png)";
	inp3.style.background = "url(img/shopcar/checkbox.png)";
	inp1.style.backgroundSize = "cover";
	inp2.style.backgroundSize = "cover";
	inp3.style.backgroundSize = "cover";
	inp1.style.backgroundPosition = a;
    inp2.style.backgroundPosition = a;
    inp3.style.backgroundPosition = a;
}

// 获取购物车里的宝贝个数
var num1 = document.getElementById("num1");
var tit2 = document.querySelectorAll(".tit2");
	console.log(tit2.length);
	num1.innerHTML = tit2.length;
//获取选中宝贝的个数
