﻿module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            var reason = args[2] || "There was no Reason";
            if (target, reason) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban({reason: reason})
                message.reply(`User has been banned for ${reason}`);
                message.react('✅');
            } else {
                message.reply(`Error, couldn't ban that member try to specify users.`);
            }
        } else {
            message.channel.send(`Sorry, you need the permession BAN_MEMBERS to execute this command!`);
        }
    }
}