import * as THREE from 'three';
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();


const fov = 75;
const ratio = w/h;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fov,ratio,near,far);

const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.3;   

renderer.setSize(w,h);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({
    color : 0x00ff00
})

const cube = new THREE.Mesh(geometry,material);

scene.add(cube)

camera.position.z = 5;

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate)