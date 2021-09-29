const somar       = (numeroA, numeroB) => numeroA + numeroB;
const subtrair    = (numeroA, numeroB) => numeroA - numeroB;
const multiplicar = (numeroA, numeroB) => numeroA * numeroB;

const calculadora = (numeroA, numeroB, Operacao) => Operacao(numeroA, numeroB);

console.log(calculadora(10,20,somar));
console.log(calculadora(10,20,subtrair));
console.log(calculadora(10,20,multiplicar));

function dobro(numero) {
    return numero*2;
 }
 
 function triplo(numero) {
     return numero*3;
 }
 
 function aplicar(numero, operacao) {
   console.log(operacao(numero));
 }
 aplicar(2,dobro);
 aplicar(3,triplo);