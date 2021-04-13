const { readdirSync } = require("fs");

module.exports = (bot) => {
  const load = (dirs) => {
    const commands = readdirSync(`./src/commands/${dirs}/`).filter((d) =>
      d.endsWith(".js")
    );

    for (const file of commands) {
      const comando = require(`../commands/${dirs}/${file}`);
      bot.commands.set(comando.config.name, comando);

      if (comando.config.aliases)
        comando.config.aliases.forEach((a) =>
          bot.aliases.set(a, comando.config.name)
        );
    }
  };
  readdirSync(`./src/commands/`).forEach((x) => load(x));
};
