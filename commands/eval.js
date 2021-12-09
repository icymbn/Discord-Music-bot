const { inspect } = require('util');
const botconfig = require('../botconfig');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "eval",
    description: "its only for owner",
    usage: "",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["eval"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

     run: async (client, message, args, { GuildDB }) => {
          
            if (message.author.id !== "482206952030601227") return message.react("❌");
        let evaled;
        try {
            evaled = await eval(args.join(" "));
            let evalend = new MessageEmbed()
                .setTitle('Eval Result : ')
                .setDescription('INPUT :\n```js\n' + args.join(" ") + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
                .setColor("GREEN")
            message.channel.send(evalend).catch(e => { message.channel.send('```js\n' + e + '\n```'); });
        }
        catch (error) {
            let evalerr = new MessageEmbed()
                .setTitle('Thre Was An Error : ')
                .setDescription('```js\n' + error + '```')
                .setColor("red")
                message.channel.send(evalerr);
        }
    

     }
     };
      /* Have some bug
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     
     run: async (client, interaction, args, { GuildDB }) => {
            if (user.id !== "482206952030601227") return
        let evaled;
        try {
            evaled = await eval(args.join(" "));
            let evalend = new MessageEmbed()
                .setTitle('Eval Result : ')
                .setDescription('INPUT :\n```js\n' + args.join(" ") + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
                .setColor("GREEN")
            interaction.send(evalend).catch(e => { interaction.send('```js\n' + e + '\n```'); });
        }
        catch (error) {
            let evalerr = new MessageEmbed()
                .setTitle('Thre Was An Error : ')
                .setDescription('```js\n' + error + '```')
                .setColor("red")
                interaction.send(evalerr);
        }
    

       }
  }
    }
*/