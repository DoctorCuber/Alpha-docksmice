module.exports = {
	name: 'geton',
	description: 'Geton',
	execute(message, args) {
		const member = message.mentions.users.first();
		if (member) {
			const memberTarget = message.guild.members.cache.get(member.id);
			message.react('✅');
			message.channel.send(member);
		} else {
			message.channel.send('Error, unable to get that user online!');
		}

	}
};