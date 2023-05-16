let key = [
    "AC", "C",'<div class="delete"> « </div>',
    7, 8, 9, "/",
    4, 5, 6, "*",
    1,2,3,"-","=",
    0,".","+"
];

function llamar_teclas(){
    let dom_tec = document.querySelector(".teclado");

    key.forEach((each_key)=>{
        let div = document.createElement("div");
        div.innerHTML = each_key;
        div.classList.add("key_item");

        //Asignación de clas de color
        key.forEach((each_key2,indice)=>{
            each_key == indice ? div.classList.add("key_tiem_color1") : null
        });
        each_key == "=" ? div.classList.add("key_tiem_color2") : null

        dom_tec.appendChild(div);
    });
}
