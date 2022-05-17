const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));


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





