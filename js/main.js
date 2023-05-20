llamar_teclas();
// Función para asignar funciones a cada una de las teclas

let resultado = document.querySelector(".show-pantalla");
// Variable que muestra los resultados de lo ingresado en el teclado en la pantalla

function añadir_tecla(){
    let valor = this.innerHTML;
    resultado = document.querySelector(".show-pantalla");
    resultado.value = resultado.value + valor;
}

function reseteo(){
    resultado = document.querySelector(".show-pantalla");
    resultado.value = "";
}

function resetear_historial(){
    let resultado_anterior = document.querySelector(".show-pantalla");
    resultado_anterior.value = "";
    document.querySelector(".recorrido").innerHTML = "";
}
function destruir_valor(){
    var content = resultado.value;
    var nuevoValor = content.slice(0, -1);
    resultado.value = nuevoValor;
}

function calcular(){
    operation = document.querySelector(".show-pantalla");
    let answer = eval(operation.value);
    set_record(operation.value,answer);
    operation.value = answer;
}

// Creamos diferentes funciones dependiendo de lo que querramos hacer con las diferentes
// teclas en nuestro teclado.


let dom_tec = document.querySelectorAll(".key_item");

// Ahora establecemos sus funciones en el dom y creamos métodos para llamarlas
// o comunicarnos con ellas desde el DOM mediante condicionales.

dom_tec.forEach((keys_content) => {
    let content = keys_content.innerHTML;

    if (content == "C") {
        keys_content.addEventListener("click", reseteo);

    } else if (content == "=") {
        keys_content.addEventListener("click", calcular);

    } else if (content == "AC") {
        keys_content.addEventListener("click", resetear_historial);

    } else if (content == '<div class="delete"> «« </div>') {
        keys_content.addEventListener("click", destruir_valor);

    } else {
        keys_content.addEventListener("click", añadir_tecla);
    }
});