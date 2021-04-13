module.exports = {
    execute(message, args, Discord){
        target = message.mentions.users.first();
            targetId = message.guild.members.cache.get(target.id);
            message.channel.send(`@${target}`);
    }
}