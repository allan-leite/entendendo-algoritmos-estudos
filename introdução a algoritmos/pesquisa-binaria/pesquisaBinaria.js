const buscaBinaria = (lista, item) => {
    let baixo = 0 //1 baixo e alto acompanham a parte da lista que você está procurando
    let alto = lista.length -1 //1 baixo e alto acompanham a parte da lista que você está procurando
    
    while (baixo <= alto){ //2 Enquanto ainda não conseguiu chegar a um único elemento...
        const meio = Math.floor((baixo + alto) / 2) //3 ... verifica o elemento central.
        const chute = lista[meio]
        
        if(chute === item){ //4 Acha o item
            return meio;
        } else if (chute > item) { //5 O chute foi muito alto.
            alto = meio - 1
        } else { //6 O chute foi muito baixo.
            baixo = meio + 1
        }
    }
    
    return null //7 O item não existe
    
}

const minhaLista = [4, 1, 3, 4, 5]; //8 Vamos testálo

console.log(buscaBinaria(minhaLista, 1)) // 1 9 Lembre-se, as listas começam no 0. O próximo endereço tem índice 1.
console.log(buscaBinaria(minhaLista, -1)) // null 10 "null" significa nulo em javaScript. ele indica que o item não foi encontrado
