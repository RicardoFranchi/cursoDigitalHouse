// function nomeCompleto (nome, sobrenome) {
//     return nome+ ' '+sobrenome;
// };

// function saudar (nome, sobrenome, funcaoCallback) {
//     return 'Olá '+funcaoCallback(nome,sobrenome)+'!';
// };

// console.log(saudar('Fulano', 'de Tal', nomeCompleto));

let frase = "Essa semana vou no colearning";

for (let letra in frase) {
    console.log(frase[letra]);
}

let data = new Date();

let setFullYear = data.getFullYear();
let setMonth = data.getMonth();
let setDate = data.getDate();

console.log(setFullYear);

console.log(setMonth);

console.log(setDate);

