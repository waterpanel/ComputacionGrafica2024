var scene = null;
var camera = null;
var renderer = null;
var controls = null;
var createdObjects = [];  // Arreglo para almacenar los objetos creados

function startScene() {
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

// Animación de la escena
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

// Mostrar los inputs dinámicos según la figura seleccionada
function showInputs(geometryDraw) {
    const formContainer = document.getElementById("input-form");
    formContainer.innerHTML = '';  // Limpiar los inputs anteriores

    switch (geometryDraw) {
        case 'Box':
            formContainer.innerHTML = `
                <label for="width">Width:</label>
                <input type="number" id="width" value="3">
                <label for="height">Height:</label>
                <input type="number" id="height" value="3">
                <label for="depth">Depth:</label>
                <input type="number" id="depth" value="3">
                <button class="btn btn-primary mt-2" onclick="createGeometry('Box')" >Create Box</button >`;
            break;
            
        case 'Torus':
            formContainer.innerHTML = `
                <label for="radius">Radius:</label>
                <input type="number" id="radius" value="2">
                <label for="tube">Tube:</label>
                <input type="number" id="tube" value="0.8">
                <label for="radialSegments">Radial Segments:</label>
                <input type="number" id="radialSegments" value="32">
                <label for="tubularSegments">Tubular Segments:</label>
                <input type="number" id="tubularSegments" value="100">
                <button class="btn btn-primary mt-2" onclick="createGeometry('Torus')">Create Torus</button>`;
            break;
        case 'Cone':
            formContainer.innerHTML = `
                <label for="radius">Radius:</label>
                <input type="number" id="radius" value="2">
                <label for="height">Height:</label>
                <input type="number" id="height" value="3">
                <label for="radialSegments">Radial Segments:</label>
                <input type="number" id="radialSegments" value="60">
                <button class="btn btn-primary mt-2" onclick="createGeometry('Cone')">Create Cone</button>`;
            break;
    }
}

// Crear geometría usando los valores ingresados
function createGeometry(geometryDraw) { 
    var randomColor = +('0x' + Math.floor(Math.random() * 16777215).toString(16));
    var geometryFigure = null;

    switch (geometryDraw) {
        case 'Box':
            const width = parseFloat(document.getElementById('width').value);
            const height = parseFloat(document.getElementById('height').value);
            const depth = parseFloat(document.getElementById('depth').value);
            geometryFigure = new THREE.BoxGeometry(width, height, depth);
            drawObjects(geometryFigure, randomColor);
            break;
        case 'Torus':
            const radius = parseFloat(document.getElementById('radius').value);
            const tube = parseFloat(document.getElementById('tube').value);
            const radialSegments = parseFloat(document.getElementById('radialSegments').value);
            const tubularSegments = parseFloat(document.getElementById('tubularSegments').value);
            geometryFigure = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
            drawObjects(geometryFigure, randomColor);
            break;
        case 'Cone':
            const coneRadius = parseFloat(document.getElementById('radius').value);
            const coneHeight = parseFloat(document.getElementById('height').value);
            const coneRadialSegments = parseFloat(document.getElementById('radialSegments').value);
            geometryFigure = new THREE.ConeGeometry(coneRadius, coneHeight, coneRadialSegments);
            drawObjects(geometryFigure, randomColor);
            break;
    }
}

function drawObjects(geometryFigure, col) {
    const material = new THREE.MeshPhysicalMaterial({ color: col, roughness: 0.1, metalness: 0.5 });
    const objectDraw = new THREE.Mesh(geometryFigure, material);
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

