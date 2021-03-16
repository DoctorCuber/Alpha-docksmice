
const Discord = require('discord.js');
// eslint-disable-next-line no-undef
const help = new Discord.MessageEmbed()
	.setColor('#00ff75')
	.setTitle('Commands!')
	.setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3772%2C3342&q=45&auto=format&w=926&fit=clip')
	.setDescription('All the commands for DocksMice')
	.addFields(
		{ name: 'Ping', value: 'makes me respond with pong!', inline: false },
		{ name: 'Kick', value: 'Kicks the Mentioned member from the Current Guild/Server', inline: false },
		{ name: 'Ban', value: 'Bans the Mentioned member from the Current Guild/Server', inline: false },
		//{ name: 'Get On', value: 'Gets the mentioned user online using secret techniques!', inline: false },
		{ name: 'Clear', value: 'Clears a certain amount of messages in the channel', inline: false }
	);
module.exports = {
	name: 'help',
	description: 'help',
	execute(message) {
		message.react('🤖');
		message.channel.send(help);
	},
};