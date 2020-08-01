const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
//set up dotenv for environmental variables
require('dotenv').config();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.cleanContent);
});

client.on('guildMemberAdd', member => {
    let emoji = member.guild.emojis.cache.find(emoji => emoji.id === "739051596616564796");
    let embed = new Discord.MessageEmbed()
        .setDescription(`Hey <@${member.user.id}>, welcome to Mercy's Heaven! Be sure to read <#738470770317066356> and check <#739035968937394230> if you are intrested in getting some colours ! ${emoji}`)
        .setColor("#F879C2");
    member.guild.channels.cache.find(channel => channel.id === "738491993390448811").send({embed});
});

client.login(process.env.TOKEN);