// Presence settings = ./events/ready.js

module.exports = {
  DefaultPrefix: process.env.Prefix || "", //Default prefix, Server Admins can change the prefix
  SupportServer: "", //your Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true,
  DefaultVolume: 100, //Sets the default volume of the bot, between 1 - 100
  "24/7": false, //set true if u want to be 24/7
  CookieSecret: "Mani MBn", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/888117557381464086/900268520049360916/698320321702264902.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#2E64FE", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "MBn",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
