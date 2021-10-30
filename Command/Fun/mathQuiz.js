module.exports = {
    name: 'MathQuiz',
    execute(message, args, Discord, client,fetch, moment, config){
        const Number1 = `${getRandomInt(200)}`;
        const Number2 = `${getRandomInt(200)}`
        let sign = getRandomInt(4);
        if(sign === 0){
            sign = config.heavy_plus_sign;
        }else if(sign === 1 ){
            sign = config.heavy_minus_sign;
        }else if(sign === 2){
            sign = config.heavy_division_sign;
        }else if(sign === 3){
            sign = config.heavy_multiplacation_sign;
        }
        let QQdf = `${Number1} ${sign} ${Number2}`
        const Question = new Discord.MessageEmbed()
                    .setTitle("Math Time")
                    .setDescription(`Your Question is ${QQdf}`);
        message.channel.send(Question)
    }
}