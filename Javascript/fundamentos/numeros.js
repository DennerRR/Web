const peso1= 1.0;
const peso2= Number('2.0');

console.log(peso1);
console.log(peso2);
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.876
const avaliacao2 = 6.789

const total = (avaliacao1 * peso1) +(avaliacao2*peso2);
const media = total/(peso1+peso2);

console.log(media.toFixed(2));// Arredonda para cima duas casas decimais
console.log(media.toString());//Valor real em String
console.log(media.toString(2));//Converte o valor real com duas casas para binário
console.log(typeof media);
console.log(typeof Number);