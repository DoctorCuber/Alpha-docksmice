
const Discord = require('discord.js');
// eslint-disable-next-line no-undef
const help = new Discord.MessageEmbed()
	.setColor('#00ff75')
	.setTitle('Commands!')
	.setThumbnail('https://media.discordapp.net/attachments/821152234330259537/821832515500638218/winter_white_hamster2-300x213.jpg')
	.setDescription('All the commands for DocksMice')
	.addFields(
		{ name: 'Ping', value: 'makes me respond with pong!', inline: true },
		{ name: 'Kick', value: 'Kicks the Mentioned member from the Current Guild/Server', inline: false },
		{ name: 'Ban', value: 'Bans the Mentioned member from the Current Guild/Server', inline: true },
		//{ name: 'Get On', value: 'Gets the mentioned user online using secret techniques!', inline: false },
		{ name: 'Clear', value: 'Clears a certain amount of messages in the channel', inline: false },
		{ name: 'Play', value: 'starts to play a song in the Voice Channel', inline: true}
		//{ Name: "Prefix", value: `Allows the user to change the prefix of the bot`}
	);
module.exports = {
	name: 'help',
	description: 'help',
	execute(message) {
		message.react('🤖');
		message.channel.send(help);
	},
}