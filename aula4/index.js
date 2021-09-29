// OBJETOS
const pessoa = {
    nome:'Ricardo',
    sobrenome: 'Franchi',
    cpf: '96782269953',
    idade: 47,
    altura: 1.78,
    naturalidade: 'Nova Londrina',
    estadoNaturalidade: 'Paraná',
    nacionalidade: 'Brasileiro',
    casado: true,
    falar: function() {
        return ('A pessoa '+this.nome+' consegue falar!')
    }
}

//console.log(pessoa.falar());

const animal = {
    nomeCientifico: 'Canis lupus familiaris',
    altura: 15,
    periodoGestacao: 58,
    horasSono: 12,
    expectativaVida: 10,
    peso: 30,
    velocidade: 48,
    cor: 'caramelo',
    comer: function() { return('Come ração!')}
}

//console.log(animal);
//console.log(animal.comer());


// JSON - PRIMO POBRE

const informacoesEmJson = '{ "nome": "Ricardo", "idade": 47 }';

let animalTexto = JSON.stringify(animal);

//console.log(animalTexto);

let animalVoltarObjeto = JSON.parse(animalTexto);

//console.log(animalVoltarObjeto);

let meuNome = 'Ricardo Franchi';

//console.log(meuNome.length);
//console.log(meuNome.indexOf('Franchi'));
//console.log(meuNome.slice(8,15));

//LOOPS DE REPETICOES


for (let i=0; i <= 10; i++) {
    console.log('Número: '+i);
}
