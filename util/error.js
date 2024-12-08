const { MessageEmbed } = require("discord.js")

/**
 * @param {String} text - Message à envoyer
 * @param {TextChannel} channel - Un salon pour envoyer le message d'erreur
 */

module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    await channel.send(embed)
}