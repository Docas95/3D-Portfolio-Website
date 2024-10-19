import * as THREE from 'three';

export function renderProjects(){
    let projectCanvas = document.querySelector("#project");
        
    let projectRenderer = new THREE.WebGLRenderer({canvas:projectCanvas});
    projectRenderer.setSize(projectCanvas.clientWidth, projectCanvas.clientHeight);
    projectRenderer.setPixelRatio(window.devicePixelRatio);

    let projectScene = new THREE.Scene();
    projectScene.background = new THREE.Color(0xDDDDDD);

    let projectCamera = new THREE.PerspectiveCamera(75, projectCanvas.clientWidth / projectCanvas.clientHeight, 0.1, 1000);
    projectCamera.position.set(0,0,2);
    projectCamera.lookAt(0,0,0);

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial({color:0xFFFF00});
    let cube = new THREE.Mesh(geometry, material);

    projectScene.add(cube);

    projectRenderer.render(projectScene, projectCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);

        projectRenderer.render(projectScene, projectCamera);
        requestAnimationFrame(animate);
    }

    animate();
}