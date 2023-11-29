import readline from 'readline-sync';
import {questoes, msg} from './data.js';
import {buscarPergunta, imprimePergunta, verificaResposta, acertoPerguntas, msgDeFelicitacoes} from './service.js';
let i = 1;//Incremento
let c = 0; //Acertos

const seuNome = readline.question('Digite seu nome! ');
console.log('Seja Bem-vindo(a) ' +seuNome+ '!');

do {
    let perguntaSelecionada = buscarPergunta(questoes);
        perguntaSelecionada.forEach(imprimePergunta);
    let digitarResposta = readline.question('Digite a resposta :');
    let verificacao = verificaResposta(perguntaSelecionada, digitarResposta);
        
        if( verificacao ) {
            console.log('Resposta: acertou miseravel');
            c+=1
        } else {
            console.log('Resposta: errooo! ');
        }
        i++
} while(i <= 10);

let acertos = acertoPerguntas(c);
let mensagens = msgDeFelicitacoes(msg, c);

console.log('\nRespostas corretas : ' + c + '  Respostas erradas : '+ acertos);
console.log( mensagens);

