
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
        client.distube
            .on("playSong", (message, queue, song) => message.channel.send(
                `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
            ))
            .on("addSong", (message, queue, song) => message.channel.send(
                `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
            ))
            .on("playList", (message, queue, playlist, song) => message.channel.send(
                `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``
            ))
            .on("addList", (message, queue, playlist) => message.channel.send(
                `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
            ))
            // DisTubeOptions.searchSongs = true
            .on("searchResult", (message, result) => {
                let i = 0;
                message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
            })
            // DisTubeOptions.searchSongs = true
            .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
            .on("error", (message, e) => {
                console.error(e)
                message.channel.send("An error encountered: " + e);
            });
    }
}