
const equipment = document.querySelector("#equipment");
const equipmentContent = document.querySelector("#equipment__content");
const language = document.querySelector("#language");
const languageBtn = document.querySelector("#language__btn");
const burgerBtn = document.querySelector("#burgerBtn");
const burgerActive = document.querySelector(".burger__active");
const equipmentMobile = document.querySelector(".equipment__active_burger");
const equipmentContentBtn = document.querySelector("#equipmentMobile");


equipment.addEventListener("click", function(){
	equipmentContent.classList.toggle("opa__list");
});

languageBtn.addEventListener("click", function(){
	language.classList.toggle("opa__list");
});



burgerBtn.addEventListener("click", function(){
	burgerBtn.classList.toggle("btnClose");
});

burgerBtn.addEventListener("click", function(){
	burgerActive.classList.toggle("trans");
});



equipmentContentBtn.addEventListener("click", function(){
	equipmentMobile.classList.toggle("opa__list");
});



//const num65 = prompt("number");


$(document).ready(function(){
	$(".equipment__slider_body").slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000,
	});
});

const payClose = document.querySelector("#payClose");
const payObject = document.querySelector("#payObject");
const payActive = document.querySelector("#payActive");


payClose.addEventListener("click", function(){
			payObject.classList.add("none");
});

payActive.addEventListener("click", function(){
	payObject.classList.remove("none");
});







const checkBox = document.querySelector("#checkBox");

checkBox.addEventListener("click", function(){
			checkBox.classList.toggle("checkbox__active");
});



id="btnListNone"

const btnListNone = document.querySelectorAll("#btnListNone");

btnListNone.forEach(function(item){
	item.addEventListener("click", function(){
		burgerActive.classList.toggle("trans");
		burgerBtn.classList.toggle("btnClose");
	});
});