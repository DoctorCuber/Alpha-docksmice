module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();// || message.guild.cache.get(args[0]) || message.guild.members.cache.gind(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
            var reason = args[1] || "no reason";
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban({reason: reason})
                message.reply(`${memberTarget} has been banned for ${reason}`);
                message.react('✅');
            } else {
                message.reply(`Error, couldn't ban that member try to specify users.`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession BAN_MEMBERS to execute this command!`);
        }
    }
}