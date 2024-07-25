

document.getElementById("darkMode").onclick = function(){
    modoscuro();
}

function modoscuro() {
    //selecciono el elemento body
    let body = document.body;
    let mapa = document.getElementById("mapa");
    let enlace1 = document.getElementById("enlace1");
    let enlace2 = document.getElementById("enlace2");
    let enlace3 = document.getElementById("enlace3");

    // Modifica la propiedad CSS
        body.style.backgroundColor = "black";
        body.style.color = "blanchedalmond";
        body.style.transition = "background-color 0.5s ease, color 0.5s ease";
        mapa.style.color = 'blanchedalmond';
        enlace1.style.color = 'blanchedalmond';
        enlace2.style.color = 'blanchedalmond';
        enlace3.style.color = 'blanchedalmond';
}