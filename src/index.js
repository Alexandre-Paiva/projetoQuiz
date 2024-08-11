import readline from 'readline-sync';
import {questoes, msg} from './data/data.js';
import {buscarPergunta, imprimePergunta, verificaResposta, acertoPerguntas, msgDeFelicitacoes} from './service/service.js';
let i = 1;//Incremento, 
let c = 0; //Acertos

const seuNome = readline.question('Digite seu nome: '); // Entrada de dados (respostas).
console.log(' Seja Bem-vindo jogador(a)!');

do {
    let perguntaSelecionada = buscarPergunta(questoes);
        perguntaSelecionada.forEach(imprimePergunta);
    let digitarResposta = readline.question(`Digite a resposta numero ${i}:`);
    let verificacao = verificaResposta(perguntaSelecionada, digitarResposta);
        
        if( verificacao ) {
            console.log('Resposta: acertou !');
            c+=1
        } else {
            console.log('Resposta: errou! ');
        }
        i++
} while(i <= 10);

let acertos = acertoPerguntas(c);
let mensagens = msgDeFelicitacoes(msg, c);

console.log('\nJogador(a): '+ seuNome);
console.log('Respostas corretas : ' + c + '\nRespostas erradas : '+ acertos);
console.log( mensagens);

