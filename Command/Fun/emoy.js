
module.exports = {
    name: 'emoy',
    execute(message, args, Discord, client, hypixeljs, mojangjs, moment, emoji){
        let arg = message.content.split(" ").slice(1).join(" ")
            if(!arg) return message.reply('What would you like me to emojify?');
            let emojis = emoji.convert(arg);
            message.channel.send(emojis).catch((_err) => {
                message.channel.send(arg);
            })
    }
}