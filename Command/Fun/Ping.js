module.exports={
    name:'ping',
    description: "Command ini digunakan untuk Ping",
    execute(message,args, Discord, client){
          message.react("🏓");
		let ping = new Discord.MessageEmbed()
		.setColor("#00ff75")
		.setTitle("Calculating Ping...");message.channel.send(ping).then((poomsg) => {
                  let actualPing = new Discord.MessageEmbed().setColor("#00ff75").setTitle(`My ping is ${client.ws.ping}ms`);
                  poomsg.edit(actualPing);
            })
        }
  };