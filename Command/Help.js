const emotes = require ('.Cosmetics.json');
const Discord = require('discord.js');
// eslint-disable-next-line no-undef
const help = new Discord.MessageEmbed()
	.setColor(emotes.JewelGreen)
	.setTitle('Commands!')
	.setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3772%2C3342&q=45&auto=format&w=926&fit=clip')
	.setDescription('All the commands for DocksMice')
	.addFields(
		{ name: 'Ping', value: 'makes me respond with pong!', inline: false },
		{ name: 'Boop', value: 'makes me respond with beep!', inline: false },
		{ name: 'geton', value: 'gets the mentioned user online to this server using secrect technuques', inline: false });
module.exports = {
	name: 'beep',
	description: 'beep',
	execute(message) {
		message.react(emotes.bot);
		message.channel.send(help);
	},
};