const Discord = require("discord.js");

module.exports = async (bot, member) => {
  let channel = bot.channels.cache.get("822141108820770826");
  if (!channel) return;
  let embed = new Discord.MessageEmbed()
    .setColor("FFA500")
    .setTitle("SEJA BEM-VINDO!")
    .setDescription(`${member}, Obrigado por entrar no servidor!\n`)
    .addField("➜  IP", `jogar.haakon.com.com`)
    .addField("➜ Site", `http://loja.haakon.com`)
    .addField("➜ Discord", `https://discord.gg/hRYUDAQDhN`)
    .setTimestamp()
    .setThumbnail(
      "https://media.discordapp.net/attachments/786631721545367605/828326647089725472/com_fundo.png?width=473&height=473"
    )
    .setFooter("Rede Haakon - Todos os direitos reservados\n");
  channel.send(embed);
};
