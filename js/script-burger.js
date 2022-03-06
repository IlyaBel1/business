"use strict";

console.log('a new JS file');

const burgerIcon = document.querySelector(".header__burger");
const navMenu = document.querySelector('.header__nav');
if (burgerIcon) {
	burgerIcon.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		burgerIcon.classList.toggle('_active');
		navMenu.classList.toggle('_active');
	});
}

// ПРОКРУТКА

const navLinks = document.querySelectorAll('.nav__link-header[data-goto]');
if (navLinks.length > 0) {
	navLinks.forEach(navLink => {
		navLink.addEventListener('click', onLinkKick);
	});

	function onLinkKick(e) {
		const navLink = e.target;
		if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
			const gotoBlock = document.querySelector(navLink.dataset.goto);
			const gotoBlockValue = gotoBlock.
				getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (burgerIcon.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burgerIcon.classList.remove('_active');
				navMenu.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}

// HEADER

