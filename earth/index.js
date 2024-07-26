import * as THREE from 'three';
import {OrbitControls} from "jsm/controls/OrbitControls.js"

const h = window.innerHeight;
const w = window.innerWidth;

const scene = new THREE.Scene();

const fov = 75;
const ratio = w/h;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fov,ratio,near,far)

const renderer = new THREE.WebGLRenderer({antialias: true});

const controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.3;

renderer.setSize(w,h);

document.body.appendChild(renderer.domElement)

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1,12);
const material = new THREE.MeshBasicMaterial({
    map: loader.load("./assets/earthlights1k.jpg")
});

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

const earthMesh = new THREE.Mesh(geometry,material);

scene.add(earthMesh)

camera.position.z = 5;

function animate() {
    earthMesh.rotation.x += 0.001;
    earthMesh.rotation.y += 0.002;

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate)


// link for the texture pack https://planetpixelemporium.com/earth.html