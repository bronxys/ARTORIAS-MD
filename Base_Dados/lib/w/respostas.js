/*respostas do bot*/
const fs = require('fs');

var mensagens = ["Estou preparando para enviar. Por favor, aguarde.", "Aguarde um momento, estou enviando.", "Estou enviando agora. Por favor, seja paciente.", "Seu pedido está em processamento.", "Enviarei em breve. Por favor, aguarde.", "Finalizando o envio do comando.", "Enviando seu pedido. Por favor, aguarde.", "Finalizando. Recomendo se hidratar enquanto isso.", "Seu pedido está quase pronto. Por favor, aguarde.", "Enviando conforme solicitado.", "Seu pedido estará pronto em breve. Por favor, aguarde."]

const msg = { 

dono: '> Esse comando só pode ser executado por meu dono.',

espere: mensagens[Math.floor(Math.random() * mensagens.length)],
  
botadm: '> O Bot precisa ser ADM do grupo para executar esse comando.',

adm: '> Esse comando é exclusivos dos administradores do grupo.',

grupo: '> Esse comando só pode ser usado em grupos',

premium: '> Esse comando só poder ser executado por quem é *premium*',
}

module.exports = msg

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
});