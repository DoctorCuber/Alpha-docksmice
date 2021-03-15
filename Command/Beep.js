const newLocal = require('./Cosmetics.json');
const emotes = newLocal;
// eslint-disable-next-line no-unused-vars
const Discord = require('discord.js');
module.exports = {
	name: 'Beep',
	description: 'beeps',
	execute(message) {
		message.channel.send('Boop');
		message.react(emotes.bot);
	},
};