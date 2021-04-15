module.exports={
    name:'ping',
    description: "Command ini digunakan untuk Ping",
    execute(message,args, Discord, client){
          message.react("🏓");
		let ping = new Discord.MessageEmbed()
		.setColor("#00ff75")
		.setTitle("Calculating Ping...");
            message.channel.send(ping).then((poomsg) => {
                  let actualPing = new Discord.MessageEmbed().setTitle(`My ping is ${client.ws.ping}ms`);
                  if(client.ws.ping >= 120){
                        actualPing.setColor("#Ff0000");
                  }else if(client.ws.ping <= 90){
                        actualPing.setColor("#00FF24");
                  }else {
                        actualPing.setColor("#F2FF00");
                  }
                  poomsg.edit(actualPing);
            })
        }
  };