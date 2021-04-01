
module.exports = {
    name: "play",
    aliases: "p",
    execute(message, args) {


        if (!message.member.voice.channel) return message.reply('You must be in a voice channel to use this command.');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        DisTube = require('distube');
        client.Distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
        //adds most of the required depencencies
        const music = args.join(" ");
        client.Distube.play(message, music);

        client.Distube
            .on("playSong", (message, queue, song) => message.channel.send(
                `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
            ));
    }
}