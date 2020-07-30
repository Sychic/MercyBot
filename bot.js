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
    let embed = new Discord.MessageEmbed().setDescription(`Welcome <@${member.user.id}>!`).setColor(rgba(248, 121, 194, 0.6));
    member.guild.channels.cache.find(channel => channel.id === "738491993390448811").send({embed});
});

client.login(process.env.TOKEN);