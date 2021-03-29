  
module.exports.run = async (message, args) => {


    message.channel.send('`THIS COMMAND IS CURRENTLY IN BETA AND IS NOT AVAILABLE FOR USE`');
    return;
    const discord = require(`discord.js`);
    const client = new discord.Client;
    DisTube = require('distube');
    client.Distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });

    if(!message.member.voice.channel) {return message.channel.send('You must be in a voice channel to use this command.')};

    let queue = await client.distube.getQueue(message);

    if(queue) {
        client.distube.stop(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    }
}

module.exports.config = {
    name: "stop",
    aliases: []
}