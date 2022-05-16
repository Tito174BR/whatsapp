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



const button = [
   {
     title: "Pasta",
     rows: [
       {
         title: "Ravioli Lasagna",
         description: "Made with layers of frozen cheese",
       }
     ]
   },
   {
     title: "Dessert",
     rows: [
       {
         title: "Baked Ricotta Cake",
         description: "Sweets pecan baklava rolls",
       },
       {
         title: "Lemon Meringue Pie",
         description: "Pastry filled with lemonand meringue.",
       }
     ]
   }
 ];

// Send Messages with Buttons Reply
const list = [
 {
   "buttonText": {
     "displayText": "Text of Button 1"
     }
   },
 {
   "buttonText": {
     "displayText": "Text of Button 2"
     }
   }
 ]
