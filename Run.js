
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));
const moderationFiles = fs.readdirSync('./command/moderation').filter(file => file.endsWith('.js'));
 DisTube = require('distube');

// Create a new DisTube
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });


//This creates a new Collection of command files
for (const file of commandFiles) {
    const command = require(`./command/${file}`);
    client.commands.set(command.name, command);

}
for(const file of moderationFiles) {
    const moderation = require(`./command/moderation/${file}`);
    client.commands.set(moderation.name, moderation);
}
//Notifies the console when the bot comes online. It also sets the bot's status
client.once('ready', () => {
        console.log('Ready!');
        client.user.setStatus('idle');
        console.log('fluffy');
    
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);


    //Notifies the Console if any errors have occured when running the code.
    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply(`I'm sorry as there was an error executing that command! The Error is: ${error}. Please report this to Papinks, My Devloper!`);
    }
});


//Logs the bot into the account that we made for it.
client.login(token);