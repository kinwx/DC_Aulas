function saudacao(){
    alert("Hello World")
}

// let conteudo = document.getElementById("conteudoBotao")
// function saudacao(){
//     alert(`Hello world`);
// }

// let conteudo = document.getElementById('conteudoBotao');
// let conteudoDiv = document.getElementsByTagName('div');
// let conteudoClasse = document.getElementsByClassName('card');

// console.log(conteudoClasse);

// console.log(conteudoDiv);

// console.log(conteudo);

// conteudo.addEventListener('click', function(){
//     alert(`Hello world`);
// })

// conteudo.addEventListenr('click', function(){
//     alert(`Hello world`);
// });





// function saudacao(){
//     alert(`Hello world`);
// }

let conteudoUl = document.querySelector("ul")
let conteudo = document.getElementById('conteudoBotao');
let conteudoDiv = document.getElementsByTagName('div');
let conteudoClasse = document.getElementsByClassName('card');

console.log(conteudoClasse);

console.log(conteudoDiv);

console.log(conteudo);
console.log(conteudoUl);

conteudo.addEventListener('click', function(){
    alert(`Hello world`);
})

// conteudo.addEventListenr('click', function(){
//     alert(`Hello world`);
// });

function mudouValor() {
    let valorInput = document.querySelector("#conteudo").value;
  document.querySelector("#cliente").innerHTML = "o valor digitado " + valorInput;
    
}
// ___________________________________________________
let conteudoMenu = document.getElementById('menu');
let sectionConteudo = document.getElementById('conteudoHeader');


conteudoMenu.addEventListener('click',function(){
    let imagem = document.createElement('img');
    let menu = document.createElement('nav');
    let dadosImagem = {
        link: 'https://marketplace.canva.com/EAFDPCAyhG8/1/0/1600w/canva-logotipo-moderno-tecnologia-e-gaming-roxo-lnFtfcMMnHM.jpg',
        descricao: 'Logo tipo'
    }

    imagem.src = dadosImagem.link;
    imagem.alt = dadosImagem.descricao;
    imagem.width = "500";

    menu.innerHTML = `
    <button>Home</button>
    <button>About</button>
    <button>Services</button>
    `;

    sectionConteudo.classList.add('card');

    sectionConteudo.appendChild(imagem);
    sectionConteudo.appendChild(menu);
})


