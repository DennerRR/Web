// FUncao sem retorno

function imprimirSoma(a, b){
console.log(a + b)
}

imprimirSoma(1,3)
imprimirSoma(4) //Not a Number
imprimirSoma(5, 3 , 4 ,5 ,6)
imprimirSoma()

// Funcao com return

function soma(a, b = 1){
    return a+b
}
console.log(soma(4,5))
console.log(soma(1))
console.log(soma())