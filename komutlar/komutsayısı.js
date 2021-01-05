const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag} - Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://cdn.discordapp.com/avatars/488272180774174720/a_c1e65e103d678e20badff13640ebf604.gif?size=128') 
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['komut-sayısı'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutsayısı',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutsayısı'
};