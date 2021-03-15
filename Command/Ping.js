const emotes = require ('./Cosmetics.json');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		message.react(emotes.bot);
		message.channel.send('Pong');
	},
};