const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      let channel = bot.channels.find(`id`, "420677482287464448")
      let pingeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let userid = args[0]
	let messages = await channel.fetchMessages()

      if(!pingeduser) {
      	      let barray = messages.filter(m => RegExp(userid, "gi").test(m.content));
	      let auser = barray.first();
	      if(auser) return auser.delete()
	      if(!auser) return message.channel.send("This user is not blacklisted!")
      } else {
      	      let darray = messages.filter(m => RegExp(pingeduser.id, "gi").test(m.content));
	      let buser = darray.first();
	if(buser) return buser.delete()
	if(!buser) return message.channel.send("This user is not blacklisted!")
}
	


}

module.exports.help = {
	name: "unblacklist"
}
