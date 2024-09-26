function criaCartão(categoria, perguntas, resposta){
let container = document.getElementById('container');
let Cartão = document.createElement('article');
Cartão.className = 'Cartão';
Cartão.imerHtml = `
<div class = "Cartão-conteudo">
<h3> ${categoria} </h3>
<div class = "Cartão - pergunta">
<p> ${pergunta} </p>
</div>
<div class = "Cartão - resposta">
<p> ${resposta} </p>
</div>
</div>
`
container.appendChild(Cartão);
}