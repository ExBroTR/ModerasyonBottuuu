const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require('ms');
const db = require("quick.db");
const fs = require("fs");

exports.run = async(client, message, args, prefix, ayar, emoji) => {
  // !sesmute @etiket 5m
  let uye = message.mentions.members.first();
  let sure = args[1];
  let sebep = args.slice(2).join(' ');
  let logKanali = "776398107834712094"; // LOG KANALININ ID
  if (!uye || !sure || !sebep) return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Ses Mutesi Atılcak **kullanıcıyı** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» !sesmute <kullanıcı> <süre> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  if (!uye.voiceChannel) return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> **Ses Mute •** Kişi **Ses** __**Kanalında Değil !**__`)
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  if (!uye.voiceChannel.permissionsFor(message.author).has('ADMINISTRATOR') && !message.member.roles.get('723941015630643220')) return message.channel.sendEmbed(
      new Discord.RichEmbed()
		.setTitle(`<a:Carpi:795292924006498314> Bu Komutu **Kullanabilmek** için **__Yeterli Yetkilere Sahip Değilsin !__**`)
		.addField("• **Sahip Olman Gerek Yetkiler**", "\`\`\`» ✔️ | TRANSPORT\`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  uye.setMute(true);
  message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(`<a:onayli:761500843961745439> <@${uye.id}> adlı üye ses kanalında **${sure}** kadar susturuldu!`)
        .setColor("0x0dff3e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  message.react('723941015630643220');
  let embed = new Discord.RichEmbed()
    .setColor("#f12427")
    .setDescription(`
<@${uye.id}> adlı üyeye sesmute atıldı.
Ceza Süre: **${sure}**
Ceza Sebep: **${sebep}**
`
)
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .setTimestamp();
    client.channels.get(logKanali).send(embed);


  setTimeout(() => {
    uye.setMute(false);
    message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(`<a:onayli:761500843961745439> <@${uye.id}> adlı kullanıcının susturulması bitti !`)
        .setColor("0x0dff3e")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
    
  let embed2 = new Discord.RichEmbed()
      .setColor("#f12427")
      .setDescription(`
<@${uye.id}> adlı üyenin ses mute süresi doldu.
`
)
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .setTimestamp();
    client.channels.get(logKanali).send(embed2);
  }, ms(sure));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'sesmute', 
  description: 'Sesmute.',
  usage: 'sesmute @üye süre sebep',
  kategori: 'kullanıcı'
};
