// modules imports
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import darkMode from './uicontrols'
import * as MAT from './materials'

import addModels from './geometries'
//import { typewriter } from './animations';
global.THREE = THREE;

let scene, camera, renderer, controls

let updateBG = new THREE.Color(0x131218)
let initBG = new THREE.Color(0xF9F9F9)

const gltfLoader = new GLTFLoader()
//const animMixer = new AnimationMixer()

const clock = new THREE.Clock();
var update


// ADD 3D MODELS & ANIMATIONS 

var modelPath = 'src/animations/button.glb'
var blob
var value = 0.1

var obj_button
var animation

let mixer

//SEQUENCE FUNCTIONS
init();
animate();
//addModels(gltfLoader, modelPath, mixer, scene)


//EVENT LISTENERS

//interactive window resize
window.addEventListener('resize', onWindowResize, false);

//global document interaction
//document.addEventListener('wheel', onDocumentScrollMove)
var leftBlob

function init() {
	createScene()
	createLights()
	createFollower()
	//let pos = "object.position.set(0,0,-1)"
	blob = createBlobs(blob, MAT.glass, scene, 0, 0, -1, 50, 30, 30)
}

//console.log(obj_button + 'hello')

//------------------------------------------------------
document.addEventListener('mousemove', onDocumentMouseMove)
document.addEventListener('scroll', onDocumentScrollMove)

let mouseX = 0
let mouseY = 0

let targetX = 0
let targetY = 0

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

import { triggerTitles } from './uicontrols';



let cont = document.getElementById("bkg")
//cont.addEventListener('mousemove', triggerTitles)

function onDocumentMouseMove(event) {

	//setTimeout(triggerTitles, 1900) // set an animation or fade here: make it more responsive 

	mouseX = (event.clientX - windowHalfX)
	mouseY = (event.clientY - windowHalfY)
	mouseOrbit(blob, mouseX, mouseY, 0.15)
	mouseOrbit(obj_button, mouseX, mouseY, 0.15)

}

//let leftd = document.getElementById('promptsleft')
//let rightd = document.getElementById('promptsright')

// trigger blobs on mouseover

//uncomment this later
//leftd.addEventListener('mouseover', dummyfunction) 

function dummyfunction() {
	leftBlob= createBlobs(leftBlob, MAT.normalMaterial, scene, 5, -3, 0, 1.5, 40, 40)
	console.log('blob created')
	//leftBlob.position.set (0,0,-2)

	//setTimeout(scene.remove) --> set timeout and remove blob
}


function onDocumentScrollMove(event) {
	//console.log('this has been scrolled')

	if (event.deltaY > 0) {
		//blob.scale.x += 0.02;
		//blob.scale.y += 0.02;
		console.log(event.deltaY)
	}

	else {
		//blob.scale.x -= 0.02;
		//blob.scale.y -= 0.02;
		//blob.scale.z -= 0.02;
		console.log(event.deltaY)
	}

	if (event) {
		//blob.position.z += 0.01
	} else {
		//blob.position.z = -1
	}

}

// GEOMETRIES

import { createBlobs } from './geometries'

// ANIMATIONS

import { constantRotation, mouseOrbit } from './animations'

import { updateBlob } from './geometries'

function animate() {
	requestAnimationFrame(animate);
	updateBlob(blob, value);
	//updateBlob(leftBlob, value);

	var delta = clock.getDelta();
	if (mixer) mixer.update(delta);
	//console.log(mixer)

	renderer.render(scene, camera);
};

//MOUSE-FOLLOWER SPHERE

function createFollower() {
	var mouse = { x: 0, y: 0 };
	var mouseSphere = new THREE.SphereGeometry(0.4, 60, 60);
	var mouseObject = new THREE.Mesh(mouseSphere, MAT.default);
	mouseObject.position.z = 0;
	scene.add(mouseObject);

	function sphereFollower(event) {
		event.preventDefault();
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = - (event.clientY / window.innerHeight) * 2 + 1

		// Make the sphere follow the mouse
		var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
		vector.unproject(camera);
		var dir = vector.sub(camera.position).normalize();

		var distance = - camera.position.z / dir.z;
		var pos = camera.position.clone().add(dir.multiplyScalar(distance));
		console.log(pos)
		mouseObject.position.copy(pos);

	}

	document.addEventListener('mousemove', sphereFollower);
}




//UTILITY FUNCTIONS

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}


function createScene() {
	const canvas = document.getElementById('threescene');
	scene = new THREE.Scene();
	scene.background = initBG
	darkMode(scene, updateBG, initBG)

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer({ canvas });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	camera.position.set(0, 1, 4)
	controls.update();

}

function createLights() {
	var ambientlight = new THREE.AmbientLight(0xFFFFFF, 0.5)
	var d_light = new THREE.DirectionalLight(0xEE8E8E, 0.5); // directional light
	const p_lightA = new THREE.PointLight(0xFFFFFF, 1.2, 150);
	const p_lightB = new THREE.PointLight(0xFFFFFF, 1, 150);
	//p_lightA.position.set(0, 15, 50);
	//p_lightB.position.set(15, 0, 15);
	scene.add(p_lightA);
	scene.add(p_lightB);
	scene.add(ambientlight);
	scene.add(d_light);
}


import handleText from './textanimations'


const png = document.getElementById('bkg')

window.addEventListener('load', (event) => {
	console.log('page has loaded');
	handleText(png);
});

