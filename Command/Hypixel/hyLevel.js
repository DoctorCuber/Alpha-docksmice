module.exports = {
    name:'hylevel',
    execute(message, args, Discord, client, hypixeljs, mojangjs, fetch, moment, emoji,hyclient, hypixel){
        const ign = args[0];
        const { isValidNickname, isValidUuid, getRank } = require('../../lib/miceutil');
        mojangjs.getUUID(ign)
			.then(uuid => {
                if (!isValidNickname(ign)){
                   return message.channel.send("Make sure to send a Valid Minecraft Player.");
                }
			}).catch(console.error);
        hyclient.getPlayer(ign).then(player => {
            console.log(player.level);
            const ignRank = getRank(ign);
            message.channel.send(`${ignRank}'s Hypixel level is: ${player.level}`);
        })
    }
}