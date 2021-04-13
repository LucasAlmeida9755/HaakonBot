module.exports = async (bot, ready) => {
  console.log(`COMANDOS E EVENTOS LIGADOS!`);
  console.log(`Bot foi iniciado com sucesso!`);

  const status = ["dnd"];

  const atividades = [[`redehaakon.com`, "WATCHING"]];

  setInterval(async () => {
    const i = Math.floor(Math.random() * atividades.length + 1) - 1;
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1],
    });
  }, 20000);

  setInterval(async () => {
    const b = Math.floor(Math.random() * status.length + 1) - 1;
    await bot.user.setStatus(status[b]);
  }, 20000);
};
