let mapa = document.getElementById("mapa");
let enlaces = document.querySelectorAll("#enlace1, #enlace2, #enlace3");
const modoOscuro = document.getElementById("darkMode");


if(localStorage.getItem("darkMode") === "activo"){
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