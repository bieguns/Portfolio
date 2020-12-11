console.log('Hello World!');

const btnHamburger = document.querySelector('.menu-toggle');
const pagesMenu = document.querySelector('.pages ul');

let mobileMenuOpen = 0;

console.log(pagesMenu);

function menuOpenClose(event) {
	console.log('You clicked.');
	console.log(event);

	if(mobileMenuOpen === 0) {
		// OPEN THE MENU
		pagesMenu.classList.add('menu-show');
		mobileMenuOpen = 1;
	}
	else {
		// CLOSE THE MENU
		pagesMenu.classList.remove('menu-show');
		mobileMenuOpen = 0;
	}
	console.log(mobileMenuOpen)

	
}

btnHamburger.addEventListener("click", menuOpenClose);

