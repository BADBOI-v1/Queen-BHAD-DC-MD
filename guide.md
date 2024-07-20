
# Guide 📕

Here you can get the proper written explanation of ***QUEEN_ANITA-V3*** Setup and Deployments

## Notice

If you re-upload  anything from my ***REPOSITORY*** give me ***Credit*** Else I can Take Legal Action On You!⚠


## Installation ➡ 📖

- Fork [`QUEEN_ANITA-V3`](https://github.com/DeeCeeXxx/QUEEN_ANITA-V3/fork) repository and give a Star to the Repository

- Edit [`config.js`] file on your own repository

- Upload your bot number and owner number there

- Name your Bot

- Name your Sticker Package name


```js
global.Owner = ["2349066528353"]; 
global.OwnerNumber = ["2349066528353"];
global.ownertag = ["2349066528353"];
global.OwnerName = "DAVID CYRIL";
global.BotName = "QUEEN_ANITA-V3";
```


## Qr Setup 📲

- Click the [`Scan Qr`](https://replit.com/@ahil15/BelugaBot?v=1) from ***BelugaBot-MD*** Repository

- Scan the Qr on your Bot Number

- After Scanning the qr you will get `creds.json` file in your number

- ***Download*** `creds.json` file

- Upload the `creds.json` file on ***ANITA-SESSION*** folder


## Heroku Deploy ✅


- Click the [`heroku-Deploy`](https://xlicheroku.vercel.app/deploy.html) option in ***BelugaBot-MD*** repository

- Deploy the repository first using my repository

- Now go to deploy Option in Heroku App

- Connect the heroku with your Github Account

- Now Connect it with your `BelugaBot-MD` Repository

- Click Deploy

- After Deploy Go to Your Heroku Bot app Resources

- Select `Web Npm`  &  `Worker Npm` turned on

- Leave the `Worker2 Npm` turned  off

- Then Click `Restart all Dynos`

- Now wait for start

- Then your bot is ready to use


## Mogenius Deploy ✅

- Click the [`mongenius Deploy`](https://studio.mogenius.com/) option from the repository

- After that give a name of your cloudspace app

- Then Click create

- After that click `Create with DockerFile`

    <img alt="" height="150" src="https://i.ibb.co/XbV4ZdB/Screenshot-20230921-173915.png">

- Connect it with your github Account

- Give a name of your service

- Adjust `Ram,Cpu,Temp-Storage` by your own

- Select your github repository to ***BelugaBot-MD***

- Then Click Create/Deploy and wait for deploy

- Now your bot is ready to use


## Codespaces Deploy ✅

- Click the [`Codespaces`](https://github.coim/codespaces/new) Deploy Option from the repository

- After that Select your bot repository from Codespaces

- Now Type this command
```
Npm i
```
- And Click  enter

- Then Scan the qr from the log 

- Now your bot is ready to use


## Termux Deploy➡🔋

- Download Termux latest version

<br>
<p align="left"><a href="https://m.apkpure.com/termux/com.termux/download"> <img src="https://img.shields.io/badge/Termux%20Latest-black?style=for-the-badge&logo=termux" width="160" height="30"/></a></p>



```
termux-setup-storage
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/ahil15/BelugaBot-MD
cd BelugaBot-MD
npm i
npm start
```

- Paste These all commands one by one and serialized to run the bot

- Now your Bot is ready to use


##  🛡️ Windows Cmd & Vs 🛡️

* [`Download ffmpeg`](https://ffmpeg.org/download.html#build-windows) and set path
* [`Download wget`](https://eternallybored.org/misc/wget/releases/) and set path
* [`Download Node JS`](https://nodejs.org/en/download/)
* [`Download Git`](https://git-scm.com/downloads)
* [`Download Libwebp`](https://developers.google.com/speed/webp/download)

```cmd
> git clone https://github.com/ahil15/BelugaBot-MD.git
> cd BelugaBot-MD
> npm i
> npm start
```

- Run these commands one by one


## Command For 24/7 🔷🔋
```js
npm i -g forever && forever index.js && forever save && forever logs
```

