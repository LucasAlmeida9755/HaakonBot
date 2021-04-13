const Discord = require("discord.js");

module.exports = {
  config: {
    name: "ip",
    aliases: ["ip"],
    description: "ip",
    category: "ip",
    example: "ip",
    usage: "ip",
  },
  run: async (bot, message, args) => {

    let emojiembed = new Discord.MessageEmbed()
      .setColor("#FFA500")
      .addField("👮🏻 | IP", `jogar.redehaakon.com`);
    message.channel.send(emojiembed);
  },
};
