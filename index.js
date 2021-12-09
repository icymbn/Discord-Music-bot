const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.build();

client.on('ready', () => {

  //==========Join Bot=============================
client.on('guildCreate', giuld => {
  let logbot = client.channels.cache.get('CHANNEL-ID').send(`${client.user.username} Added on | **` + giuld.name + "** |")
  console.log("Bot Added on | **" + giuld.name + "** |")
})
//========Leave Bot================================
client.on('guildDelete', giuld => {
  let logbot = client.channels.cache.get('CHANNEL-ID').send(`${client.user.username} Kicked on | **` + giuld.name + "** |")
  console.log("Bot Kicked on | **" + giuld.name + "** |")
})
});

module.exports = client; //;-;
