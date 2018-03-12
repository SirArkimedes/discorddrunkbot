<p align="center">
  <img src="app icon.png" alt="icon">
</p>

# Discord Drunk Bot
* Inform your guild-mates who is drunk or not. :beers:
* When a drunk person types, the bot will react with :beer:.
* Listen to laughter ensue! :laughing:

# How to run
### Requirement
* Node

### Process
1. Run `npm install`.
2. Create a bot with Discord  [here](https://discordapp.com/developers/applications/me).
3. Invite the newly created bot to a server with this link, replacing CLIENT with your bot's client ID: https://discordapp.com/oauth2/authorize?client_id=CLIENT&scope=bot
4. Copy the bot's token.
5. Create a `auth.json` file in the root folder with the following format:
  ` {
      token: "YOUR BOT TOKEN HERE"
  } `
6. Run `node bot.js`.
7. **Optional**: Modify `bot.js` to add your Discord username to the `!set` check. This only allows certain users to use the command. Restart the bot after completion.

### Command
* `!set {username}` - Toggle the username's drunk status (Requires step 7 in [Process](https://github.com/SirArkimedes/discorddrunkbot#process)).
  * **Example**: `!set SirArkimedes` - Toggles SirArkimedes' drunk status.

# Preview
<p align="center">
  <img src="Screenshots/profile.png" alt="icon">
</p>

<p align="center">
  <img src="Screenshots/message.png" alt="icon">
</p>

# Thanks!
* This project was made for the people that enjoy messing with their friends.
* Thanks for checking it out!

<p align="center">
  Made with ❤️ by  <a href="https://github.com/SirArkimedes">SirArkimedes</a> and <a href="https://github.com/JonasESmith">JonasESmith</a>.
</p>
