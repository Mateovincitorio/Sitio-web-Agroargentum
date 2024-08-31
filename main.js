let mapa = document.getElementById("mapa");
let enlaces = document.querySelectorAll("#enlace1, #enlace2, #enlace3");
let luna = document.getElementById("luna");
const modoOscuro = document.getElementById("darkMode");
localStorage.setItem('darkMode', 'activo')

if(localStorage.getItem("darkMode") === "activo"){
    document.body.classList.add("dark-Mode")
}

modoOscuro.addEventListener("click", () =>{
    luna.innerHTML = `<h2>Modo oscuro inactivo</h2>`
    if (document.body.classList.contains("dark-Mode")) {
        document.body.classList.remove("dark-Mode")
        localStorage.setItem("darkMode", "inactivo");
    }else{
        document.body.classList.add("dark-Mode")
        luna.innerHTML = `<h2>Modo oscuro activo</h2>`
        localStorage.setItem("darkMode", "activo")
    }
})