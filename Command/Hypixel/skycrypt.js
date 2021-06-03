module.exports = {
    name: "crypt",
    execute(message, args){
        if(!args[0]){
            message.reply("Error, please try to specify the Minecraft User which you would like to see");
            return;
        }
        message.reply(`${args[0]}'s skycrypt is https://sky.shiiyu.moe/stats/${args}/`);
    }
}