// llamar teclas desde el DOM

let tecla_ac = document.querySelector(".tecla-AC");

function imprimir(){
    console.log("Tecla AC");
}

tecla_ac.addEventListener('click', imprimir)