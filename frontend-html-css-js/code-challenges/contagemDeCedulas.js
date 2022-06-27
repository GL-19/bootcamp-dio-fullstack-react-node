let valor = parseInt(gets());

console.log(valor);
function calculaNumCedulas(valor, cedula) {
    return parseInt(valor / cedula);
}
function calculaSobra(valor, cedula, numCedulas) {
    return valor - cedula * numCedulas;
} 

let notaCem = calculaNumCedulas(valor, 100);
valor = calculaSobra(valor, 100, notaCem);
console.log(`${notaCem} nota(s) de R$ 100,00`);


let notaCinquenta = calculaNumCedulas(valor, 50);
valor = calculaSobra(valor, 50, notaCinquenta);
console.log(`${notaCinquenta} nota(s) de R$ 50,00`);

let notaVinte = calculaNumCedulas(valor, 20);
valor = calculaSobra(valor, 20, notaVinte);
console.log(`${notaVinte} nota(s) de R$ 20,00`);

let notaDez = calculaNumCedulas(valor, 10); 
valor = calculaSobra(valor, 10, notaDez);
console.log(`${notaDez} nota(s) de R$ 10,00`);

let notaCinco = calculaNumCedulas(valor, 5);
valor = calculaSobra(valor, 5, notaCinco);
console.log(`${notaCinco} nota(s) de R$ 5,00`);

let notaDois = calculaNumCedulas(valor, 2);
valor = calculaSobra(valor, 2, notaDois);
console.log(`${notaDois} nota(s) de R$ 2,00`);

let notaUm = valor;
console.log(`${notaUm} nota(s) de R$ 1,00`);
