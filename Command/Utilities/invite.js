module.exports = {
    name: 'invite',
    execute(message, args, Discord){
        let inviteEmbed = new Discord.MessageEmbed()
            .setColor("#2596be")
            .setTitle("Invite For DocksMice!")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=762747906930507786&permissions=8&scope=bot").setDescription("For the invite to the DocksMice Discord bot click above!!")
            .setThumbnail('https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
            .setImage("https://wpcdn.us-east-1.vip.tn-cloud.net/www.pittsburghparent.com/content/uploads/data-import/296268c3/Big_smile.png");
        message.channel.send(inviteEmbed);
    }
}