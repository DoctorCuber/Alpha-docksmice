
module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        const target = message.mentions.users.first();// || message.guild.cache.get(args[0]) || message.guild.members.cache.gind(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (message.member.permissions.has("KICK_MEMBERS"))
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                var reason = args[1] || "no reason";
                memberTarget.kick({ reason: reason });
                message.reply(`${memberTarget} has been kicked for ${reason}`);
                message.react('✅');
            } else {
                message.reply(`You coudn't kick that member! Try specifying the member that you would like to kick!`);
            } else {
            message.reply(`You coudn't kick that member! Try specifying the member that you would like to kick!`);
        }
    }
    
}
