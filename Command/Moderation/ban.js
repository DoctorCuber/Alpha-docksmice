module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args, Discord) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first() || message.guild.cache.get(args[0]) || message.guild.members.cache.gind(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
            var reason = args[1] || "no reason";
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban({reason: reason})
                let kickEmbed = new Discord.MessageEmbed()
                .setColor('#00ff75')
                .setTitle('User Banned!')
                .setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
                .setDescription(`${memberTarget} was kicked for ${reason}`)
                .setTimestamp();
            message.channel.send(kickEmbed);
                message.react('✅');
            } else {
                message.reply(`Error, couldn't ban that member try to specify users.`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession BAN_MEMBERS to execute this command!`);
        }
    }
}