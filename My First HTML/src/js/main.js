
 alert("Webos");


 function MostrarFecha(){
        const hoy = new Date();  // Estoy creando una funcion que crea una constante en la que vamos a almacenar la fecha
        const fechaReseteada = hoy.toLocaleDateString(); //crea una constante en la cueal va a poner la fecha actual en cadena de texto
        document.getElementById("Fecha").innerHTML = fechaReseteada;//"document" representa todo el doc HTML, "getelement" busca un elemento en el codigo por ID y "innertext" reescribe lo que haya escrito en una etiqueta de texto
    }