// "use strict"
//Меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {

		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
};
function menu_close() {
	if (iconMenu.classList.contains("_active")) {
		document.body.classList.remove("_lock");
		iconMenu.classList.remove("_active");
		menuBody.classList.remove("_active");
	}
}


document.addEventListener("click", function (e) {
	if (e.target.closest('.header__logo, .menu__link, .menu__body')) {
		let user_menu_icon = document.querySelector('.menu__icon');
		let user_menu_body = document.querySelector('.menu__body');
		user_menu_icon.classList.remove('_active');
		user_menu_body.classList.remove('_active');
		// Если у body при клике на пункты не отберается класс _lock
		let body = document.querySelector('body');
		body.classList.remove("_lock");
	}
});
