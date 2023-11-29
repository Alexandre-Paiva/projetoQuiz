import {questoes, msg} from './data.js';

const organizaPerguntas = (questoes) => {
    return questoes ;
}

const buscarPergunta = (q) => {
    let aleatorio = Math.floor(Math.random() * 30);
    const questao = questoes.filter( q => q.id == aleatorio);
    return questao ;
}

const imprimePergunta = (b) =>{
    let print = 'Pergunta : '; 
    print += b.pergunta;
    console.log(print);
}
const verificaResposta = (perguntaSelecionada, iResposta) => {
   const checagem = perguntaSelecionada.find(c => c.resposta.includes(iResposta));
   return checagem;
};

questoes.sort(organizaPerguntas);

const acertoPerguntas = (c) => {
const numeroDeResposta = 10;
const total = numeroDeResposta - c;
    return total;
}

const msgDeFelicitacoes = (msg, acertos) => {
        if(acertos > 8){
            return msg[3]['mensagem'];
        }
       else if(acertos > 6) {
            return msg[2]['mensagem'];
        }
       else if(acertos > 4) {
            return msg[1]['mensagem'];
        }
       else
       {
            return msg[0]['mensagem'];
        }
}



export {buscarPergunta, imprimePergunta, verificaResposta, msgDeFelicitacoes, acertoPerguntas};  




 
