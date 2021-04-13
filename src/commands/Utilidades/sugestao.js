const Discord = require("discord.js");
// Qualquer dúvida envie uma mensagem no discord FightReachSS_#0001
module.exports = {
  config: {
    name: "sugerir",
    aliases: ["sugestão"],
    description: "Faça uma sugestão!",
    category: "Utilidades",
    example: "!sugerir",
    usage: "!sugerir",
  },
  run: async (bot, message, args) => {
    message.delete();

    await message.author.createDM();
    message.author.send(`Olá, ${message.author.username}.
Você está prestes a dar uma sugestão para o nosso servidor!
            
Enfim, diga-nos qual sua ideia`);
    var tazer = message.author.dmChannel.createMessageCollector(
      (a) => a.author.id == message.author.id,
      { time: 1000 * 50, max: 1 }
    );
    tazer.on("collect", (r) => {
      let player = r.content;
      message.author.send("Por qual motivo devia-mos implantar sua sugestão?");

      var tazer1 = message.author.dmChannel.createMessageCollector(
        (a) => a.author.id == message.author.id,
        { time: 1000 * 50, max: 1 }
      );
      tazer1.on("collect", (r) => {
        let outracoisa = r.content;
        message.author.send("Sua sugestão é para onde?");
        var tazer2 = message.author.dmChannel.createMessageCollector(
          (b) => b.author.id == message.author.id,
          { time: 1000 * 60, max: 1 }
        );
        tazer2.on("collect", (r2) => {
          let motivo = r2.content;
          message.author.send("✅ **Sua sugestão foi enviada com sucesso!**");
          const fightdevsugestao = new Discord.MessageEmbed()
            .setAuthor("NOVA SUGESTÃO - HAAKON")
            .setDescription(
              `**➜ Autor:** ${message.author.username}
**➜ Sugestão:** ${player}
**➜ Motivo para ser implantado:** ${outracoisa}
**➜ Plataforma:** ${motivo}`
            )
            .setTimestamp()
            .setThumbnail(
              "https://media.discordapp.net/attachments/786631721545367605/828326647089725472/com_fundo.png?width=473&height=473"
            )
            .setColor("#FFA500");
          let canal = bot.channels.cache
            .get("822142036224114799")
            .send(fightdevsugestao)
            .then((msg) => {
              msg.react("✅");
              msg.react("❌");
            });
        });
      });
    });
  },
};
