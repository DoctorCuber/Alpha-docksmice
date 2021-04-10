const { Discord } = require('discord-player');
const fs = require('fs');

module.exports = (client, Discord) =>{
    const commandFiles = fs.readdirSync('./Command/').filter(file => file.endsWith('.js'));
    
    for(const file of commandFiles){
        const command = require(`../command/${file}`)
        if(command.name){
            client.commands.set(command.name, command);
        }else{
            continue;
        }
    }
}