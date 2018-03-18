// Programmers : Andrew Robinson & Jonas Smith
// Date start  : 3/11/2018
// Purpose     : We are all drunk
//
var Discord = require('discord.js');
var winston = require('winston');
var auth = require('./auth.json');

var userDict = { };
const bot = new Discord.Client();

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

// Called when bot get created.
bot.on("ready", () => {
  logger.info("Starting server. Bot was ready at: " + bot.readyAt)
  console.log("Server created and ready! Time when ready: " + bot.readyAt)
});

// Checking message for drunk status and !set cmd
//
bot.on("message", (message) => {
  // get current sender of message
  //
  var sender = message.author.username;

  // react with 🍺 if drunk = true
  //
  if (userDict[sender] == true && !message.content.startsWith("!set")){
    message.react("🍺")
  }

  // command to add/remove drunk status from dict. & display discord bot message.
  //
  if (message.content.startsWith("!set") && (sender == "SirArkimedes" || sender == "VOXEL")) {
      var cmdArray = message.content.split(" ");

      // Toggles user status of drunk. allows for a simpler command of !set [USERNAME]
      //    instead of !set [USERNAME] [BOOL].
      //
      if(userDict[cmdArray[1]] == true) {
        userDict[cmdArray[1]] = false;  }
      else                              {
        userDict[cmdArray[1]] = true;   }

      // Message is displayed when user is "LIT".
      //
      if (userDict[cmdArray[1]] == true){
        message.channel.send(cmdArray[1] + " is DRUNK! 🍺🍺🍺🍺");
      }

      // Get all current "drunk" users for Game status.
      //
      var status = "";
      for (key in userDict) {
        if (userDict[key] == true) {
          status = status + key + ", ";
        }
      }

      // Display game status.
      //
      if (status == "") {
        status = "no one";
        bot.user.setPresence( { game: { name: "" }, status: "online" } )
          .then(function(user) {
            logger.info("User status set to: " + user.presence.game.name);
          })
          .catch(function(error) {
            logger.error(error.toString());
          });
      } else {
        status = status.substring(0, status.length - 2);
        bot.user.setPresence( { game: { name: "drunk with " + status + "!"}, status: "online" } )
          .then(function(user) {
            logger.info("User status set to: " + user.presence.game.name);
          })
          .catch(function(error) {
            logger.error(error.toString());
          });
      }
    }
  });

// Logs in the bot with the auth.token
//
bot.login(auth.token);
