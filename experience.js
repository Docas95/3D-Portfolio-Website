import * as THREE from 'three';

export function renderExperience(){
    let experienceCanvas = document.querySelector("#experienceCanvas");
        
    let experienceRenderer = new THREE.WebGLRenderer({canvas:experienceCanvas});
    experienceRenderer.setSize(experienceCanvas.clientWidth, experienceCanvas.clientHeight);
    experienceRenderer.setPixelRatio(window.devicePixelRatio);

    let experienceScene = new THREE.Scene();
    experienceScene.background = new THREE.Color(0xDDDDDD);

    let experienceCamera = new THREE.PerspectiveCamera(75, experienceCanvas.clientWidth / experienceCanvas.clientHeight, 0.1, 1000);
    experienceCamera.position.set(0,0,2);
    experienceCamera.lookAt(0,0,0);

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial({color:0xFF00FF});
    let cube = new THREE.Mesh(geometry, material);

    experienceScene.add(cube);

    experienceRenderer.render(experienceScene, experienceCamera);

    function animate(){
        cube.rotateX(0.01);
        cube.rotateY(0.01);

        experienceRenderer.render(experienceScene, experienceCamera);
        requestAnimationFrame(animate);
    }

    animate();
}