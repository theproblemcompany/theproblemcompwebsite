import * as THREE from 'three'
import RGBELoader from 'three/examples/jsm/loaders/GLTFLoader.js'
var transparentMaterial

export default transparentMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    emissive: 0xF3F3F3, 
    metalness: 1,
    roughness: 0.01, 
    ior: 2.5, 
    thickness: 0.01, 
    transmission: 1.5, 
    side: THREE.DoubleSide, 
    opacity: 0.5,
    fog: true, 
    transparent: true,
  });

export var normalMaterial = new THREE.MeshNormalMaterial; 

/*
var hdri = new THREE.RGBELoader().load(
    "src/images/hdri/snow_field_4k.exr",  
    () => { 
      hdrEquirect.mapping = THREE.EquirectangularReflectionMapping; 
    }
  );
*/
export var glass = new THREE.MeshPhysicalMaterial({  
    roughness: 0.8,  
    color: 0x000000,
    transmission: 0.8, // Add transparency
    transparent: true,
    wireframe: true,
  });

export var soap = new THREE.MeshPhongMaterial({
  shininess: 100,
  color: 0xffffff,
  specular: 0xffffff,
  transparent: true,
  side: THREE.BackSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});