const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = await guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.get("400523390441619457") //mod
 || member.roles.get("400512010590355458") //admin
 || member.roles.get("415914501909774336") //head admin
 || member.roles.get("400511826745360405") //comanager
 || member.roles.get("400511217061330955")) { //owner 
let userid = args[0]
if(!userid) return message.reply("Please provide a user ID!")
let user = await bot.fetchUser(userid)
if(!user) return message.reply("Couldn't find user!")
try {
await user.send(":x: **Scam Report Declined -- After reviewing your report, our moderators and admins have decided this is not a valid scam report.This might have been declined due to lack of evidence or lack of information in general. As a result, this user will not be added to our data base.** :x:")
  message.react("✅")
  let mod = bot.channels.find(`id`, "418531258344275978")
 let thing = new Discord.RichEmbed()
	.setTitle("Declined Report")
 .setColor("#FF0000")
 .addField("Time Declined", message.createdAt)
	.addField("Moderator", message.author)
	.addField("Declined", user.tag)
 	.addField("Declined ID", user.id)

 await mod.send(thing)
}
catch (e) {
message.reply("Couldn't DM this user!")
}
	let channel = bot.channels.find(`id`, "411246419979141121")
	let amessages = await channel.fetchMessages( {limit: 100} )
	let bmessages = amessages.filter(m => m.embeds && m.embeds[0].fields && m.embeds[0].fields[3].value === userid)
	let delmessage = bmessages.first()
	await delmessage.delete()
}

 }

module.exports.help = {
    name: "decline"
}
