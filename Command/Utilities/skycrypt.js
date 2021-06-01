module.exports = {
    name: "crypt",
    execute(message, args){
        message.reply(`${args[0]}'s skycrypt is https://sky.shiiyu.moe/stats/${args}/`);
    }
}