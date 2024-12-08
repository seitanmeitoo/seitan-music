module.exports = async (client, message) => {
    if (message.author.bot) return;
  
    //Les préfixes ont également une correspondance de mention
    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;
  
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //Mettre la commande en minuscules car votre nom de fichier sera en minuscules
    const command = args.shift().toLowerCase();
  
    //Recherche d'une commande
    const cmd = client.commands.get(command);
    //Recherche d'une commande aliase
    const aliases = client.commands.find(x => x.info.aliases.includes(command))
  
    if(message.channel.type === "dm")return message.channel.send("None of the commands work in DM's. So please use commands in server!")
  process.on("unhandledRejection", (reason, promise) => {
      try {
          console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
      } catch {
          console.error(reason);
      }
  });
  require('events').EventEmitter.defaultMaxListeners = 25
  
  
    //Exécution des codes lorsque nous obtenons la commande ou les alias
    if(cmd){
      cmd.run(client, message, args);
    }else if(aliases){
      aliases.run(client, message, args);
    }else return
  };