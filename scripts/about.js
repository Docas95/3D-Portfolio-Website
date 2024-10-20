import * as THREE from 'three';

export function renderAbout(){
    let aboutCanvas = document.querySelector("#aboutCanvas");

    let aboutRenderer = new THREE.WebGLRenderer({canvas: aboutCanvas});
    aboutRenderer.setSize(aboutCanvas.clientWidth, aboutCanvas.clientHeight);
    aboutRenderer.setPixelRatio(window.devicePixelRatio);

    let aboutScene = new THREE.Scene();
    aboutScene.background = new THREE.Color(0x31363F);

    let aboutCamera = new THREE.PerspectiveCamera(75, aboutCanvas.clientWidth / aboutCanvas.clientHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const cube = new THREE.Mesh(geometry, material);

    aboutScene.add(cube);

    aboutCamera.position.set(0, 0, 2);
    aboutCamera.lookAt(0,0,0);

    aboutRenderer.render(aboutScene, aboutCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);
        
        aboutRenderer.render(aboutScene, aboutCamera);
        requestAnimationFrame(animate);
    ;}
    
    animate();    
}