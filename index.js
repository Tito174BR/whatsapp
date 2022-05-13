const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));
//   .then((cpf) => start(cpf)); erro nessa linha que eu não lembro como corrige 🤡

function start(client) {
  client.onMessage((nome) => {
    if (nome.body === 'Oi' || nome.body === 'Ola') {
      client
        .sendText(nome.from, 'Olá, bom dia, Por favor Insira seu no Campo de texto')
        .then((result) => {
          console.log('Result: ', result); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
        });
    }
    else if (nome.body !== String ){
       'Erro, não entendi o que você escreveu, pode reescrever por favor?'
    }
  });


  cpf();
   function cpf() {
      client.onMessage((cpf) => {
         if (cpf.body === 'Cpf' || cpf.body === 'cpf') {
            client
               .sendText(cpf.from, 'Ok, agora informe o seu cpf que iremos verificar')
               .then((result) => {
                  console.log('Result: ', result); //retorna um objeto de successo
               })
               .catch((erro) => {
                  console.error('Erro ao enviar mensagem: ', erro);
               });
         }
      });
   }
}