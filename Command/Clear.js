module.exports = {
	name: 'clear',
	description: "Clear messages!",
	async execute(message, args) {
		if (message.member.permissions.has("MANAGE_MESSAGES")) {
			if (!args[0]) return message.reply('Error, try specifying the amount of messages that you would like to clear!');
			if (isNaN(args[0])) return message.reply('Please enter an Integer!');
			if (args[0] < 1) return message.reply('You must delete at least 1 message!');
			await message.channel.messages.fetch({limit: args }).then(messages => {
				message.channel.bulkDelete(messages);
			} 
			);
		} else {
			message.reply(`Sorry, you need the permissions MANAGE_MESSAGES to execute this command!`);
		}
		//message.channel.send('I have deleted' + message + 'messages!');
	}
}
