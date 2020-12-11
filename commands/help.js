//Get variables from the settings.
var bot = process.settings.discord.user;
var symbol = process.settings.coin.symbol;
var decimals = process.settings.coin.decimals;
var fee = process.settings.coin.withdrawFee;

//Default help tect.
var help = `
**TIPBOT COMMAND LIST**

You can also use "all" instead of any address to tip/withdraw your entire balance.

**!balances || !coins**
Show all your balances of token listed.

**!balance_unix**
Show your balance of UNIX.

**!balance_ethk**
Show your balance of ETHK.

**!balance_ethp**
Show your balance of ETHP.

**!balance_et3d**
Show your balance of ET3D.

**!balance_btrp**
Show your balance of BTRP.

**!balance_btcf**
Show your balance of BTCF.

**!balance_etht**
Show your balance of ETHT.

**!balance_xmr1**
Show your balance of XMR1.

**!tip_unix <user> <amount>**
Tip user amount of token.

**!withdraw_unix <amount> <address>**
Withdraw your token to address, Charging a ${fee} token.

**!deposit || !account**
To generate your personal deposit address.

**!rain <amount>**
Rain the amount divided by all the online users.

`;

module.exports = async (msg) => {
    msg.obj.author.send({
        embed: {
            description: help
        }
    });
};
