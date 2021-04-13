const Discord = require('discord.js');

module.exports = {
	config: {
		name: 'say',
		aliases: ['falar'],
		description: 'Fale pelo bot!',
		category: 'Utilidades',
		example: '!falar oi',
		usage: '!falar <mensagem>'
	},
	run: async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("Sem permissão!");
    if (!args.join(" ")) return message.reply("Digite algo!");
    let say = args.join(" ");
    message.channel.send(say);
  }
};
