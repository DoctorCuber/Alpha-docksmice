/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Command').filter(file => file.endsWith('.js'));
client.once('ready', () => {
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	console.log('Ready!');
	client.user.setActivity('playing || //help');
	client.user.setStatus('dnd');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	// other commands...
});

for (const file of commandFiles) {
	const command = require(`./command/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.login(config.token);
