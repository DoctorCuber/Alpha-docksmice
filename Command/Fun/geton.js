module.exports = {
    execute(message, args, Discord){
        target = message.mentions.users.first();
        if(!target) {
            message.channel.send("Try to speicify the user, that you would like to get online using the `geton` command");
        }else if(target){
            targetId = message.guild.members.cache.get(target.id);
            message.channel.send(targetId);
        }
    }
}