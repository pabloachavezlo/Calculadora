let key = [
    "AC", "C",'<div class="delete"> «« </div>', "/",
    7, 8, 9, "*",
    4, 5, 6,  "-",
    1,2,3, "+",
    0,".","="
];

// Asignamos los valores de cada tecla dependiendo del valor que van a poseer
// Nota: los valores deben de ir de acuerdo a la función, por ejemeplo:
// En la multiplicación no podemos poner "X" porque resulta en un valor no válido,
// Y no efectuará ninguna multiplicación, por ello en luegar de "X" ponemos "*".
// Esto a no ser que creemos una función aparte como en el caso de la tecla "AC".

function llamar_teclas(){
    let dom_tec = document.querySelector(".teclado");

    key.forEach((each_key)=>{
        let div = document.createElement("div");
        div.innerHTML = each_key;
        div.classList.add("key_item");

        key.forEach((each_key2,indice)=>{
            each_key == indice ? div.classList.add("key_item_tipo1") : null
        });
        each_key == 0 ? div.classList.add("key_item_0") : null

        dom_tec.appendChild(div);
    });
}

function set_record(operation, result){
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".recorrido");
    records_box_DOM.innerHTML += `
        <li>
            <span > ${operation} </span>
            <span class="equal-sign"> = </span>
            <span class="result"> ${result} </span>
        </li>`;
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
}