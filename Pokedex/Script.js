//Buscar datos de Pokemon segun su nombre o numero


//1) creamos una función para buscar en que input esta la info,
//2) almacenar la información de ese input en una variable
//3) busca en el api el nombre o el num del pokemon
//5) responde la información obtenida y la envia a 
function BuscarPokemon(contenedorNumero){//tiene como parametro contenedorNumero por el cual se le va a pasar el valor del input
    let inputID = `PokemonInput${contenedorNumero}`;// almacena si es el input1 o el input2
    let nombrePokemon = document.getElementById(inputID).value.trim().toLowerCase();//utiliza el valor de inputID para buscar el valor que contenga el input original y almacenarlo en nombrePokemon

    let urlAPI = ` https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`// crear el url que va a ir cambiando segun nombrePokemon 

    fetch(urlAPI)//fetch es una función en JavaScript que se utiliza para hacer solicitudes HTTP (como GET o POST) a un servidor o API, y permite obtener datos de recursos en la web de forma asíncrona
    .then(Response => Response.json())//una vez fetch es resuelta con exito (.then) responde usando el metodo Response con formato JSON 
    //recordar que el JSON es la información extraida de pokeAPI
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))// almacena el JSON en datosPokemon y los pasa como parametro a la función mostrarPokemon.
    .catch(() => mosrtrarError(contenedorNumero))//en caso de que haya algun error con la información muestre error
}

