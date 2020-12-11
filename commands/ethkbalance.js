var pools = process.settings.pools;

module.exports = async (msg) => {
    //Only enable this for DM messages
    //if (msg.obj.channel.type != "dm") return;
    //If an argument was provided...
    if (msg.text[1]) {
        var pool = msg.text[1];
        //Verufy the pool exists.
        if (Object.keys(pools).indexOf(pool) === -1) {
            //Tell the user that pool doesn't exist.
            msg.obj.reply("That pool doesn't exist.");
            return;
        }

        //Verify the person has access to the pool.
        if (
            //If the user isn't an admin of the pool...
            (pools[pool].admins.indexOf(msg.sender) === -1) &&
            //And isn't a member of the pool...
            (pools[pool].members.indexOf(msg.sender) === -1)
        ) {
            //Tell the user they don't have permission to access that pool.
            msg.obj.reply("You don't have permission to access that pool.");
            return;
        }

        //Tell the user the pool's balance.
        msg.obj.reply(pools[pool].printName + " has " + (await process.core.users.getBalance(pool)).toString() + " " + process.settings.coin.symbol + ".");
        return;
    }
    
    const embed = {
  "url": "https://discordapp.com",
  "color": 5677232,
  "timestamp": ""+ msg.time +"",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/734378182337101926/779510050552545331/unix.png",
    "text": "Consortium of Projects"
  },
  //"thumbnail": {
  //  "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  //},
  "author": {
    "name": ""+ msg.name +"",
    "url": "https://discordapp.com",
    "icon_url": ""+ msg.avatar +""
  },
  "fields": [
    {
      "name": "ETHEREUM METAMASK",
      "value": "" + (await process.core.ethkusers.getBalanceETHK(msg.sender)).toString() + " " + process.ethksettings.coin.symbol + ""
    }
  ]
};
msg.obj.reply({ embed });
    //If no argument was provided, tell the user thir balance.
    //msg.obj.reply("You have " + (await process.core.ethkusers.getBalanceETHK(msg.sender)).toString() + " " + process.ethksettings.coin.symbol + ".");
};
