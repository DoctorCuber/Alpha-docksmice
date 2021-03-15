module.exports = {
	name: 'Kick',
	description: 'Kicks User',
	execute(message, args) {
		const member = message.mentions.users.first();
		if (member) {
			const memberTarget = message.guild.members.cache.get(member.id);
			memberTarget.kick();
			message.channel.send('User has been sucessfully kicked!');
		} else {
			message.channel.send('Error, unable to kick user, try mentioning a user!');
        }
		
	}
};