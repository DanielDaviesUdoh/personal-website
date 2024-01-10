const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const portfolio = document.querySelector('.cta')
const resume = document.getElementById('cta')

portfolio.addEventListener('click', ()=> clickItem(portfolio, 'Portfolio'))
resume.addEventListener('click', ()=> clickItem(resume, 'Resume'))

function clickItem(item, content) {
    item.innerHTML = 'Processing'
    setTimeout(()=> {
      item.innerHTML = `${content}`
    }, 1500)
}
