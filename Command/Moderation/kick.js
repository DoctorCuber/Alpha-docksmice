
module.exports = {
    name: 'kick',
    description: "Kicks the Mentioned member from the Current Guild/Server",
    execute(message, args, Discord) {
        const target = message.mentions.users.first();// || message.guild.cache.get(args[0]) || message.guild.members.cache.gind(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                var reason = message.content.split(" ").slice(1).join(" ") || "no reason";
                memberTarget.kick({ reason: reason });
                let kickEmbed = new Discord.MessageEmbed()
                    .setColor('#00ff75')
                    .setTitle(`User Kicked for ${reason}!`)
                    .setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
                    .setDescription(`${memberTarget} was kicked for ${reason}`)
                    .setTimestamp();
                message.channel.send(kickEmbed);
                message.react('✅');
            } else {
                message.reply(`You coudn't kick that member! Try specifying the member that you would like to kick!`);
            }


        } else {
            message.channel.send(`Sorry, you need the permession KICK_MEMBERS to execute this command!`);
        }
    }
}