const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");
const db = require("quick.db");
var prefix = ayarlar.prefix;
const fs = require("fs");
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (client, message, args) => {
  if (
    !message.member.roles.get("763115083726323712") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel
      .send("Bu Komutu Kullanmaya Yetkin Yok!!")
      .then(m => m.delete(5000));

  var user = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  if (!user)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Mute Atılcak **Kullanıcıyı** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» !mute <kullanıcı> <süre> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  if (user.hasPermission("ADMINISTRATOR"))
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> **Mute •** Yetkili **Kişileri** __**Muteleyemezsin !**__`)
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );

  //var muterole = message.guild.roles.find(`name`, `muted`);
  var muterole = message.guild.roles.get("776395689935765504"); //MUTELİ ROLÜ !

  if (!muterole)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> **Mute •** **Herhangi Bir** MUTED __**Yetkisi Yok !**__`)
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  var muteTime = args[1];

  if (!muteTime)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Mute **Süresi** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» v.mute <kullanıcı> <süre> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let reason = args.slice(2).join(" ");

  if (!reason)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`<a:Carpi:795292924006498314> Herhangi Bir **Sebep** __**belirtmelisiniz!**__`)
		    .addField("• **Örnek Gösterim**", "\`\`\`» v.mute <kullanıcı> <süre> <sebep>`\`\`")
        .setColor("RED")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );

  
  await user.addRole(muterole.id);
  await yazı[message.author.id].yetenekler.chatmute++;
  //  db.add(`MuteSayısı_${message.author.id}`,1)
  db.set(`muteyazı_${user.id}`, Date.now());

  db.set(`muteyazısüre_${user.id}`, ms(muteTime));
message.react('763293315008954398');
  
  setTimeout(function() {
    if (!user.roles.get(muterole.id)) return;
    user.removeRoles([muterole.id]);
    db.delete(`muteyazı_${user.id}`);
    setTimeout(function() {
      db.delete(`muteyazısüre_${user.id}`);
      let embed = new Discord.RichEmbed()
        .setColor(muterole.color)
        .setDescription(
          `${user} adlı Kullanıcının **Chat Mute** süresi doldu `
        )
        .setFooter(`${client.user.tag}`, `${client.user.displayAvatarURL}`)
        .setTimestamp();
 
      let sChannel = message.guild.channels.get("776396689232625695");
      if (!sChannel) return;
      sChannel.send(embed);
    }, 1000);
  }, ms(muteTime));
  let süre = muteTime
    .replace(/y/g, " Yıl")
    .replace(/d/g, " Gün")
    .replace(/h/g, " Saat")
    .replace(/m/g, " Dakika")
    .replace(/s/g, " Saniye");
  let embed = new Discord.RichEmbed()
    .setColor("#f12427")
    .setDescription(
      `
${user} adlı kişi Chat Mutesi Atıldı. 
Ceza Süresi : **${süre}**
Ceza Sebebi : **${reason}**
`
    )
    .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
    .setTimestamp();
  let sChannel = message.guild.channels.get("776396689232625695");
  if (!sChannel) return;
  sChannel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "kullanıcıyı susturur.",
  usage: "(a!tempmute <@user> Ceza Sürüsi Ceza Nedeni) Seklinde Kullanılır.>"
};
