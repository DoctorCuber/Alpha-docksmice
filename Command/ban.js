module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if (message.member.permessions.has("BAN_MEMBERS")) {
            const target = message.mentions.users;
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send(`Error, couldn't ban that member try to specify users.`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession BAN_MEMBERS to execute this command!`);
        }
    }
}