const Discord = require("discord.js");
const fs = require("fs");
const config = require("./configs/config.json");
const client = new Discord.Client({ intents: 32767 });

client.login(config.token); "MTE1MTM3MDk0NzA5ODU5NTQ0MA.GqY-Lw.RLB3lm-Mr9Mr75i709xpkZXHnjAgg0IWFRDCsc"

client.once('ready', async () => {
  console.log(`💜 | Estou online`);
  client.user.setActivity(`Vendas ON SpeedSants`, { type: "PLAYING" });
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.type === 'DM') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

process.on('unhandledRejection', (reason, p) => {
  console.log(reason, p);
});

process.on('multipleResolves', (type, promise, reason) => {
  console.log(type, promise, reason);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err, origin);
});

process.on('uncaughtException', (err, origin) => {
  console.log(err, origin);
});

//============================= | Anti OFF | =========================================/

process.on('multipleResolves', (type, reason, promise) => {
  return;
});
process.on('unhandRejection', (reason, promise) => {
  return;
});
process.on('uncaughtException', (error, origin) => {
  return;
});
process.on('uncaughtException', (error, origin) => {
 return;
});