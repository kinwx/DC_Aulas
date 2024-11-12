const cidades = [];
const user = prompt("Qual seu nome?")


let res = prompt("Você já visitou alguma cidade? [sim/nao]")

while(res === "sim") {
    const cidade = prompt("Qual cidade você ja visitou?");
    cidades.push(cidade)
    
    res = prompt("Você ja visitou alguma outra cidade? [sim/nao]")
}

alert(`Olá ${user}, você visitou ${cidades}`)
