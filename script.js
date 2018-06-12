
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("input[type=button]");
var body = document.getElementById("gradient");



function setGradient(elem){
	//console.log(elem);
	if(elem){
	elem.style.background=
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";

	css.textContent= body.style.background+ ";";
}
}

color1.addEventListener("input", function(){setGradient(body)},false)
color2.addEventListener("input", function(){setGradient(body)},false)

function swapColors(){
	setGradient(body);

	var tmpColorValue=color1.value;
	color1.value=color2.value
	color2.value=tmpColorValue
	// console.log(button);
	// if(button){
	// setGradient(button);
}
