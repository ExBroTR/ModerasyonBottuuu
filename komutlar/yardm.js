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
	.addField("\`\`\`» Yardım Menüsü\`\`\`", "**<a:minecraft:795275807047680063>** **!Sunucubilgi** *Sunucu hakkında* __bilgi__ **verir.** !\n **<a:minecraft:795275807047680063>** **!ban** *Sunucudaki Herhangi* __birini__ **banlarsınız.** !\n **<a:minecraft:795275807047680063>** **!kick** *Sunucudaki Herhangi* __birini__ **kicklersiniz.** !\n **<a:minecraft:795275807047680063>** **!temizle** *Sunucuda Herhangi Bir Kanalda* __Mesaj__ *Silmel* *İçin* **kullanılır** !\n**<a:minecraft:795275807047680063>** **!mute** *Sunucudaki Herhangi* __birini__  **Susturursunuz** !\n **<a:minecraft:795275807047680063>** **!say** *Sunucuda Kaç* **Kişi** __olduğunu__ **Görürsünüz** !\n **<a:minecraft:795275807047680063>** **!sesmute** *Sunucuda Seste* __herhangi__ *birini* **Susturursunuz** !\n **<a:ykleniyor:795275892976517131>** **!yardım2** *Komutların Devamı* __İçin__ **Kullanınız**!\n\n<a:zil:795275844574380083>   **Developer** <a:zil:795275844574380083>\n<@488272180774174720>\n<@761880238358921246>")
    .setFooter(`${client.user.username} `, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embedyardim).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp", "help", "y", "yadrım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
  description: "Yardım kategorilerini gösteir."
};
