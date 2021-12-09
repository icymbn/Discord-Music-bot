const type1 = [
  "WATCHING",
  "LISTENING"
]
module.exports = async (client) => {
  (client.Ready = true),
  setInterval(() => {
    let acti = [`${client.guilds.cache.size} Server  |  ^help` , 
    `${client.guilds.cache.size} Server  |  ^invite`,
     `PING : ${(client.ws.ping)}ms  |  ^help`,
     `PING : ${(client.ws.ping)}ms  |  ^invite`]
    let random = Math.floor(Math.random() * acti.length);
    client.user.setActivity(acti[random], {type: type1[Math.floor(Math.random()*type1.length)]});
  }, 3000);

  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag);
  client.RegisterSlashCommands();
};
