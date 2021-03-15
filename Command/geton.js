module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		message.react('🤖');
		message.channel.send('Pong');
	},
};