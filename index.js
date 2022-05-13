const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));
//   .then((cpf) => start(cpf)); //erro nessa linha que eu não lembro como corrige 🤡

function start(client) {
  client.onMessage((messageInfo) => {
     console.log(messageInfo)
     if (messageInfo.body === 'Ola' || messageInfo.body === 'Oi') {
        console.log('Boa papai!')
        client.sendText(messageInfo.from, 'Olá, bom dia, Por favor Insira seu no Campo de texto!')
        .then(resp => console.log('Enviado:', resp))
        .catch(err => console.log(err))
     } else {
        console.log('Nâo entendi papai.')
        client.sendText(messageInfo.from, 'Não entendi o que você escreveu, reescreva por favor!')
        .then(resp => console.log('Enviado:', resp))
        .catch(err => console.log(err))
     }
     
   
  });

}


function start(client) {
   client.onMessage((messageInfo) => {
      console.log(messageInfo)
      if (messageInfo.body === 'cpf' || messageInfo.body === 'CPF') {
         console.log('Boa papai!')
         client.sendText(messageInfo.from, 'Ok, agora insira seu cpf ou cnpj para nós verificarmos o seu problema')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      } else {
         console.log('Nâo entendi papai.')
         client.sendText(messageInfo.from, 'Não entendi o que você escreveu, reescreva por favor!')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      }
   });
}

function start(client) {
   client.onMessage((messageInfo) => {
      console.log(messageInfo)
      if (messageInfo.body === 'cnpj' || messageInfo.body === 'CNPJ') {
         console.log('Boa papai!')
         client.sendText(messageInfo.from, 'Ok, agora insira seu cnpj ou cpf para nós verificarmos o seu problema')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      } else {
         console.log('Nâo entendi papai.')
         client.sendText(messageInfo.from, 'Não entendi o que você escreveu, reescreva por favor!')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      }
   });
}



// inutilizaveis :
//  if (nome.body === 'Oi' || nome.body === 'Ola') {
      
   //      .then((result) => {
   //        console.log('Result: ', result); //retorna um objeto de successo
   //      })
   //      .catch((erro) => {
   //        console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
   //      });
   //  }
   //  else {  
   //     'Erro, não entendi o que você escreveu, pode reescrever por favor?' // objeto de retorno para caso seja qualquer outra coisa difernte de "Oi" ou "ola"
   //  }