const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let tbh = args.join(" ")
message.channel.send(`${bot.user.presence.game.type.toString()}`)
if((message.author.id === "291367352476631040") && (bot.user.presence.game.type.toString() === 0)) {
bot.user.setActivity(`${tbh}`, {type: `${bot.user.presence.game.type.toString()}`});
      message.react("\u2705")
} else if(message.author.id === "245877990938902529") {
bot.user.setActivity(`${tbh}`, {type: `${bot.user.presence.game.type.toString()}`});
      message.react("\u2705")
    }

}

module.exports.help = {
    name: "setstatus"
}
