# Installation of the tipbot

## CONFIGURE all json file (Edit all of this file)
- btcf.json
- btrp.json
- et3d.json
- ethk.json
- ethp.json
- etht.json
- settings.json
- xmr1.json

### Example (btcf.json):


    "discord": {
        "token": "PUT HERE YOUR DISCORD CLIENT ID",
        "user": "PUT HERE YOUR BOT ID",
        "giveawayEmoji": "593992166502563865"
    },

    "coin": {
        "type": "btcf",
        "symbol": "BTCF",
        "decimals": 18,
        "withdrawFee": 1,
        "mintip": 0.01,
        "infura": "wss://mainnet.infura.io/ws/v3/ae1b882f998649239a02b622599bdf12",
        "keys": "/root/consortium-tipbot/.infura/keystore/",
        "addresses": {
            "wallet": "0x483cce14e46c0c4e5b1ef113e2589957905927d1",
            "contract": "0x648df91548E4C9A4C03ED1889CE91f9d414A7931"


        }
    },

    "mysql": {
        "db": "consortium",
        "tips": "tips",
        "admins": "admins",
        "user": "root",
        "pass": "PUT HERE YOUR MYSQL PASSWORD"
    },

### Configure this line 
- "token": "PUT HERE YOUR DISCORD CLIENT ID",
- "user": "PUT HERE YOUR BOT ID",
- "infura": "wss://mainnet.infura.io/ws/v3/<b>ae1b882f998649239a02b622599bdf12</b>",    (Change the <b>ae1b882f998649239a02b622599bdf12</b> to your own infura ID)
- "keys": "/root/consortium-tipbot/.infura/keystore/",    (Change this line to your own computer directory)
- "pass": "PUT HERE YOUR MYSQL PASSWORD"

### NOTE: Make sure you edited all the .json files If not the bot will not work
- btcf.json
- btrp.json
- et3d.json
- ethk.json
- ethp.json
- etht.json
- settings.json
- xmr1.json


## CREATE DATABASE and TABLE , JUST FOLLOW THIS MYSQL COMMAND
1. Login to your mysql 
### Execute  this command
- CREATE DATABASE consortium;
- use consortium;
- CREATE TABLE tips (name VARCHAR(64), address VARCHAR(64), unix VARCHAR(64), ethk VARCHAR(64), ethp VARCHAR(64), et3d VARCHAR(64), btrp VARCHAR(64), btcf VARCHAR(64), etht VARCHAR(64), xmr1 VARCHAR(64), notify tinyint(1));
- CREATE TABLE admins (name VARCHAR(64), active tinyint(1));
- exit;

# RUN THE BOT

- Go to the consortium-tipbot folder
- Follow this command
```
npm start
```

<img src="https://www.linkpicture.com/q/npm-start.png"> </img>






