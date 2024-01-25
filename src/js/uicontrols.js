//import { typewriter } from './animations'; // you'll need to move your prompts here

function navtoggle() {
	let btn = document.getElementById('ib');
	let el = document.getElementsByClassName('button')
	btn.addEventListener('click', tog);

	let state = true;

	console.log(el)
	console.log(el[0])

	function tog() {

		if (state == true) {
			state = false
			console.log(state)
			el[0].style.visibility = 'visible';
			el[1].style.visibility = 'visible';
			el[2].style.visibility = 'visible';
			el[3].style.visibility = 'visible';
			el[4].style.visibility = 'visible';
			console.log("click")


		} else {
			state = true
			el[0].style.visibility = 'hidden';
			el[1].style.visibility = 'hidden';
			el[2].style.visibility = 'hidden';
			el[3].style.visibility = 'hidden';
			el[4].style.visibility = 'hidden';
			console.log("click")
		}
	}

}

export default function darkMode(scene, c1, c2) {
	let btn = document.getElementById('toggle');
	let ui = document.getElementById('ui');
	let state = true
	btn.addEventListener('click', log);

	function log() {

		if (state == true) {
			state = false
			scene.background = c1
			ui.classList.remove('dark-theme')
			ui.classList.toggle('light-theme');
			console.log('light mode toggled')
		} else {
			scene.background = c2
			ui.classList.remove('light-theme')
			ui.classList.toggle('dark-theme');
			state = true
			console.log('dark mode toggled')
		}
	}
}

navtoggle()


function changeScreen() {
	var canvas = document.getElementById("2Dscene");
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height); //clear html5 canvas



	prompts();
	//canvas.parentNode.removeChild(c);


}


/* we'll set it up like this: two functions
one for triggering left animations, one for triggering right animations 
depending on whether your mouse first goes towards left or right, 
you then trigger a sequence of > type left side, type right side 
*/
function promptsRight() {

	var i = 0;
	var txt = 'how can we change the industry?_'; /* The text */
	var speed = 50; /* The speed/duration of the effect in milliseconds */
	var divname = "prompts-left"

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById(divname).innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	typeWriter();
}

function promptsLeft() {

	var i = 0;
	var txt = 'tech in art_'; /* The text */
	var speed = 50; /* The speed/duration of the effect in milliseconds */
	var divname = "prompts-right"

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById(divname).innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	typeWriter();
}


// fix this- 
export function triggerTitles() {

	document.getElementById('promptsright').innerHTML ='industries for the future'
	document.getElementById('promptsleft').innerHTML = 'tech for communities'

}

