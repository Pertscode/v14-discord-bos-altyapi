const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],//Buraları ingilizce Yaptım Buralara Takılmayınız
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],//Perts Code
});//Perts Code

module.exports = client;

require("./events/message.js")//Perts Code
require("./events/ready.js")//Perts Code

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("Token Yanlış Bot Kapalı!") //Perts Code
})


const express = require("express");
const app = express();//Perts Code
const http = require("http");//Perts Code
app.get("/", (request, response) => {
  response.sendStatus(200);//Perts Code
});
app.listen(process.env.PORT);//Perts Code
