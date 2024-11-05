
// nome

// var nome = "David"



// Variavel global


// let numero = 10;

// function novoNumero(){
//     let numero = 30;
//     console.log(numero);
// }

// console.log(numero);

// numero = novoNumero();
// novoNumero();

// const nome = "David Amorim";

// Funções nativas do javascript

// console.log(`Tem um erro aqui`);

// prompt
// inserir dados

// let nome = prompt(`Digite aqui o seu nome: `);

// console.log(nome);

// Criar um programa em javascript que recebe dois numeros
// Com esses dois numeros vocês vão fazer as operações
// matematicas e dar um console no resultado

// parseInt()
// parseFloat()
// Number()


// let numero1 = parseInt(prompt("Digite o primeiro numero"));

// let numero2 = parseInt(prompt("Digite o primeiro numero"));

// let somar = numero1 + numero2;

// camelCase
// let operacaoSomar
// let nomeDoUsuario

// snake case

// let nome_do_usuario

// console.log("Ola usuario o numero somado foi " + somar)
// console.log("Ola usuario o numero somado foi " , somar)

// template string

// console.log(`Ola usuario o numero somado é${somar}`)

// ---------------------- # ------------------------ # -------------------------

// console.log(`Função nativa do javascript`)

// prompt(`Digite seu nome : `);

// alert(`Você cancelou o pedido errado`);

// confirm(`Você tem certeza que deseja sair?`);


// Criar um sistema em javascript em que o usuario vai digitar o nome
//  O que ele estuda
// Ano em que nasceu
// Trazer a idade de acordo com o ano em que nasceu
// Mostrar todas as informações coletadas no console ou alert


// prompt

let nomeDoUsuario = prompt(`Digite seu nome : `)
let campoDeEstudo = prompt(`O que você estuda: `)
let anoQueNasceu  = Number(prompt(`Digite o ano que nasceu`)); 
let anoCompleto = new Date().getFullYear();
typeof(anoCompleto)
let idade = anoCompleto - anoQueNasceu;


alert(`Ola senhor ${nomeDoUsuario}, vi que você estuda ${campoDeEstudo} e possui idade de ${idade} anos`);

console.log(`Ola senhor ${nomeDoUsuario}, vi que você estuda ${campoDeEstudo} e possui idade de ${idade} anos`);

console.log(anoCompleto)


// ========================= * =========================== * ========================

// AND(&&)
// let idade = 20;

// ===
// >= maior igual
// <= menor igual
// !=

// Se for verdadeiro
if(idade >= 18 && idade <=21){
    console.log(`Você pode tirar a carteira`)
} else {
    console.log(`Você não pode tirar a carteira`)
}


// Preciso de um sistema que valide a idade do usuario se for maior que 18 pode passar
// Se for menor que 18 deve informar no console que o usuario é adolecente
// Se for menor que 12 o console deve informar que o o suario é uma criança
// E se passar dos 80 o usuario é idoso




// Preciso de um sistema que valide a idade do usuario se for maior ou igual a 18 pode passar
// Se for menor que 18 deve informar no console que o usuario é adolecente
// Se for menor que 12 o console deve informar que o o suario é uma criança
// E se passar dos 80 o usuario é idoso

let idadeUsuario = Number(prompt(`Digite sua idade`))

if(idadeUsuario >= 18 && idadeUsuario <= 80){
    console.log(`O usuario pode acessar`);
} else if(idadeUsuario < 18 && idadeUsuario >= 12) {
    console.log(`Você é adolecente`)
} else if (idadeUsuario < 12 && idadeUsuario > 0) {
    console.log(`Você é uma criança`)
} else if(idadeUsuario > 80) {
    console.log(`Você é idoso`)
} else {
    console.log(`Valor invalido`)
}



// &&
// ||

// if(idadeUsuario < 12 || idadeUsuario > 80){
//     console.log(`Você esta em uma idade prioritaria`)
// } else {
//     console.log(`Você esta em uma idade mediana`)
// }

// NOT
// Se for verdadeiro ele transforma em false
// Se for false ele transforma em verdadeiro

// let nomeUsuario = false;

// // Se for invalido
// if(!nomeUsuario){
//     console.log(`Faltando informação do nome do usuario`)
// } else {
//     console.log(`Nome aceito com sucesso`)
// }


let confirmaExclusao = confirm(`Tu tem certeza que vai deletar?`);


if(confirmaExclusao){
    alert(`Você excluiu o dado selecionado`)
} else{
    alert(`Que bom que você não excluiu`)
}