
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));

const distube = require('distube')
client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    ))

for (const file of commandFiles) {
    const command = require(`./command/${file}`);
    client.commands.set(command.name, command);

}

client.once('ready', () => {
    console.log('Ready!'); console.log('Ready!');
    console.log('Ready!'); console.log('Ready!');
    console.log('Ready!'); console.log('Ready!');
    client.user.setActivity('//help', { type: 'LISTENING' });
    client.user.setStatus('idle');
    console.log('fluffy');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    

    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

client.login(token);