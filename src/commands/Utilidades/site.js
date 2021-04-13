const Discord = require("discord.js");

module.exports = {
  config: {
    name: "site",
    aliases: ["site"],
    description: "site",
    category: "site",
    example: "site",
    usage: "site",
  },
  run: async (bot, message, args) => {

    let emojiembed = new Discord.MessageEmbed()
      .setColor("#FFA500")
      .addField("👮🏻 | SITE", `loja.redehaakon.com`);
    message.channel.send(emojiembed);
  },
};
