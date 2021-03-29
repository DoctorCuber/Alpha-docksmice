module.exports ={
    //name: 'geton',
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            message.channel.send(memberTarget);message.channel.send(memberTarget);message.channel.send(memberTarget);message.channel.send(memberTarget);
        } else {
            message.reply(`Error, couldn't ban that member try to specify users.`);
        }
    }
}