let carro = {
    nome: "HRV",
    ano: 2021,
    ligar: function () {
        console.log('O carro '+this.nome+' está ligado.')
    }
}

//console.log(carro.nome + ' e seu ano é '+ carro.ano);
carro.ligar();

function Carro(nomeCarro, anoCarro) {
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro('Civic', 2013);
let gol   = new Carro('Gol', 1990);

console.log(civic);
console.log(gol);