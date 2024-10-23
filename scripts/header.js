import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


export function renderHeader(){
    let nameCanvas = document.querySelector("#nameCanvas");

    let nameRenderer = new THREE.WebGLRenderer({canvas: nameCanvas});
    nameRenderer.setSize(nameCanvas.clientWidth, nameCanvas.clientHeight);
    nameRenderer.setPixelRatio(window.devicePixelRatio);

    let nameScene = new THREE.Scene();
    nameScene.background = new THREE.Color(0x222831);

    let nameCamera = new THREE.PerspectiveCamera(75, nameCanvas.clientWidth / nameCanvas.clientHeight, 0.1, 1000);
    nameCamera.position.set(0,0,2.2);
    nameCamera.lookAt(0,0,0);

    let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4);
    nameScene.add(ambientLight);

    let earth;
    const gltfLoader = new GLTFLoader();
    const urlEarth = './models/earth/scene.gltf';
    gltfLoader.load(urlEarth, (gltf) =>{
        earth = gltf.scene;
        earth.rotateZ(-0.3);
        earth.rotateX(0.1);
        nameScene.add(earth);
    });

    let asteroid;
    const urlAsteroid = './models/asteroid/scene.gltf';
    gltfLoader.load(urlAsteroid, (gltf) =>{
        asteroid = gltf.scene;
        asteroid.scale.set(0.3, 0.3, 0.3);
        nameScene.add(asteroid);
    })

    let rotationSpeed = 0.00001 * window.innerWidth;

    let time = 0.0;
    let orbitRadius = 1.5;
    function animate(){
      
        if(earth){
            earth.rotateY(rotationSpeed);
            nameScene.add(earth);
        }

        if(asteroid){
            time += rotationSpeed * 2;
            asteroid.position.x = orbitRadius * Math.cos(time);
            asteroid.position.z = orbitRadius * Math.sin(time);
            asteroid.position.y = 0.3 * Math.sin(time * 2);

            asteroid.rotateY(rotationSpeed * 2);

            nameScene.add(asteroid);
        }
        nameRenderer.render(nameScene, nameCamera);
        requestAnimationFrame(animate);
    }

    animate();
}
