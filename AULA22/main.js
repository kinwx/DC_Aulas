function calcular(a, b, operacao){
    console.log(`Esta ocorrendo uma operação`)
    const resultado = operacao(a , b); // somar y + x
    return resultado
}
function somar(x,y){
    return x + y
}
function subtrair(number1, number2){
    return number1 - number2
}
console.log(calcular(10,20,somar))
console.log(calcular(10,5,subtrair))

// ==============
// callback

console.log(calcular(9, 2, (num1, num2) => {
    console.log(`Executando uma subtração`);
    return num1 - num2;
}));

function exibirItens(itens, indice, tamanho) {
    console.log(itens, indice, tamanho);
};


const lista = ["davi", "dalton", "gabriel", "nathan"];

for(let i = 0; i < lista.length; i++){
    exibirItens(lista[i], i, lista.length);
};

lista.forEach(function(pessoa, i, lista) {
    console.log(pessoa, i, lista)
})

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ];

  const nomePersonagem = []

for(let personagem of personagens){
    nomePersonagem.push(personagem.classe);
};
console.log(nomePersonagem);


