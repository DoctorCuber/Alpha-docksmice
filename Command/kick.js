module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        if (message.member.permessions.has("KICK_MEMBERS")) {
            const target = message.mentions.users;
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else {
                message.channel.send(`You coudn't kick that member!`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession KICK_MEMBERS to execute this command!`);
        }
        
    }
}