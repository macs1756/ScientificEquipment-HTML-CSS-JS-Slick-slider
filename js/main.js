
const equipment = document.querySelector("#equipment");
const equipmentContent = document.querySelector("#equipment__content");
const language = document.querySelector("#language");
const languageBtn = document.querySelector("#language__btn");
const burgerBtn = document.querySelector("#burgerBtn");
const burgerActive = document.querySelector(".burger__active");

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