// let carro = {
//     nome:"HRV",
//     ano: "2020"
// }

// for (let prop in carro) {
//     console.log(carro[prop]);
// }

// let series = ["Friends", "Game of Thrones", "Breaking Bad"];

// for(let valor of series) {
//     console.log(valor);
// };

// let bart = {
//     mae: "Marge",
//     pai: "Homer",
//     hobbie: "Skate",
//     corCamiseta: "Laranja"
// }

// for (let prop in bart) {
//     console.log(bart[prop]);
// }

// let frase = "Essa semana vou no colearning";

// for (let letra of frase) {
//     console.log(letra);
// }

// //DATE

// const data = new Date();

// console.log(data.getDate());


// let data = new Date();

// data.setFullYear(2021);
// data.setMonth(09);
// data.setDate(14);

// console.log(data);

// let pessoa = {
//     nome: "Ricardo",
//     altura: 1.78
// }

// let {nome} = pessoa;

// console.log(nome);


// let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

// let [marrocos, bariloche, barcelona, china, grecia] = destinosIncriveis;

// console.log(bariloche);
// console.log(china);

let frutas = ["maçã", "banada", "uva"];
let frutas2 = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutas2];

console.log(listaCompleta);

// com objeto
let pessoa = {
    nome: "Ricardo",
    idade:46
}

let infoPessoa = {
    tel: "+5511995310980",
    rg: "59595474-1",
    ...pessoa
}

console.log(infoPessoa);

function letras(...paramns) {
    console.log(paramns);
}

letras('a', 'b', 'c', 'd', 'e');