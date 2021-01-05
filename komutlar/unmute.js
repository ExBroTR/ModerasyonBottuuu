const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {


  if (
    !message.member.roles.has("723941015630643220") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
		.setTitle(`<a:Carpi:795292924006498314> Bu Komutu **Kullanabilmek** için **__Yeterli Yetkilere Sahip Değilsin !__**`)
		.addField("• **Sahip Olman Gerek Yetkiler**", "\`\`\`» ✔️ | TRANSPORT\`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let krios =
    message.mentions.users.first() ||
    client.users.get(args.join(" ")) ||
    message.guild.members.find(c => c.id === args[0]);
  if (!krios)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Mutesi Açılcak **kullanıcıyı** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» !unmute <kullanıcı> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let user = message.mentions.users.first();
  let krios2 = message.guild.member(krios);

  krios2.removeRole("776395689935765504"); 
  
  let logKanali = "781138595175464961"; 
  
  let embed = new Discord.RichEmbed()
    .setDescription(`<a:onayli:761500843961745439> <@${krios.id}> adlı kullanıcının susturulması Kaldırıldı !`)
        .setColor("0x0dff3e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    client.channels.get(logKanali).send(embed);
  

  message.react("763293315008954398");
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["chatunmute", "umute"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "unmute",
  description: "Chat Mute kaldırır",
  usage: ".unmute @etiket/id"
}; 