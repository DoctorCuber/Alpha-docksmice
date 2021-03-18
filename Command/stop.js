

const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: "stop",
    description: "makes the bot stop playing music",
    async execute(message, args) {
        const distube = require('distube');

        client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true });
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);

        if (queue) {
            client.distube.stop(message)

            message.channel.send('Stopped Playing!')
        } else if (!queue) {
            return
        };
    }
}