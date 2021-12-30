const { MessageEmbed } = require("discord.js");
require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");

module.exports = {
  name: "stats",
  description: "Get information about the bot",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["about", "ping", "info"],
  /**
   *
   * @param {import("../structures/CloudRythmMain")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */

    run: async (client, message, args) => {
      //command
      let cpuLol;
      cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
              return console.log(err);
          }
          const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
          const botinfo = new MessageEmbed()
              .setTitle("**Bot Stats:**")
              .setURL(`https://discord.com/oauth2/authorize?client_id=${
                client.botconfig.ClientID
              }&permissions=${
                client.botconfig.Permissions
              }&scope=bot%20${client.botconfig.Scopes.join("%20")}`)
              .setThumbnail(client.user.displayAvatarURL())
              .setColor("GREEN")
              .setDescription(
              '📊'+ ' `Servers:` ' + `${client.guilds.cache.size}\n\n`+
              '📢'+ ' `Channels:` ' + `${client.channels.cache.size}\n\n`+
              '🏓'+ ' `API Latency:` ' + `${(client.ws.ping)}ms \n\n `+
              '🕓'+ ' `Uptime:` ' + `${duration} \n\n `+
              '🌌'+ ' `Version:` ' +`${require("../package.json").version} \n\n`)
              .setFooter("Hyperᵀᴹ", "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png")
              .setTimestamp()
          message.channel.send(botinfo)
      });
      },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/CloudRythmMain")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction) => {
      let cpuLol;
      cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
              return console.log(err);
          }
          const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
          const botinfo = new MessageEmbed()
              .setTitle("**Bot Stats:**")
              .setURL('https://discord.com/oauth2/authorize?client_id=811801222612254751&permissions=2205281600&scope=bot%20identify%20guilds%20applications.commands')
              .setThumbnail(client.user.displayAvatarURL())
              .setColor("GREEN")
              .setDescription(
                '📊'+ ' `Servers:` ' + `${client.guilds.cache.size}\n\n`+
                '📢'+ ' `Channels:` ' + `${client.channels.cache.size}\n\n`+
                '🏓'+ ' `API Latency:` ' + `${(client.ws.ping)}ms \n\n `+
                '🕓'+ ' `Uptime:` ' + `${duration} \n\n `+
                '🌌'+ ' `Version:` ' +`${require("../package.json").version} \n\n`)
              .setTimestamp()

        return interaction.send(botinfo);
      });
    },
  },
};
