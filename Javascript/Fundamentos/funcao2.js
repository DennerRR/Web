// armazenar uma funcao em variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(3,4)

// armazenar uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a+b
}

console.log(soma(4, 4))

// return implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5,3))

const imprimir3 = a => console.log(a)
imprimir3('Top!!')