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
	.addField("\`\`\`» Yardım Menüsü 2\`\`\`", "**<a:minecraft:795275807047680063>** **!eval** *Sunucuda Kod Denemek* __için__ **Kullanılır.** !\n **<a:minecraft:795275807047680063>** **!unmute** *Sunucudaki Susturduğunuz Kişinin* __Mutesini__ **Kaldırır.** !\n **<a:minecraft:795275807047680063>** **!sahibim** *Botları Yapan* __Sahiplerimi__ **Gösterir.** !\n **<a:minecraft:795275807047680063>** **!komutsayısı** *Botta* __Mesaj__ *Silmel* *İçin* **kullanılır** !\n**<a:minecraft:795275807047680063>** **!reboot** *Botu* __yeniden__  **Başlatırsınız.** !\n **<a:minecraft:795275807047680063>** **!ping** *Botun* __pingini_ **Gösterir** !\n **<a:minecraft:795275807047680063>** **!slowmode** *Sunucuda herhangi bir* __kanalı__ *yavaşmod* **Koyarsınız.** !\n **<a:ykleniyor:795275892976517131>** **!yardım3** *Komutların Devamı* __İçin__ **Kullanınız**!\n\n<a:zil:795275844574380083>   **Developer** <a:zil:795275844574380083>\n<@488272180774174720>\n<@761880238358921246>")
    .setFooter(`${client.user.username} `, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embedyardim).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h2", "halp2", "help2", "y2", "yadrım2"],
  permLevel: 0
};

exports.help = {
  name: "yardım2",
  category: "yardım",
  description: "Yardım kategorilerini gösteir."
};
