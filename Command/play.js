
module.exports = {
    name: "play",
    aliases: "p",
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const distube = require('distube')
        client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true });
        if (!message.member.voice.channel) return message.channel.reply('You must be in a voice channel to use this command.');

        const music = args.join(" ");


        client.distube.play(message, music);
        client.distube.on("playSong", (message, queue, song) => message.channel.send(
                `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
            ))
    }
}
