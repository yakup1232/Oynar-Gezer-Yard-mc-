const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require ('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} adı ile Giriş Yaptı.`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`)
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pinginiz== **' + client.ping + ' ** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'yayın') {
    msg.reply('Yayınımız Haftada En az 2 Kere Yapılmaktadır Gelmeyi Unutmayın!!');
  }
  if (msg.content.toLowerCase() === prefix + 'sunucu') {
    msg.reply('Sunucu Sahibi = ⎝╲⎝⧹Yakup⧸⎠╱⎠ Beni O Tasarladı İnşallah Beğenirsiniz.');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm Selam Kardeşimm!!');
  }
  if (msg.content.toLowerCase() === prefix + 'napıyon yardımcım') {
    msg.reply('İyiyim Patron Sen napıyon Keyifler Nasıl?');
  }
  if (msg.content.toLowerCase() === prefix + 'iyiyim sen nasılsın') {
    msg.reply('Sağolun Patronum Ama İşlerim Var Gitmem lazım.');
  }
  if (msg.content.toLowerCase() === prefix + 'tm sg işini yap') {
    msg.reply('Patronum Çok kabasınız Siz S**tirin Ben giderim.');
  }
  if (msg.content.toLowerCase() === prefix + 'sg') {
    msg.reply('Küfür Etmen Hiç Uygun Değil Burası Ahır Değil,Sevmediysen Çıkabilirsin Zorla Tutmuyolar');
  }
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.reply('Serverin Admin veya Yetkililerinden yardım alabilirsiniz.');
  }
  if (msg.content.toLowerCase() === prefix + 'müzik') {
    msg.reply('Ben Bunun İçin Programlanmadım Lütfen Başka Bir Bottan Rica Edermisiniz.');
  }
  if (msg.content.toLowerCase() === prefix + 'kurallar') {
    msg.reply('Küfür Harici Serbesttir.');
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
   msg.channel.bulkDelete(100);
   msg.channel.sendMessage("100 adet mesaj silindi!");
 }
 if (msg.content.toLowerCase() === prefix + 'tekrar başlat') {
   if (msg.author.id !== ayarlar.sahip) {
     msg.reply('Hırsızz Benim Yapımcım Değilsinn!!');
   } else {
     msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
     console.log(`BOT: Bot yeniden başlatılıyor...`);
     process.exit(0);
   })
  }
 }
});

client.login(ayarlar.token);
