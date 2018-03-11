// Programmers : Andrew Robinson & Jonas Smith
// Date start  : 3/11/2018
// Purpose     : We are all drunk
//
var Discord = require('discord.js');
var winston = require('winston');
var auth = require('./auth.json');

var list = { };

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [

    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Initialize Discord Bot
//
const bot = new Discord.Client();

bot.on("ready", () => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

// Checking message for drunk status and !set cmd
//
bot.on("message", (message) => {
  // get current sender of message
  //
  var sender = message.author.username;

  // react with 🍺 if drunk = true
  //
  if(list[sender] == true && !message.content.startsWith("!set")){
    message.react("🍺")
  }

  // command to add/remove drunk status from dict. & display discord bot message
  //
  if(message.content.startsWith("!set") && (sender == "SirArkimedes" || sender == "VOXEL")) {
      var cmdArray = message.content.split(" ");

      list[cmdArray[1]] = cmdArray[2] == "true" ? true : false;

      // Message is displayed when user is "LIT"
      //
      if(list[cmdArray[1]] == true){
        message.channel.send(cmdArray[1] + " is DRUNK! 🍺🍺🍺🍺");
      }
    }
  });

// Logs in the bot with the auth.token
bot.login(auth.token);
