//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.



let listaAmigos= []; // amigos[] adiconar os amigos digitados
let listaAmigoSorteados = []; //armazena os amigos sorteados para não sortear repetido



function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input');

    if (nomeAmigo.value == '') {//  evita adicionar uma string vazia na lista de amigos
        alert('Por favor, digite o nome de um amigo no sorteio');
        return;
    }

    if (listaAmigos.includes(nomeAmigo.value)) {           //evita que seja adiconado um mesmo amigo
        alert('Este amigo já está presente na lista');
        nomeAmigo.value = '';
        return;
    }
    listaAmigos.push(nomeAmigo.value);                    //atualiza a lista de amigos caso passe por todos os ifs
    console.log(listaAmigos);                            //para teste
    nomeAmigo.value = '';                                //limpa o campo do imput
    exibirNomes('listaAmigos',listaAmigos,'');
             
    
    
    
}
  
function sortearAmigo(){
    let ulElemento = document.getElementById('resultado');//vai exibir o amigo sorteado
    ulElemento.textContent = '';
    if(listaAmigos.length == 0){//caso o usuário sortei sem ter adicionado um nome
        alert('Sua lista de amigos está vazia!!');
        return;
    }
    if(listaAmigos.length == 1){//caso o usuário sortei com apenas um nome de amigo
        alert('você precisa adicionar pelo menos 2 amigos');
        return;
    }
    if (listaAmigoSorteados.length == listaAmigos.length) {//caso todos tenham sido sorteados
        alert('Todos os amigos ja foram sorteados! ');
        
      
    }
    let numeroIndice;
    do {//  gerando um indice aleatório
        numeroIndice = parseInt(Math.random() * listaAmigos.length);
    } while (listaAmigoSorteados.includes(listaAmigos[numeroIndice]))
    
    listaAmigoSorteados.push(listaAmigos[numeroIndice]);//atualiza a lsita de amigos  sorteados 
    console.log(listaAmigoSorteados);//teste
    //exibindo o amigo sorteado
    ulElemento.textContent = listaAmigos[numeroIndice];

}
function exibirNomes(idUl, lista,texto) {
    // Seleciona o elemento <ul> pelo ID, para usar tanto na Lista Amigos como RESULTADO
    let ulElemento = document.getElementById(idUl);
    ulElemento.innerHTML = '';// Limpa o conteúdo atual da <ul> como solicita o desafio
    let li = document.createElement('li');
    li.textContent = texto;
    ulElemento.appendChild(li);
    // Perco o array lista e cria os elementos li
    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = lista[i]; // Define o texto do <li> como o valor do item
        ulElemento.appendChild(li); // Adiciona o <li> à <ul>
    }
  
}




function limparListaSorteados() {
    listaAmigoSorteados = []; // Limpa a lista de sorteados
    nomeAmigo = document.querySelector('input');
    nomeAmigo = '';   

   

}
