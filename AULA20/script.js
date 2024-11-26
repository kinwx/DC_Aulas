let imoveis = []
let menu = 0

do {
    menu = prompt(`
        Imoveis Registrados

        -------------------
        [ 1 ] - Registrar
        [ 2 ] - Mostrar
        [ 3 ] - Sair
    `)
    switch(menu){
        case "1":
            let imovel = {
                nome: prompt("Qual seu nome?"),
                quartos: prompt("Digite a quantidade de quartos"),
                banheiro: prompt("Digite a quantidade de banheiros"),
                garagem: prompt("Tem garagem? [sim/nao]"),
            }
            
            let confirm = confirm("Você deseja salvar este imovel?");
            if(!confirm) {
                alert("Processo descontinuado, voltando ao menu");
                continue;
            }

            imoveis.push(imovel)
            alert("Imovel cadastrado com sucesso!")
            break
        case "2":
            if(imoveis.length === 0) {
                alert("Não existe imoveis cadastrados")
                continue
            }

            alert(`
            Imoveis cadastrados:
            ${imoveis}
            `)
            break
    }

} while(menu !== "3");

