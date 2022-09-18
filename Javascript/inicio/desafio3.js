let a = 7
let b = 94
console.log("Letra A é: "+a);
console.log("Letra B é: "+b);
// depois da troca a letra "a" precisa ser 94 e a letra "b" 7
//outra forma é [a, b] = [b, a]
let c = a;
a = b;
b = c;

console.log("Letra A é: "+a);
console.log("Letra B é: "+b);
