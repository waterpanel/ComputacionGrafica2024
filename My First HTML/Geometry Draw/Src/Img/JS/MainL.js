//creation of basic elements
var scene = null;
var camera = null;
var renderer = null;
var controls = null;
var createdObjects = [];  // Arreglo para almacenar los objetos creados

function startScene() {
    //scene, camera, renderer
    scene = new THREE.Scene(),
    scene.background = new THREE.Color(0xb4bac9);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 5, 10);
    controls.update();

    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    camera.position.z = 5;
    animate();



    //pointlight + helper
    const pointLight = new THREE.PointLight( 0xFFFFFF, 2, 100 );// color, intensidad, rango
pointLight.position.set( 13, 13, 13 );
scene.add( pointLight );

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );


 
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Crear geometría y agregarla a la escena
function createGeometry(geometryDraw) { 
    var geometryFigure = null;

    switch(geometryDraw) {
        case 'Box':
            geometryFigure = new THREE.BoxGeometry(3, 3, 3);
            break;
        case 'Torus':
            geometryFigure = new THREE.TorusGeometry(2, 0.8, 32, 100);
            break;
        case 'Cone':
            geometryFigure = new THREE.ConeGeometry(2, 3, 40);
            break;
    }

    var randomColor = +('0x' + Math.floor(Math.random()*16777215).toString(16));
    const material = new THREE.MeshPhysicalMaterial( { color: randomColor,roghness: 0.1, metalness: 2} );
    const objectDraw = new THREE.Mesh( geometryFigure, material );
    scene.add( objectDraw );
    
    scene.add(objectDraw);
    createdObjects.push(objectDraw);  // Agregar la figura al arreglo
}

// Eliminar todas las geometrías creadas
function deleteGeometry() {
    for (let i = 0; i < createdObjects.length; i++) {
        scene.remove(createdObjects[i]);  // Eliminar cada objeto de la escena
    }
    createdObjects = [];  // Vaciar el arreglo después de eliminar los objetos
}
