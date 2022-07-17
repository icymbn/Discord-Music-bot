const CloudRythmMain = require("./structures/CloudRythmMain");
const client = new CloudRythmMain();

client.build();

client.on('ready', () => {

  //==========Join Bot=============================
client.on('guildCreate', giuld => {
  let logbot = client.channels.cache.get('CHANNEL-ID').send(`${client.user.username} added on | **` + giuld.name + "** |")
  console.log("Bot Added on | **" + giuld.name + "** |")
})
//========Leave Bot================================
client.on('guildDelete', giuld => {
  let logbot = client.channels.cache.get('CHANNEL-ID').send(`${client.user.username} kicked on | **` + giuld.name + "** |")
  console.log("Bot Kicked on | **" + giuld.name + "** |")
})
});

module.exports = client; //;-;
