const { Client, Collection, Intents } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client({
  ws: {
    intents: Intents.ALL,
  },
  partials: ["MESSAGE", "USER", "REACTION"],
});

const config = require("./config.json");
["commands", "aliases"].forEach((x) => (bot[x] = new Collection()));
["command", "event"].forEach((x) => require(`./src/handlers/${x}`)(bot));

bot.login(config.token);
