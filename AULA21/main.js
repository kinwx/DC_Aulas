// funções nomeadas

saudacao();
function saudacao() {
    console.log("Bom dia!");
};

const novaSaudacao = () => {
    console.log("Boa noite");
};

/**
 * Função para somar dois números
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
*/
function somarNumero(n1, n2) {
    console.log("A soma do número 1 + número 2 é igual a", 3);
};

somarNumero(10, 20);

function operacoes(n1, n2) {
    console.log("A soma do número 1 + número 2 é igual a", n1+n2)
    console.log("A subtração do número 1 - número 2 é igual a", n1-n2);
    console.log("A divisão do número 1 / número 2 é igual a", n1/n2);
    console.log("A multiplicação do número 1 * número 2 é igual a", n1*n2);
}
operacoes(10, 5)