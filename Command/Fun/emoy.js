const emoji = require('discord-emoji-convert');
module.exports = {
    name: 'emoy',
    execute(message){

        let arg = message.content.split(" ").slice(1).join(" ")
            if(!arg) return message.reply('What would you like me to emojify?');
            let emojis = emoji.convert(arg);
            message.channel.send(emojis).catch((_err) => {
                message.channel.send(arg);
            })
    }
}