
const Discord = require('discord.js');
const help = new Discord.MessageEmbed()
			.setColor('#00ff75')
			.setTitle('Commands!')
			.setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
			.setDescription('All the commands for DocksMice')
			.setTimestamp()
			.addFields(
				{ name: 'Ping', value: 'makes me respond with pong!', inline: true },
				{ name: 'Kick', value: 'Kicks the Mentioned member from the Current Guild/Server', inline: false },
				{ name: 'Ban', value: 'Bans the Mentioned member from the Current Guild/Server', inline: true },
				{ name: 'Get On', value: 'Gets the mentioned user online using secret techniques!', inline: false },
				{ name: 'Clear', value: 'Clears a certain amount of messages in the channel(Limit of 100)', inline: false }
			);
module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args, Discord) {
		message.react("✅");
		message.channel.send(help);
	},
}