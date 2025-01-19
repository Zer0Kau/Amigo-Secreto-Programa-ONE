//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = document.getElementById('listaAmigos');
let entradaAmigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

let lista_de_nomes = [];

function adicionarAmigo() {
    let amigo = entradaAmigo.value.trim();
    if (amigo == "") {
        alert("Digite o nome do amigo!");
        return;
    }
    lista_de_nomes.push(amigo);

    let nomes_visiveis = document.createElement('li');
    nomes_visiveis.textContent = amigo;
    listaAmigos.appendChild(nomes_visiveis);

    entradaAmigo.value = "";    
}

function sorteador() {
    if (lista_de_nomes.length == 0 || lista_de_nomes.length == 1) {
        resultado.style.color = "red";
        resultado.textContent = "Adicione pelo menos 2 amigos!";
        return;
    }

    let aleatorio = Math.floor(Math.random() * lista_de_nomes.length);

    let amigo_escolhido = lista_de_nomes[aleatorio];

    resultado.style.color = "green";
    resultado.textContent = "O amigo escolhido é: "+amigo_escolhido;
}