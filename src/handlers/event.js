const { readdirSync } = require("fs");

module.exports = (bot) => {
  const load = (dirs) => {
    const events = readdirSync(`./src/events/${dirs}/`).filter((d) =>
      d.endsWith(".js")
    );

    for (const file of events) {
      const event = require(`../events/${dirs}/${file}`);
      const eventName = file.split(".")[0];
      bot.on(eventName, event.bind(null, bot));
    }
  };
  readdirSync(`./src/events/`).forEach((x) => load(x));
};