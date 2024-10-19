import * as THREE from 'three';

export function renderGameboy(){
    let gameboyCanvas = document.querySelector("#gameboyCanvas");

    let gameboyRenderer = new THREE.WebGLRenderer({canvas: gameboyCanvas});
    gameboyRenderer.setSize(gameboyCanvas.clientWidth, gameboyCanvas.clientHeight);
    gameboyRenderer.setPixelRatio(window.devicePixelRatio);

    let gameboyScene = new THREE.Scene();
    gameboyScene.background = new THREE.Color(0xDDDDDD);

    let gameboyCamera = new THREE.PerspectiveCamera(75, gameboyCanvas.clientWidth / gameboyCanvas.clientHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const cube = new THREE.Mesh(geometry, material);

    gameboyScene.add(cube);

    gameboyCamera.position.set(0, 0, 2);
    gameboyCamera.lookAt(0,0,0);

    gameboyRenderer.render(gameboyScene, gameboyCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);
        
        gameboyRenderer.render(gameboyScene, gameboyCamera);
        requestAnimationFrame(animate);
    ;}
    
    animate();    
}