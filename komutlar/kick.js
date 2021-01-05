const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  const db = require('quick.db')
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendEmbed(
      new Discord.RichEmbed()
		.setTitle(`<a:Carpi:795292924006498314> Bu Komutu **Kullanabilmek** için **__Yeterli Yetkilere Sahip Değilsin !__**`)
		.addField("• **Sahip Olman Gerek Yetkiler**", "\`\`\`» ✔️ | BAN_MEMBERS\`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
	
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Atılacak **kullanıcıyı** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» !ban <kullanıcı> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );

  if (reason.length < 1) return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Atma **Nedeni** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» !ban <kullanıcı> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  if (!message.guild.member(user).bannable) return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Yetkili **Kişileri** __**Banlayamam !**__`)
		    .addField("• **NOT**", "\`\`\`» BOT TAMAMEN CEM VE BERKAN ADLI KİŞİYE AİTTİR !`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );

  message.guild.ban(user, 2);
message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:onayli:761500843961745439> **${user.username}**, Yetkili tarafından sunucudan **${reason}** sebebiyle atıldı!`)
        .setColor("0x0dff3e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kick')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return message.guild.channels.get("781115410330288138").send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};