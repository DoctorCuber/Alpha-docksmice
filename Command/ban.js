module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users;
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.reply("User has been banned");
                message.react('✅');
            } else {
                message.channel.send(`Error, couldn't ban that member try to specify users.`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession BAN_MEMBERS to execute this command!`);
        }
    }
}