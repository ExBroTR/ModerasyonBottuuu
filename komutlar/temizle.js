const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  
  
  const sayi = args[0]
if (!sayi) return message.channel.send("Bir Sayı Gir")
  if (sayi >= 101) return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")

  let messages = await message.channel.fetchMessages({
    limit: sayi
  });

     let mesaj = await message.channel.bulkDelete(messages, true);
  
  if (!mesaj.size) {
    return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")
  }


    message.reply(`${mesaj.size} Adet Mesaj Başarı İle Uzaya Fırlatıldı. :rocket:`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};