# Quiz de Fatos Históricos

Este projeto é um quiz interativo que desafia os usuários a responderem perguntas sobre fatos históricos importantes. O quiz seleciona aleatoriamente perguntas sobre eventos significativos ao longo da história e oferece uma avaliação ao final com base na pontuação do jogador.

## Funcionalidades

- **Seleção Aleatória de Questões**: A cada rodada, 10 perguntas são selecionadas aleatoriamente de uma coleção de questões.
- **Interatividade**: O usuário pode responder às perguntas e receber feedback imediato se a resposta estiver correta ou incorreta.
- **Avaliação Final**: Após responder a todas as perguntas, o usuário recebe uma pontuação e uma mensagem baseada em seu desempenho.

## Pré-requisitos

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Alexandre-Paiva/projetoQuiz
   ```
2. **Instale as dependências necessárias** (se houver):
   ```bash
    express: 4.18.2,
    readline-sync: 1.4.10
   ```
3. **Execute o quiz**:
   ```bash
    node src/index.js ou run start:dev 
   ```

## Exemplo de Uso

Ao executar o quiz, o usuário será saudado e solicitado a inserir seu nome. Em seguida, ele responderá a 10 perguntas aleatórias sobre fatos históricos. Para cada pergunta, o usuário digitará o ano com 4 (quatro) digitos que acredita ser a resposta correta. Ao final, o quiz exibirá a pontuação e uma mensagem personalizada.

## Estrutura do Código

- **Dados**: As perguntas e respostas estão armazenadas na constante `questoes`, que é uma lista de objetos.
- **Funções**:
  - `selecionarQuestoesAleatorias`: Seleciona aleatoriamente 10 perguntas da lista de questões.
  - `exibirPergunta`: Exibe uma pergunta e coleta a resposta do usuário.
  - `validarRespostaDoUsuario`: Compara a resposta do usuário com a resposta correta.
  - `exibirResultado`: Mostra a pontuação final do usuário e uma mensagem de feedback.
- **Interface**: A função `iniciarQuiz` é responsável por iniciar o quiz e coordenar a execução das outras funções.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

