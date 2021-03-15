module.exports = {
	name: 'geton',
	description: 'Ping!',
	execute(message) {
		message.react('🤖');
		message.channel.send('Pong');
	},
};