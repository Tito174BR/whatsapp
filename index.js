const venom = require('venom-bot');

venom
  .create({
     session: 'vinicius'
  })
  .then((client) => start(client));
//   venom.create('supportClient').then((supportClient) => { });


function start(client) {
  client.onMessage((messageInfo) => {
   //   console.log(messageInfo)
     if (messageInfo.body === 'Ola' || messageInfo.body === 'Oi') {
        console.log('Boa papai!')
        client.sendText(messageInfo.from, 'Olá, bom dia! Por favor, escolha uma das opções abaixo \n1️⃣ - Consultar cobranças na pague \n2️⃣ - Solicitar suporte na pague \n3️⃣ - Fazer cadastro na pague ')
        .then(resp => console.log('Enviado:', resp))
        .catch(err => console.log(err))
     } else {
        console.log('Nâo entendi papai.')
      //   client.reply(messageInfo.from,"Não entendi o que você escreveu, reescreva por favor!").then((result) => {console.log('Result: ', result);}).catch((erro) => {console.error('Erro ao enviar: ', erro);  });
        client.send(messageInfo.from, 'Não entendi o que você escreveu, reescreva por favor!')
        .then(resp => console.log('Enviado:', resp))
        .catch(err => console.log(err))
     }
     
  });

}



