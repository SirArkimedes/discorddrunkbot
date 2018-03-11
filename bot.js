// Programmers : Jonas & Andrew
// Date start  : 3/11/2018
// Purpose     : We are all drunk

var Discord = require('discord.js');
var winston = require('winston');
var auth = require('./auth.json');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Initialize Discord Bot
const bot = new Discord.Client();

bot.on("ready", () => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on("message", (message) => {
  if (message.author.username == "SirArkimedes" && ) {
    message.react("🍺")
  }
});

bot.login(auth.token);
