// const arr = ["a", "b", "c"]
// arr.reverse()
// console.log(arr[0])

// let listaDeDados = [4, "Davi", undefined, null, true, false, 2, 3, () => "<3"]
// listaDeDados[1] = 900
// console.log(listaDeDados)

let personagensAnime = ["Gaara", "Naruto", "Chopper", "Luffy", "Seiya", "Shiryu", "Ravena"];
personagensAnime[5] = "Docinho";
personagensAnime.push("Zoro");
personagensAnime.unshift("Itachi");
personagensAnime.pop()
personagensAnime.shift()
console.log(personagensAnime);

let existe = personagensAnime.includes("Luffy");
console.log(existe);


let existeIndex = personagensAnime.indexOf("Luffy");
console.log(existeIndex);

let dadosRetirados = personagensAnime.slice(0, 2);

let dadosSubstituidos = personagensAnime.splice(1, 2, "Sasuke", "Sakura")
console.log(dadosSubstituidos);
console.log(personagensAnime);

for(let item of personagensAnime) {
    console.log(item)
};
