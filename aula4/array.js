// MAP
let numeroPares = [2,4,6,8,10];

let numerosParesDobro = numeroPares.map (function(valor)  {return valor*2; });

console.log(numerosParesDobro);

//filter

let numerosFiltrados = numeroPares.filter(function(valor) {return valor > 10 ; });

console.log(numerosFiltrados);

//reduce

let somaPares = numeroPares.reduce(function(acum,valor) {
    return acum + valor;
});

console.log(somaPares);

//forEach

numeroPares.forEach(function(valor,indice) {
    console.log('O índice '+ indice +' tem o valor: '+valor);
})

// exercicio

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(valor) {
    return valor > 18;
});

console.log(maiores);

