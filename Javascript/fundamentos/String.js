const facu = "UNIPAMPA"

console.log(facu);
console.log(facu.charCodeAt(7));
console.log(facu.charAt(7));
console.log(facu.charAt(8));
console.log(facu.indexOf(6));
console.log(facu.indexOf('A'));
console.log(facu.toLowerCase());

console.log(facu.substring(1));
console.log(facu.substring(0,3));

console.log("Faculdade: ".concat(facu).concat("!!"));
console.log(facu.replace('A', 'J'));
console.log(facu.replace(/\w/g, 'J'));

console.log('ana,maria,pedro'.split(','));
console.log('ana,maria,pedro'.split(/,/));
console.log('ana,maria,pedro'.split(/./));