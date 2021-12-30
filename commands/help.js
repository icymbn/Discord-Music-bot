const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/CloudRythmMain")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\ ➪ **‡** ${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\  ➪ ||*${cmd.description}*||`
    );

    let Embed = new MessageEmbed()
      .setAuthor(
        `| Commands of ${client.user.username}`,
        client.user.displayAvatarURL()
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command]`,
        "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png"
      ).setDescription(`${Commands.join("\n")}
  
  🌐 [Support Server](${
    client.botconfig.SupportServer
  }) | [GITHUB](https://github.com/icymbn/Discord-Music-bot)
  `);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `❌ | Unable to find that command.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`| Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix > __${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }__`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],
    /**
     *
     * @param {import("../structures/CloudRythmMain")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
      (cmd) =>
        `\ ➪ ${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\  ➪ ||*${cmd.description}*||`
      );

      let Embed = new MessageEmbed()
      .setAuthor(
        `| Commands of ${client.user.username}`,
        client.user.displayAvatarURL()
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command]`,
        "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png"
      ).setDescription(`${Commands.join("\n")}
  
  🌐 [Support Server](${
    client.botconfig.SupportServer
  }) | [GITHUB](https://github.com/icymbn/Discord-Music-bot)
  `);
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `❌ | Unable to find that command.`
          );

        let embed = new MessageEmbed()
          .setAuthor(`| Command: ${cmd.name}`, client.botconfig.IconURL,
          "https://discord.gg/mmqHpEmXjU")
          .setDescription(cmd.description)
          .setColor("GREEN")
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix = ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }
            `,"https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png"
          );

        interaction.send(embed);
      }
    },
  },
};
