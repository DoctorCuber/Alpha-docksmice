module.exports = {
	name: 'ping',
	description: 'Makes me respond with pong!!',
	execute(message) {
		message.react(`🤖`);
		
		message.channel.send('Pong');
	},
};