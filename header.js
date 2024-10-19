import * as THREE from 'three';


export function renderHeader(){
    let nameCanvas = document.querySelector("#nameCanvas");

    let nameRenderer = new THREE.WebGLRenderer({canvas: nameCanvas});
    nameRenderer.setSize(nameCanvas.clientWidth, nameCanvas.clientHeight);
    nameRenderer.setPixelRatio(window.devicePixelRatio);

    let nameScene = new THREE.Scene();
    nameScene.background = new THREE.Color(0xFFFFFF);

    let nameCamera = new THREE.PerspectiveCamera(75, nameCanvas.clientWidth / nameCanvas.clientHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({color:0xff0000});
    const cube = new THREE.Mesh(geometry, material);

    nameScene.add(cube);

    nameCamera.position.set(0,0,3);
    nameCamera.lookAt(0,0.3,0);

    nameRenderer.render(nameScene, nameCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);

        nameRenderer.render(nameScene, nameCamera);
        requestAnimationFrame(animate);
    }
    animate();
}
