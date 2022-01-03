// par nome/ valor
const saudacao = 'Eae' // contexto léxico 1

function exec(){
    const saudacao = 'Salve' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente={
    nome:'Joao',
    idade: 22,
    peso: 90,
    endereco:{
        logradouro: "Rua 2",
        numero: 44
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)