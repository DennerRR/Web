console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Camisa'
//obj1['nome'] = 'Camisa'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando.')
    }
}

const obj2= new Obj('Mesa')
const obj3 = new Obj('toalha de mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()