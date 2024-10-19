import * as THREE from 'three';

export function renderIcons(){
    let iconCanvas = [10];
    let iconRenderer = [10];
    let iconScene = [10];
    let iconCamera = [10];
    let geometry = [10];
    let material = [10];
    let cube = [10];

    for(let i = 0; i < 10; i++){
        iconCanvas[i] = document.querySelector("#icon" + (i + 1));

        iconRenderer[i] = new THREE.WebGLRenderer({canvas: iconCanvas[i]});
        iconRenderer[i].setSize(iconCanvas[i].clientWidth, iconCanvas[i].clientHeight);
        iconRenderer[i].setPixelRatio(window.devicePixelRatio);

        iconScene[i] = new THREE.Scene();
        iconScene[i].background = new THREE.Color(0xFFFFFF);

        iconCamera[i] = new THREE.PerspectiveCamera(75, iconCanvas[i].clientWidth / iconCanvas[i].clientHeight, 0.1, 1000);
        iconCamera[i].position.set(0,0,1.8);
        iconCamera[i].lookAt(0,0,0);

        geometry[i] = new THREE.BoxGeometry(1,1,1);
        material[i] = new THREE.MeshBasicMaterial({color:0x0000ff});
        cube[i] = new THREE.Mesh(geometry[i], material[i]);

        iconScene[i].add(cube[i]);

        iconRenderer[i].render(iconScene[i], iconCamera[i]);
    }

    function animate(){
        for(let i = 0; i < 10; i++){
           cube[i].rotateX(0.01);
           cube[i].rotateY(0.01);
            iconRenderer[i].render(iconScene[i], iconCamera[i]);
        }

        requestAnimationFrame(animate);
    }

    animate();
}