//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//função para adicionar nome a lista amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    document.getElementById('amigo').disabled = false;
    exibirAmigos();
    limparCampo();
}

//função para limpar o campo de texto "adicionar amigo"
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

//função para exibir na parte HTML o nome dos amigos e limpar para nao acontecer repetição
function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    }
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ('O amigo secreto sorteado é: ' + amigoSorteado);
    if (amigos == '') {
        resultadoElemento.innerHTML = ('Todas as pessoas já foram sorteadas');
    }

    amigos.splice(indiceAleatorio, 1);
    listaAmigos.innerHTML = '';
}