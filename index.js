const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));
  venom
  .create()
  .then((client) => cpf(client));
  venom
  .create()
  .then((client) => cnpj(client));
  console.log(start),
  console.log(cpf),
  console.log(cnpj)

function start(client) {
  client.onMessage(async (messageInfo) => {
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


function cpf(client) {
   client.onMessage((messageInfo) => {
      console.log(messageInfo)
      if (messageInfo.body === 'cpf' || messageInfo.body === 'CPF') {
         console.log('Boa papai!')
         client.sendText(messageInfo.from, 'Ok, agora insira seu cpf ou cnpj para nós verificarmos o seu problema')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      } else {
         console.log('Nâo entendi papai.')
         client.sendText(cpf.from, 'Não entendi o que você escreveu, reescreva por favor!')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      }
   });
}

function cnpj(client) {
   client.onMessage((messageInfo) => {
      console.log(messageInfo)
      if (messageInfo.body === 'cnpj' || messageInfo.body === 'CNPJ') {
         console.log('Boa papai!')
         client.sendText(messageInfo.from, 'Ok, agora insira seu cnpj ou cpf para nós verificarmos o seu problema')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      } else {
         console.log('Nâo entendi papai.')
         client.sendText(cnpj.from, 'Não entendi o que você escreveu, reescreva por favor!')
         .then(resp => console.log('Enviado:', resp))
         .catch(err => console.log(err))
      }
   });
}




