llamar_teclas();

let resultado = document.querySelector("#resultado-pantalla");

function añadir_tecla(){
    let valor = this.innerHTML;
    resultado = document.querySelector("#resultado-pantalla");
    resultado.value = resultado.value + valor;
}

function reseteo(){
    resultado = document.querySelector("#resultado-pantalla");
    resultado.value = "";
}

function resetear_todo(){
    let resultado2 = document.querySelector("#resultado-pantalla");
    resultado2.value = "0";
    document.querySelector(".recorrido").innerHTML = "";
}
function destruir_valor(){
    var content = resultado.value;
    var nuevoValor = content.slice(0, -1);
    resultado.value = nuevoValor;
}

function calcular(){
    operation = document.querySelector("#resultado-pantalla");
    let answer = eval(operation.value);
    set_record(operation.value,answer);
    operation.value = answer;
}



// Evento de todas las teclas
let dom_tec = document.querySelectorAll(".key_item");

dom_tec.forEach((keys_content) => {
    let content = keys_content.innerHTML;

    if (content == "C") {
        keys_content.addEventListener("click", reseteo);
    } else if (content == "=") {
        keys_content.addEventListener("click", calcular);
    } else if (content == "AC") {
        keys_content.addEventListener("click", resetear_todo);
    } else if (content == '<div class="delete"> « </div>') {
        keys_content.addEventListener("click", destruir_valor);
    } else {
        keys_content.addEventListener("click", añadir_tecla);
    }
});