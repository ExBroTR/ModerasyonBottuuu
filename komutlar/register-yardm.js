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
	.addField("\`\`\`» Register Bot Yardım Menüsü\`\`\`", "**<a:minecraft:795275807047680063>** **.erkek** *Erkek Kayıt* __için__ **Kullanılır.** !\n **<a:minecraft:795275807047680063>** **.kadın** *Kadın Kayıt* __için__ **Kullanılır.** !\n **<a:minecraft:795275807047680063>** **.isıfırla** *Son İsim Kayıtlarını Silmek* __İçin__ **Kullanılır.** !\n **<a:minecraft:795275807047680063>** **.isimler** *Sunucuya Hangi İsimle Kayıt* __Olduğunuzu__ **Gösterir** !\n**<a:minecraft:795275807047680063>** **.stat** *Kaç Kayıt* __yaptığınızı__  **Gösterir.** !\n **<a:minecraft:795275807047680063>** **.kayıtsız** *Üyeyi* __Kayıtsıza_ **Atar.** !\n **<a:minecraft:795275807047680063>** **.temizle** *Belirtildiği Kadar* __Mesaj__ **Silersiniz.** !\n **<a:ykleniyor:795275892976517131>** **!botlarımız** *Bütün Yaptğımız Botlara Bakmak* __İçin__ **Kullanınız**!\n\n<a:zil:795275844574380083>   **Developer** <a:zil:795275844574380083>\n<@488272180774174720>\n<@761880238358921246>")
    .setFooter(`${client.user.username} `, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embedyardim).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rgstryardm", "rgstr-yardm", "yardım-register", "rg"],
  permLevel: 0
};

exports.help = {
  name: "register-yardım",
  category: "yardım",
  description: "Yardım kategorilerini gösteir."
};
