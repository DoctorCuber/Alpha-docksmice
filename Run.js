//stuff for Discord
const fs = require("fs");
const {Client, Intents} = require('discord.js');
const { Prefix, Token } = require('./config.json');
const config = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commandFolders = fs.readdirSync('./Command');
const fetch = require('window-fetch');
const moment = require('moment');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
 
//refrences all the command files

// for(const folder of commandFolders){
    
//     const commandFiles  = fs.readdirSync(`./Command/${folder}`).filter(file => file.endsWith('js'));
//     for (const file of commandFiles) {
// 		const command = require(`./Command/${folder}/${file}`);
// 		client.commands.set(command.name, command);
// 	}
// }
// client.once('ready', () => {
//     console.log('Ok the bot shall come Online.');
//     client.user.setPresence({
//         status: 'idle',
//         activity: {
//             name: 'for //Help',
//             type: 'WATCHING',
//             url: 'https://www.twitch.tv/Desqueaky'
//         }
//     })
// });
// client.on('message', message => {
//     if (!message.content.startsWith(Prefix) || message.author.bot) return;
//     const args = message.content.slice(Prefix.length).trim().split(/ +/);
//     const commandName = args.shift().toLowerCase();
//     if (message.channel.type === "dm") {message.channel.send('I have been disabled in dms! Try to use me in a server!'); return;}
//     if (!client.commands.has(commandName)) return;

//     const command = client.commands.get(commandName);

//     //Notifies the Console if any errors have occured when running the code.
//     try {
//         command.execute(message, args, Discord, client,fetch, moment, config);
//     }
//     catch (error) {
//         console.error(error);
//         message.reply(` I'm sorry as there was an error executing that command! The Error is: ${error}. Please report this to Papinks, My Developer!`);
//     } 
// });
// //Logs the bot into the account that we made for it.
// client.login(Token);


