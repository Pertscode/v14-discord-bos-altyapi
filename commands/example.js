const {EmbedBuilder} = require("discord.js");
//Perts Code
exports.run = async (client, message, args) => {
//Perts Code
    const embed = new EmbedBuilder()
    .setTitle("Komut Başlığı")//Perts Code 
    .setDescription("**Her Merhaba Komut Yapsana**")//Perts Code
    .setColor("#007fff")//Perts Code
    .setTimestamp()//Perts Code
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};//Perts Code

exports.help = {
  name: "test"
};//Perts Code
