import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export function renderAbout(){
    let aboutCanvas = document.querySelector("#aboutCanvas");

    let aboutRenderer = new THREE.WebGLRenderer({canvas: aboutCanvas});
    aboutRenderer.setSize(aboutCanvas.clientWidth, aboutCanvas.clientHeight);
    aboutRenderer.setPixelRatio(window.devicePixelRatio);

    let aboutScene = new THREE.Scene();
    aboutScene.background = new THREE.Color(0x31363F);

    let aboutCamera = new THREE.PerspectiveCamera(75, aboutCanvas.clientWidth / aboutCanvas.clientHeight, 0.1, 1000);
    aboutCamera.position.set(0, 0, 0.8);
    aboutCamera.lookAt(0,0,0);

    let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
    aboutScene.add(ambientLight);

    let ufo;
    const gltfLoader = new GLTFLoader();
    const ufoUrl = './models/ufo/scene.gltf';
    gltfLoader.load(ufoUrl, (gltf) => {
        ufo = gltf.scene;
        ufo.rotateX(0.8);
        aboutScene.add(ufo);
    });

    const speed = 0.00001 * window.innerWidth;
    function animate(){
        
        if(ufo){
            ufo.rotateY(speed * 4);
            ufo.position.y = Math.sin(Date.now() * 0.001) / 10;
            aboutScene.add(ufo);
        }
        
        aboutRenderer.render(aboutScene, aboutCamera);
        requestAnimationFrame(animate);
    ;}
    
    animate();    
}