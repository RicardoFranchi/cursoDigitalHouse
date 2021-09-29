let dia = 'quarta';

let resultado = dia == 'Domingo' ? "Vou a praia" : "Fico em Casa";

console.log(resultado);


switch (dia) {
    
    case 'Segunda':
        console.log('Vou tomar café.');
        break;
    case 'terça':
        console.log('Vou no cinema.');
        break;
    case 'Quarta':
        console.log('Dia de comer feijoada.');
        break;
    case 'Quinta':
        console.log('Dia de comer pizza.');
        break;
    case 'Sexta':
        console.log('Dia de tomar cerveja.');
        break;
    case 'Sábado':
        console.log('Jogar tênis de manhã.');
        break;
    case 'Domingo':
        console.log('Vou a praia.');
        break;
    default:
        console.log('Dia '+dia+' sem definição de atividade.');

}