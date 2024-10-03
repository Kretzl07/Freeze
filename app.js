function criaCartao(categoria, pergunta, resposta){
let container = document.getElementById('container');
let Cartao = document.createElement('article');
Cartao.className = 'Cartao';
Cartao.innerHTML = `
<div class = "Cartao-conteudo">
<h3> ${categoria} </h3>
<div class = "Cartao-pergunta">
<p> ${pergunta} </p>
</div>
<div class = "Cartao-resposta">
<p> ${resposta} </p>
</div>
</div>
`

let resopostaVisivel = false;
function viraCartao(){
    resopostaVisivel = !resopostaVisivel;
    Cartao.classList.toggle('active', resopostaVisivel);
}
Cartao.addEventListener('click', viraCartao)

container.appendChild(Cartao);

}