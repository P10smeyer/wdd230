const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});