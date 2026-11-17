// Hide the navigation bar when scrolling down, show it when scrolling up.
// The CSS only uses this on desktop. Without JavaScript the bar stays visible.
const navBar = document.querySelector('.nav-bar');
let lastScrollY = 0;
let ticking = false;

window.addEventListener(
	'scroll',
	() => {
		if (ticking) return;
		ticking = true;

		requestAnimationFrame(() => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 0) navBar.classList.add('visible');
			else if (currentScrollY > lastScrollY) navBar.classList.remove('visible');
			else if (currentScrollY < lastScrollY) navBar.classList.add('visible');

			lastScrollY = currentScrollY;
			ticking = false;
		});
	},
	{ passive: true }
);

// Close the mobile menu after someone picks a section.
const mainNav = document.querySelector('#main-nav');

mainNav.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', () => {
		if (mainNav.matches(':popover-open')) mainNav.hidePopover();
	});
});
