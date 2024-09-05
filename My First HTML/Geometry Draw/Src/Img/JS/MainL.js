//creation of basic elements
var scene = null;
var camera = null;
var renderer = null;
var controls = null;

const size = 20;
const division = 20;


function startScene(){
    //scene, camera, renderer
    scene = new THREE.Scene(),//crea una escena
    scene.background = new THREE.Color(0x524E4E);//color del fondo
    camera = new THREE.PerspectiveCamera(75,//Angulo del campo de vision (abajo o arriba)
                                         window.innerWidth / innerHeight,//Relación aspecto (16x16 o fullScreen)
                                         0.1,//lo mas cerca que renderiza
                                         1000);//lo mas lejos que renderiza

    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});//esto es para que busque el canvas que creamos en objects
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);//agrega al cuerpo del documento en el canvas


    //creacion de un cubo
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
    animate();

}

function animate(){
    renderer.render( scene, camera );
}
