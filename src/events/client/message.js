const config = require("../../../config.json");

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const { prefix } = config;
  if (!message.content.startsWith(prefix)) return;
  const messageArray = message.content.split(" ");
  const command = messageArray[0];
  const args = messageArray.slice(1);

  const arquivocmd =
    bot.commands.get(command.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(command.slice(prefix.length)));
  if (arquivocmd) arquivocmd.run(bot, message, args);
};
