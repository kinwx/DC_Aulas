const titulo = document.querySelector("h1");
const paragrafo = document.querySelector(".texto");
const botao = document.querySelector("button");
const campo = document.querySelector("#input");

botao.addEventListener("click", () => {
  paragrafo.innerHTML = "<h1>Texto alterado com sucesso!</h1>";
  paragrafo.style.color = "red";
});