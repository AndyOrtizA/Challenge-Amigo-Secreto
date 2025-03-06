// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
    let value = input.value.trim();
    if (value === ""){
        alert("Por favor, inserte un numero");
        return;
    } else{
        if(amigos.length == 0){
            resultado.innerHTML = "";
        }
        amigos.push(value);
        agregarLista();
        input.value = "";
    }
    return;
}

function agregarLista() {
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        lista.insertAdjacentHTML("beforeend", 
            `<li>${amigo}<li>`
        );
    });
    return;
}

function sortearAmigo() {
    let amigosSize = amigos.length;
    if (amigosSize == 0) {
        return;
    }else{
        let randomNum = Math.floor(Math.random()* amigosSize);
        resultado.innerHTML = amigos[randomNum];
        lista.innerHTML = "";
        amigos=[];

    }
}