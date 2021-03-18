const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "take",
  aliases: ["hot take,hottake,Hot Take,hot Take,Hot take,take,hot take"],
  usage: "hot take <message>",
  description: "Send your Hot Take",
  category: "moderation",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Enter a Hot Take");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "boombaclat" || x.name === "boombaclat");

    if (!channel) {
      return message.channel.send("there is no channel with name - suggestions");
    }

    let embed = new MessageEmbed()
      .setAuthor("🔥HOT TAKE🔥" , message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail('https://media.tenor.co/videos/7e2203c598fc2e81ca42d0d660d9b992/mp4')
      .setColor("ORANGE")
      .setDescription(args.join(" "))
      .setFooter("/-/")
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("<a:zFire:802746252391088138>");
      m.react("❌");

    });

    
    message.delete()
    
  }
};