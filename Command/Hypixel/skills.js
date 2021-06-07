module.exports = {
    name: 'skills',
    execute(message, args, Discord, client,hypixeljs, mojangjs, fetch, emoji, hypixel, hyclient){
        let ign = args[0];
        if (!ign) return message.channel.send('Specify the Minecraft Username you would like to Use');
        const config = require('../../config.json');
        hyclient.getPlayer(ign)
                        // message.channel.send(`https://api.hypixel.net/resources/skyblock/skills?key=${config.hypixel_api_keys}&uuid=${ign.toString()}`);
    }
//https://api.hypixel.net/resources/skyblock/collections?key=f6d6ab84-7984-443b-bd06-0ba5852add0a&uuid=036a284bd2df46e9a41f8b37c1cb91d5
}