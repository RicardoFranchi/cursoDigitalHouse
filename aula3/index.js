let variavelNumero = 10;
let variavelText = 'texto';
let variavelBoleana = true;
let variavelObjeto = {nome: 'Ricardo Franchi',
                      idade: 47,
                      masculino: true,
                     };
let variavelArray = ['Rosicléia','Milena','João Ricardo','Ricardo'];

let NomeDosAlunosDaDH = ['Álvaro','Felipe','Aline','Alessandra','Filipe','Alexsandro','Amanda', 'André','Cicero','Danilo','Diego'];

NomeDosAlunosDaDH.pop();
NomeDosAlunosDaDH.push('Samuelso');

let posicaoArray = NomeDosAlunosDaDH.indexOf('Cicero');

console.log (NomeDosAlunosDaDH);
console.log (posicaoArray);
console.log (NomeDosAlunosDaDH[0]);

function imprimeResultadoArray () {

    console.log(NomeDosAlunosDaDH);
}

imprimeResultadoArray();
