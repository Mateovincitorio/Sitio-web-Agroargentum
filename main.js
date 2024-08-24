

/*document.getElementById("darkMode").onclick = function(){
    modoscuro();
}*/
let body = document.body;
let mapa = document.getElementById("mapa");
let enlaces = document.querySelectorAll("#enlace1, #enlace2, #enlace3");
const modoOscuro = document.getElementById("darkMode");
localStorage.setItem('darkMode', 'inactivo')

if(localStorage.getItem("darkMode") === "inactivo"){
    document.body.classList.remove("dark-Mode")
}else{
    document.body.classList.add("dark-Mode")
}

modoOscuro.addEventListener("click", () =>{
    if (document.body.classList.contains("dark-Mode")) {
        document.body.classList.remove("dark-Mode")
        localStorage.setItem("darkMode", "inactivo");
    }else{
        document.body.classList.add("dark-Mode")
        
        localStorage.setItem("darkMode", "activo")
    }
})

/*function modoscuro() {
    //selecciono el elemento body
    
/*
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode")
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.transition = "background-color 0.5s ease, color 0.5s ease";
        mapa.style.color = 'black';
        enlaces.forEach(el=>{
            el.style.color = "blanchedalmond"
        })
    }else{
        body.classList.add("dark-mode")
        body.style.backgroundColor = "black";
        body.style.color = "blanchedalmond";
        body.style.transition = "background-color 0.5s ease, color 0.5s ease";
        mapa.style.color = 'blanchedalmond';
        enlace1.style.color = 'blanchedalmond';
        enlace2.style.color = 'blanchedalmond';
        enlace3.style.color = 'blanchedalmond';
    }*/
    /*
    // Modifica la propiedad CSS
        body.style.backgroundColor = "black";
        body.style.color = "blanchedalmond";
        body.style.transition = "background-color 0.5s ease, color 0.5s ease";
        mapa.style.color = 'blanchedalmond';
        enlace1.style.color = 'blanchedalmond';
        enlace2.style.color = 'blanchedalmond';
        enlace3.style.color = 'blanchedalmond';*/

