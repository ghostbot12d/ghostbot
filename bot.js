const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setPresence({ game: { name: `meus comandos g!comandos`, type: 1, url: 'https://www.twitch.tv/recky'} });
    console.log('Logado');
});
client.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/twitter')){
        message.channel.send('Twitter:  https://twitter.com/ServidoresGhost');
    } 
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /loja - /ping')
    }
    if (message.content.startsWith('/loja')){
        message.channel.send('Em desenvolvimento!');
    }
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
  if(cmd === '/ping') {
    message.channel.send(`Meu ping é***${Math.round(client.ping)}ms!***`);
  }
});
client.on('message', message => {
  let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
  if(cmd === '/ban'){
    const args = message.content.split(" ").slice(1);
    var razao = args.slice(1).join(" ")
        var membro = message.mentions.members.first();
        if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
        if(!membro) return message.reply("você não mencinou ninguém")
        if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
        if(razao.length < 1) return message.reply("Coloque um motivo!")
        membro.ban()
        message.channel.send(`O membro ${membro.user.username} foi banido do servidor.\nMotivo: ${razao}`)
  }
});
client.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
 
  let canal = member.guild.channels.find(`name`, "📥entrada");
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setDescription(`🎈 **|** ${member} **Seja bem-vindo(a) ao nosso servidor.**`)
  canal.send({embed : embed})
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
