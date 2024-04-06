const formEnviar = document.getElementById('formulario-add-num')
const numeros = document.getElementById('numeros')
let listaPai = document.querySelector('.lista-de-numeros')
let listaDeNumeros = []

const formBuscar = document.getElementById('formulario-busca-num')
const buscaNumero = document.getElementById('busca-numero')
const resultadoBusca = document.querySelector('.resultado-busca')

formBuscar.addEventListener('submit', function (e){
    e.preventDefault();
    buscaBinaria(listaDeNumeros, parseFloat(buscaNumero.value))
})

formEnviar.addEventListener('submit', function (e){
    e.preventDefault();
    criaArray(parseFloat(numeros.value))
    mostraNumeroTela(parseFloat(numeros.value))
})

function criaArray (numero) {   
    listaDeNumeros.push(numero)     
}

function mostraNumeroTela (numero) {
    let listaFilho = ''
    listaFilho += `<li>${numero}</li>`
    listaPai.innerHTML += listaFilho
    return listaPai
}

function buscaBinaria (lista, item) {
    let baixo = 0 
    let alto = lista.length - 1 

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2)
        const chute = lista[meio]

        if(chute === item){
            return resultadoBusca.innerHTML = `<p>O numero que voce buscou foi o ${meio + 1}º a ser digitado</p>`
        } else if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
    }

    return resultadoBusca.innerHTML = '<p>voce ainda não digitou esse numero</p>' 
}
