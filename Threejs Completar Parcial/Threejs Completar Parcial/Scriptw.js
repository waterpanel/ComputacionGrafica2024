function Vector(){
    let ax = document.getElementById("Pax").value;
    let ay = document.getElementById("Pay").value;
    let az = document.getElementById("Paz").value;

    let bx = document.getElementById("Pbx").value;
    let by = document.getElementById("Pby").value;
    let bz = document.getElementById("Pbz").value;

    alert("("+ax+","+ay+","+az+")");
    alert("("+bx+","+by+","+bz+")");

    let vx = bx-ax;
    let vy = by-ay;
    let vz = bz-az;
    
    document.getElementById("result").innerHTML = VectorFinal
}