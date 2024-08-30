function Vector(){
    let ax = document.getElementById("puntoAX").value;
    let ay = document.getElementById("puntoAY").value;
    let az = document.getElementById("puntoAZ").value;

    let bx = document.getElementById("puntoBX").value;
    let by = document.getElementById("puntoBY").value;
    let bz = document.getElementById("puntoBZ").value;

    /*alert("("+ax+","+ay+","+az+")");
    alert("("+bx+","+by+","+bz+")");*/

    let vx = bx-ax;
    let vy = by-ay;
    let vz = bz-az;


    let VectorFinal = `(${vx},${vy},${vz})`
   
    document.getElementById("result").innerHTML = VectorFinal

}

function Suma(){
    let vx = document.getElementById("SvectorVX").value;
    let vy = document.getElementById("SvectorVY").value;
    let vz = document.getElementById("SvectorVZ").value;

    let ux = document.getElementById("SvectorUX").value;
    let uy = document.getElementById("SvectorUY").value;
    let uz = document.getElementById("SvectorUZ").value;

   
    let sx = Number(vx)+Number(ux);
    let sy = Number(vy)+Number(uy);
    let sz = Number(vz)+Number(uz);


    let VectorFinal = `(${sx},${sy},${sz})`
   
    document.getElementById("resultSuma").innerHTML = VectorFinal

    
}

function Producto(){

    let vx = document.getElementById("PvectorVX").value;
    let vy = document.getElementById("PvectorVY").value;
    let vz = document.getElementById("PvectorVZ").value;

    let ux = document.getElementById("PvectorUX").value;
    let uy = document.getElementById("PvectorUY").value;
    let uz = document.getElementById("PvectorUZ").value;

    let px = Number(vx)*Number(ux);
    let py = Number(vy)*Number(uy);
    let pz = Number(vz)*Number(uz);

    let VectorFinal = `(${px},${py},${pz})`
   
    document.getElementById("resultProducto").innerHTML = VectorFinal

    
}


function Magnitud(){
    let vx = Number(document.getElementById("MvectorVX").value);
    let vy = Number(document.getElementById("MvectorVY").value);
    let vz = Number(document.getElementById("MvectorVZ").value);


    let x = Math.pow(vx,2);
    let y = Math.pow(vy,2);
    let z = Math.pow(vz,2);
 

  let M = Math.sqrt((x+y+z),2);
  let Magnitud = parseFloat(M.toFixed(2));//para que lo aproxime a dos cifras

   
    document.getElementById("resultMagnitud").innerHTML = Magnitud;
}