//stuff for Discord
const fs = require("fs");
const Discord = require('discord.js');
const { Prefix, Token, hypixel_api_keys } = require('./config.json');
const client = new Discord.Client();
const emoji = require('discord-emoji-convert');
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./Command');
//stuff for hypixel
const moment = require('moment');
const fetch = require('window-fetch');
const hypixeljs = require('hypixeljs');
const mojangjs = require("mojangjs");
for(const folder of commandFolders){
    
    const commandFiles  = fs.readdirSync(`./Command/${folder}`).filter(file => file.endsWith('js'));
    for (const file of commandFiles) {
		const command = require(`./Command/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
client.once('ready', () => {
    console.log('Ok the bot shall come Online.');
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: 'for //Help',
            type: 'WATCHING',
            url: 'https://www.twitch.tv/Desqueaky'
        }
    })
});
client.on('message', message => {
    if (!message.content.startsWith(Prefix) || message.author.bot) return;
    if(message.channel.type === "dm") {message.channel.send('I have been disabled in dms! Try to use me in a server!'); return;}
    const args = message.content.slice(Prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    //Notifies the Console if any errors have occured when running the code.
    try {
        command.execute(message, args, Discord, client, hypixeljs, mojangjs,fetch, moment, emoji);
    }
    catch (error) {
        console.error(error);
        message.reply(` I'm sorry as there was an error executing that command! The Error is: ${error}. Please report this to Papinks, My Developer!`);
    }
});

//Logs the bot into the account that we made for it.
client.login(Token);
hypixeljs.login(hypixel_api_keys);


