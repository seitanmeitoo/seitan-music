const discord = require('discord.js');
module.exports = {
    info: {
        name: "about",
        description: "To see info on bot",
        usage: "",
        aliases: ["botinfo", "info", "bot", "infobot"],
    },

    run: async function (client, message, args) {
        let embed = new discord.MessageEmbed()
        .setAuthor("All about SeitanMusic", "https://cdn.discordapp.com/avatars/904065047670685756/9444049502b18bb19b77238b51257497.png?size=512")
        .setDescription(`Hello! I am SeitanMusic , a music bot that is easy to host. \nType \`music.help\` to see my commands ! \n\nSome of my features include: \n\`\`\`\n🎵 High-quality music playback\n🎵 FairQueue™ Technology\n🎵 Easy to host yourself \n\`\`\``)
        .setColor("BLUE")
        .setFooter(`Requested by ${message.author.username}`)

        message.channel.send(embed)
    },
}