const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let guild = bot.guilds.find(`id`, "400508946709872660")
let member = guild.fetchMember(message.author.id)
if(!member) return;
if (member.roles.find(`id`, "400523390441619457") //mod
 || member.roles.find(`id`, "400512010590355458") //admin
 || member.roles.find(`id`, "415914501909774336") //head admin
 || member.roles.find(`id`, "400511826745360405") //comanager
 || member.roles.find(`id`, "400511217061330955")) { //owner 
let userid = args[0]
if(!userid) return message.reply("Please provide a user ID!")
let user = await bot.fetchUser(userid)
if(!user) return message.reply("Couldn't find user!")
try {
await user.send(":white_check_mark: **Scam Report Accepted -- After reviewing your report, our moderators and admins have decided this is a valid scam report. This user will be added to our data base shortly.** :white_check_mark:")
  message.react("✅")
}
catch (e) {
return message.reply("Couldn't DM this user!")
}
}

 }

module.exports.help = {
    name: "accept"
}