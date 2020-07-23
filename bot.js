const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(new Discord.GuildMember(client,message.author,message.guild.id).premiumSince);
    console.log(message.cleanContent);
});

client.on("guildMemberUpdate", event =>{
    console.log(new Discord.GuildMember(client,event.user,event.guild.id).premiumSince);
})

client.login(token);