const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("=")

bot.on('ready', function() {
    bot.user.setGame("=help /|\ Contrôler Le Monde /|\ TheGmader ©");
    console.log("Hilter est là");

});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "embed"){
        message.channel.send("@everyone");
        var embed = new Discord.RichEmbed()
            .setTitle("Groupe Steam")
            .setDescription("Voilà le groupe Steam ! : https://steamcommunity.com/groups/GmodCommunityRP")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/26/6/1530350711-icons8-steam-100.png")
            .setColor("0x00A2FF")
            .setAuthor("TheGmader", "https://image.noelshack.com/fichiers/2018/26/6/1530351587-logo-moi.png")
        message.channel.sendEmbed(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("Collection")
            .setDescription("Voilà la collection du serveur ! : \n https://steamcommunity.com/sharedfiles/filedetails/?id=1407196384")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/26/6/1530351259-icons8-liste-100.png")
            .setColor("0x00A2FF")
            .setAuthor("TheGmader", "https://image.noelshack.com/fichiers/2018/26/6/1530351587-logo-moi.png")
        message.channel.sendEmbed(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("Forum")
            .setDescription("Voilà la forum du serveur ! : \n https://ww2secondeguerremondial.mistforums.com/")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/26/6/1530351365-icons8-commentaire-discussion-100.png")
            .setColor("0x00A2FF")
            .setAuthor("TheGmader", "https://image.noelshack.com/fichiers/2018/26/6/1530351587-logo-moi.png")
        message.channel.sendEmbed(embed);
    }
    
});
