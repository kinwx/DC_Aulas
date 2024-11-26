let pessoas = ["Davi","Isaac","Nayara","Mota"]

console.log(pessoas)

for(let indice = 0; indice < pessoas.length; indice++){
    console.log(`O usuario ${pessoas[indice]} está no indice ${indice}`)
}

let nivelBidimen = ["Nivel 1", ["Nivel 2", ["Nivel 3"]]]

console.log(nivelBidimen)
console.log(nivelBidimen[0]) 
console.log(nivelBidimen[1][0])
console.log(nivelBidimen[1][1][0])

let matrizNova = [
    ['l1 c1', 'l1 c2', 'l1 c3'], 
    ['l2 c1', 'l2 c2', 'l2 c3'], 
    ['l3 c1', 'l3 c2', 'l3 c3'], 
];
matrizNova[0].push("l1 c4") 
// matrizNova[1].splice(1, 1, "")

console.table(matrizNova)

for(let row in matrizNova){
    for(let indice in matrizNova[row]){
        console.log(`Na linha ${row} na coluna: ${indice} tem o item: ${matrizNova[row][indice]}`)
    }
}