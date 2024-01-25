import handleText from './textanimations.js'

const png = document.getElementById('bkg')

window.addEventListener('load', (event) => {
	console.log('page has loaded');
	handleText(png);
});

