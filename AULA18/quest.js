let response = ""
do {
    response = prompt(`
        ESCOLHA UMA OPÇÃO
        [ 1 ] - Bom dia    
        [ 2 ] - Boa tarde    
        [ 3 ] - Boa noite  
        [ 4 ] - O prazer é meu  
        [ 5 ] - Encerrar  
    `)
   switch(response){
        case "1":
            alert("Bom dia!")
            continue
        case "2":
            alert("Boa tardee!")
            continue
        case "3":
            alert("Boa noitee!")
            continue
        case "4":
            alert("O prazer é todo meu!")
            continue
        case "5":
            alert("O programa será encerrado, obrigado!")
            break
        default:
            alert("Opção inválida.")
    }
} while(response != 5) 

