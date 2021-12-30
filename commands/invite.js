const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/CloudRythmMain")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
    run: async (client, message, args, user, text, prefix) => {
    try{
      message.channel.send(new MessageEmbed()
        .setColor(client.botconfig.EmbedColor)
        .setFooter("Hyperᵀᴹ", "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png")
        .setTitle(`Loading...`)
      ).then(msg=>{
        msg.edit(new MessageEmbed()
        .setAuthor("| Invite Bot To Your Server",
        client.user.displayAvatarURL(),
        "https://discord.gg/mmqHpEmXjU"
        )
        .setColor(client.botconfig.EmbedColor)
        .setFooter("Hyperᵀᴹ", "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png")
        .setDescription(`[Invite Link](https://discord.com/oauth2/authorize?client_id=${
          client.botconfig.ClientID
        }&permissions=${
          client.botconfig.Permissions
        }&scope=bot%20${client.botconfig.Scopes.join("%20")})🌧\n[Support Server](https://discord.gg/mmqHpEmXjU)🌧`)
        .setThumbnail(client.user.displayAvatarURL())
          

        );
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/CloudRythmMain")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
      .setAuthor("| Invite Bot To Your Server",
      "https://cdn.discordapp.com/avatars/811801222612254751/8575ba66cdc80bdab80fc4031926f589.png?size=4096",
      "https://discord.gg/mmqHpEmXjU"
      )
        .setColor(client.botconfig.EmbedColor)
        .setFooter("Hyperᵀᴹ", "https://cdn.discordapp.com/attachments/889931838175457280/914450422457073704/image-removebg-preview_1.png")
        .setDescription(`[Invite Link](https://discord.com/oauth2/authorize?client_id=${
          client.botconfig.ClientID
        }&permissions=${
          client.botconfig.Permissions
        }&scope=bot%20${client.botconfig.Scopes.join("%20")})🌧\n[Support Server](https://discord.gg/mmqHpEmXjU)🌧`)
        .setThumbnail(client.user.displayAvatarURL());
      interaction.send(embed);
    },
  },
};
