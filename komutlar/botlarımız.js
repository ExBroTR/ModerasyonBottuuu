const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const embedyardim = new Discord.RichEmbed()
    .setColor("#ef5ff5")
    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setDescription(
      "» Cem & Berkan"
    )
	.addField("\`\`\`» Botlarımızın Menüsü\`\`\`", "**<a:minecraft:795275807047680063>** **Guard Botu** *Prefix* = **g!** !\n **<a:minecraft:795275807047680063>** **Moderasyon Botu* *Prefix* = **!** !\n **<a:minecraft:795275807047680063>** **Register Botu** *Prefix* = **.** !\n **<a:minecraft:795275807047680063>** **Backup Botu** *Prefix* = **b!** !\n**<a:minecraft:795275807047680063>** **Davet Botu** *Prefix* =  **d!** !\n **<a:ykleniyor:795275892976517131>** **Botlarımızı Almak İçin** *Aşağıdaki* __Developerlara__ **Ulaşınız.** !\n\n<a:zil:795275844574380083>** **Developer** <a:zil:795275844574380083>\n<@488272180774174720>\n<@761880238358921246>")
    .setFooter(`${client.user.username} `, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embedyardim).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlarımız", "botlarimiz", "bötlarimiz"],
  permLevel: 0
};

exports.help = {
    name: "botlarımız",
  category: "yardım",
  description: "Yardım kategorilerini gösteir."
};
