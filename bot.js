var Discord = require('discord.io');
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
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        var firstArg = args[1];

        switch(cmd) {
            case 'drunk':
                if (firstArg) {
                      bot.sendMessage({
                          to: channelID,
                          message: firstArg + ' is probably drunk.'
                      });
                } else if (user == 'Ibsul' || user == 'BigChad69' || user == 'SirArkimedes') {
                      bot.sendMessage({
                          to: channelID,
                          message: 'You\'re probably drunk.'
                      });
                }
                break;
            case 'commands':
                bot.sendMessage({
                  to: channelID,
                  message: '```!drunk {name} : See who is drunk \n!drunk : Are you drunk?```'
                })
                break;
            // Just add any case commands if you want to..
         }
     }
});
