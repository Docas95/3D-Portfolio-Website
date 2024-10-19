import * as THREE from 'three';

export function renderEducation(){
    let educationCanvas = document.querySelector("#educationCanvas");
        
    let educationRenderer = new THREE.WebGLRenderer({canvas:educationCanvas});
    educationRenderer.setSize(educationCanvas.clientWidth, educationCanvas.clientHeight);
    educationRenderer.setPixelRatio(window.devicePixelRatio);

    let educationScene = new THREE.Scene();
    educationScene.background = new THREE.Color(0xDDDDDD);

    let educationCamera = new THREE.PerspectiveCamera(75, educationCanvas.clientWidth / educationCanvas.clientHeight, 0.1, 1000);
    educationCamera.position.set(0,0,2);
    educationCamera.lookAt(0,0,0);

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial({color:0xFF00FF});
    let cube = new THREE.Mesh(geometry, material);

    educationScene.add(cube);

    educationRenderer.render(educationScene, educationCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);

        educationRenderer.render(educationScene, educationCamera);
        requestAnimationFrame(animate);
    }

    animate();
}