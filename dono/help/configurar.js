const configbot = (prefix) => {
return `
*COMO CONFIGURAR O BOT, PRA SER DONO*
 
 1° Ligue o bot no termux, e vá para o WhatsApp do bot em algum privado, utilize os seguintes comandos.

╭───────────────

 2° *Pra alterar o nome do bot:*

•➤ ${prefix}Nome-bot Nome que deseja

╰───────────────


╭───────────────

 3° *Nick Do Dono Do Bot:*

•➤  ${prefix}Nick-dono Nick seu

╰───────────────
  
  
╭───────────────  
  
 4° *Configurar o número do dono*
  
•➤  ${prefix}numero-dono 55xxxxxx

•➤  o número tem que ser junto, e não pode conter o símbolo de + nem - e não pode ter o 9 da operadora, tem que ser o número idêntico ao seu do whatsapp.
  
lembre-se, que deve utilizar o próprio whatsapp e número do bot pra configurar o número de dono, porque só ele é dono dele mesmo enquanto não for configurado..
  
╰───────────────


╭───────────────


 5° *Prefixo Do Bot:*

•➤ ${prefix}prefixo-bot #

Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser # de acordo com o que você mudou.


╰───────────────
`
  
}

exports.configbot = configbot