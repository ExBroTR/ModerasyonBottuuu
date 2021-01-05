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
	.addField("\`\`\`» Yardım Menüsü 3\`\`\`", "**<a:minecraft:795275807047680063>** **!botlarımız** *Bütün Borlarımıza* __için__ **Kullanınız.** !\n **<a:minecraft:795275807047680063>** **!register-yardım** *Register Botu* __Yardım__ **Menüsü.** !\n **<a:ykleniyor:795275892976517131>** **!yardım2** *Komutların Devamı* __İçin__ **Kullanınız**!\n\n<a:zil:795275844574380083>   **Developer** <a:zil:795275844574380083>\n<@488272180774174720>\n<@761880238358921246>")
    .setFooter(`${client.user.username} `, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embedyardim).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h3", "halp3", "help3", "y3", "yadrım3"],
  permLevel: 0
};

exports.help = {
  name: "yardım3",
  category: "yardım",
  description: "Yardım kategorilerini gösteir."
};
