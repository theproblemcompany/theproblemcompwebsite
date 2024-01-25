
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';


const gltfLoader = new GLTFLoader()
var modelPath = 'src/animations/exporttest.glb'
//const noise = new ImprovedNoise();



// should be: logical sequence of functions in the app 
export default function addModels(gltfLoader, modelPath, mixer, scene) {
    gltfLoader.load(modelPath, (gltf) => {
        var model = gltf.scene
        model.scale.set(.2, .2, .2)
        mixer = new THREE.AnimationMixer(model)
        
        let animation = mixer.clipAction(gltf.animations[0])
        scene.add(gltf.scene)

        document.addEventListener('scroll', playAnimation)
        model.addEventListener('mousemove', onDocumentMouseMove)

        // fix this little animation play on import problem!!!

        function playAnimation() {
            console.log('scrolled')
            //model.scale.set(.2, .2, .2)
            animation.enable = true;
            animation.play();
        }
    })
}

export function createBlobs(object, material, scene, p1, p2, p3, x, y, z) {
    var sphere_geometry = new THREE.SphereGeometry(x, y, z);
	object = new THREE.Mesh(sphere_geometry, material);
    object.position.set(p1, p2, p3)
	console.log(object)
	scene.add(object)
    return object
}

export function updateBlob(object, value){
    //ALL BLOB SETTINGS HERE: 

    object.geometry.attributes.position.needsUpdate = true;
    var time = performance.now() * 0.003;

    // change 'k' value for more spikes
    var k = 0.6;
    var v3 = new THREE.Vector3();
    const positions = object.geometry.attributes.position;
    for (var i = 0; i < positions.count; i++) {
        v3.fromBufferAttribute(positions, i).setLength(k);
        let n = noise.perlin3(v3.x + time * value, v3.y + time * value, v3.z + time * value);
        v3.setLength(1 + 0.5 * n);
        positions.setXYZ(i, v3.x, v3.y, v3.z);
    }
    positions.needsUpdate = true;
    object.geometry.computeVertexNormals(); 

    return object 

}

export function updatecornerBlobs(object, value, k) {
    
}




export function triggerBlobs(position){
    
	
}