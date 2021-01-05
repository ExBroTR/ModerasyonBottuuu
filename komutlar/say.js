const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
    let guild = "707642067031163022";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
   '0': `<a:0_:795258687567822848>`,
    '1': `<a:1_:795258689938259968>`,
    '2': `<a:2_:795258690419949578>`,
    '3': `<a:791593061292441600:795258689564180501>`,
    '4': `<a:4_:795258690340782110>`,                       
    '5': `<a:791593062291079188:795258688725975071>`,
    '6': `<a:6_:795258686938939422>`,
    '7': `<a:791593062202605598:795258690093318144>`,
    '8': `<a:8_:795258689761050675>`,
    '9': `<a:791593062345736212:795258689657110538>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
   '0': `<a:0_:795258687567822848>`,
    '1': `<a:1_:795258689938259968>`,
    '2': `<a:2_:795258690419949578>`,
    '3': `<a:791593061292441600:795258689564180501>`,
    '4': `<a:4_:795258690340782110>`,                       
    '5': `<a:791593062291079188:795258688725975071>`,
    '6': `<a:6_:795258686938939422>`,
    '7': `<a:791593062202605598:795258690093318144>`,
    '8': `<a:8_:795258689761050675>`,
    '9': `<a:791593062345736212:795258689657110538>`}[d];
      })
    }/////////////////////////////
  var tagdakiler = 0;
  let tag = " ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
   '0': `<a:0_:795258687567822848>`,
    '1': `<a:1_:795258689938259968>`,
    '2': `<a:2_:795258690419949578>`,
    '3': `<a:791593061292441600:795258689564180501>`,
    '4': `<a:4_:795258690340782110>`,                       
    '5': `<a:791593062291079188:795258688725975071>`,
    '6': `<a:6_:795258686938939422>`,
    '7': `<a:791593062202605598:795258690093318144>`,
    '8': `<a:8_:795258689761050675>`,
    '9': `<a:791593062345736212:795258689657110538>`}[d];
      })
    }/////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:795258687567822848>`,
    '1': `<a:1_:795258689938259968>`,
    '2': `<a:2_:795258690419949578>`,
    '3': `<a:791593061292441600:795258689564180501>`,
    '4': `<a:4_:795258690340782110>`,                       
    '5': `<a:791593062291079188:795258688725975071>`,
    '6': `a:6_:795258686938939422>`,
    '7': `<a:791593062202605598:795258690093318144>`,
    '8': `<a:8_:795258689761050675>`,
    '9': `<a:791593062345736212:795258689657110538>`}[d];
      })
    }/////////////////////////////
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('!say Komutu')
 .setDescription(` **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** <a:tik:795256252045197322> \n\n  **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** <a:tik:795256252045197322>\n\n  **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** <a:tik:795256252045197322>\n\n  **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**<a:tik:795256252045197322>`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}