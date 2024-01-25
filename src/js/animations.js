export default function constantRotation(object, speed) {
	object.rotation.x += speed
	object.rotation.y += speed
}

export function mouseOrbit(object, mouseX, mouseY, speed) {
	let targetX = mouseX * .001
	let targetY = mouseY * .001
	object.rotation.y += speed *(targetX - object.rotation.y)
	object.rotation.x += speed * (targetY - object.rotation.x)
	object.rotation.z += speed * (targetY - object.rotation.x)

	//camera.position.set(5, 3, 4)
	//controls.update();
    
}

/*
export function typeWriter(txt, speed) {
	console.log(txt)

	var i = 0
	if (i < txt.length) {
	  document.getElementById('prompts').innerHTML += txt.charAt(i);
	  i++;
	  setTimeout(typeWriter, speed);
	}
}
*/
