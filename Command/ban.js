module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        const target = message.mentions.users.();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been banned");
        } else {
            message.channel.send(`Error, couldn't ban that member try to specify users.`);
        }
    }
}