module.exports = {
	name: 'clear',
	description: "Clear messages!",
	async execute(message, args) {
		if (message.member.permissions.has("MANAGE_MESSAGES")) {
			if (!args[0]) return message.reply('Error, try specifying the amount of messages that you would like to clear!');
			if (isNaN(args[0])) return message.reply('Please enter an Integer!');
			if (args[0] < 1) return message.reply('You must delete at least 1 message!');
			if(args[0] > 100) return message.reply(" `I'm sorry, but due to discord limitations, I am only able to delete 100 messages at a time. But, you are able to send multiple commands with the 100 message limit. My developer Papinks is currently working on a solution for this problem!` " );
			await message.channel.messages.fetch({limit: args }).then(messages => {
				message.channel.bulkDelete(messages);
				message.channel.send(`OI I have deleted ${message} messages!`);
			} 
			);
		} else {
			message.reply(`Sorry, you need the permissions MANAGE_MESSAGES to execute this command!`);
		}
		//message.channel.send('I have deleted' + message + 'messages!');
	},
}
