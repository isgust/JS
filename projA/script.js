const para = document.querySelector('.texto');

para.addEventListener("click", atualizarNome)

function atualizarNome(){
  var nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1:" + nome;
}