const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "David Cyril";
global.BotName = "QUEEN_ANITA-V2";
global.packname = "ANITA <3 DAVID";                             //Do not change.
global.author = "QUEEN_ANITA-V2";                               //Do not change.
global.BotSourceCode = "https://github.com/DeeCeeXxx/Queen_Anita-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KLu7a2r4bc4JFV8s5epvsF"; 
global.SupportGroupLink = "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2349066528353"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"iPr5LNvFf6hzL5C39L/t3dBnPwX5RCe7bHCfYrIRWE8="},"public":{"type":"Buffer","data":"7h7QzVPBl4Y6sL8vhAjhv2GBcuyYRNk5xpvxXCI+2Gs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4AKJkiWVDQ9LGYIyFBqm0MgpLYBz7H1JdA5q7F7Rglk="},"public":{"type":"Buffer","data":"x3PwQy+XNZLQWubBqVNT1sv0kDXXkZAOroNCSd8sDns="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KMCduCFJCNZqXmX02NwDJKv41x9ONZrmEflSjh1ttnI="},"public":{"type":"Buffer","data":"YpLNZnGD+1puzImeL+wTKoH9lf3KkB1eI+RvhATJ7mo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wDKfgCGlTFMkLG1teYOyBxvI34TJUIgOHjVpJzqQlG4="},"public":{"type":"Buffer","data":"vDTau/y4M+eVtE14GgwdFGHjuTQhGEqBVR53PSjz8VA="}},"signature":{"type":"Buffer","data":"bmsBBJRPXP2trdPKU4FV6uVsDm9f09XOLnZwvaiok7rdecuIoRbocI+z2vc04pSNk3dDzmaED+bDLhNquui/gQ=="},"keyId":1},"registrationId":11,"advSecretKey":"XIJLoE3vvak1x+s5e/iPOdo/LSW1d0U8arAvkzOAZLA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"R3TOLpJTSZuA427KGXM5tg","phoneId":"062379e7-16f5-4ac3-827e-30ab5f217d64","identityId":{"type":"Buffer","data":"Ilmq82LNupFHdtB6cWtUP2l+PPo="},"registered":true,"backupToken":{"type":"Buffer","data":"Gu0EMVlrakGWSQVf0eyQ3umdweA="},"registration":{},"pairingCode":"4KYTWZM6","me":{"id":"27685904362:1@s.whatsapp.net","name":"David Cyril 2.0"},"account":{"details":"CMbDgmAQmYr+tAYYASAAKAA=","accountSignatureKey":"sstnxK2aoyjtYSrivPEUeWKPkKVrIqmqmYITW3FoH2Q=","accountSignature":"wI7T0e+v3RlRcDTMjJhuxd2Xlswc+UYxVoqCPmD4vUY76bu498vZq9OXtnKL9Gbzq5j7N+VCWiF2qYies6r1BQ==","deviceSignature":"69pz2eGT8lK63el6r6erdW71W8d5J5bBF5QdMyCUGuU10crwupC3ySUXyntZ4ngckSZyk1nLdmMx6sqPjpyFiw=="},"signalIdentities":[{"identifier":{"name":"27685904362:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbLLZ8StmqMo7WEq4rzxFHlij5ClayKpqpmCE1txaB9k"}}],"platform":"smba","lastAccountSyncTimestamp":1721730344}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
 
