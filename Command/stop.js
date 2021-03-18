module.exports = {
    name: "stop",
    description: "makes the bot stop playing music",
    async execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const distube = require('distube');
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