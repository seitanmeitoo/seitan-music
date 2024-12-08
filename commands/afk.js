const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");
const fs = require('fs');


module.exports = {
  info: {
    name: "afk",
    description: "to keep the bot in the voice channel for 24/7",
    usage: "",
    aliases: ["24/7"],
  },

  run: async function (client, message, args) {
    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
    if(!message.member.hasPermission('MANAGE_SERVER'))return sendError("You do not have permission to use this command", message.channel);
    if (!afk[message.guild.id]) afk[message.guild.id] = {
      afk: false,
    };
    var serverQueue = afk[message.guild.id]
    if (serverQueue) {

      serverQueue.afk = !serverQueue.afk;
      message.channel.send({
        embed: {
          color: "GREEN",
          description: `💤  **|**  AFK is **\`${serverQueue.afk === true ? "enabled" : "disabled"}\`**`
        }
      });
      return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
        if (err) console.error(err);
      });
    };
    return sendError("There is nothing playing in this server.", message.channel);
  },
};