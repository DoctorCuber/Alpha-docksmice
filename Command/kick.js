
module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.reply("User has been kicked");
                message.react('✅');
            } else {
                message.reply(`You coudn't kick that member! Try specifying the member that you would like to kick!`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession KICK_MEMBERS to execute this command!`);
        }
    }
}