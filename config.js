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

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"UIpvC3QeV0XhFbip1336ncXxmFYSLCYcKc3fgZeQblA="},"public":{"type":"Buffer","data":"wlomotgomjZi9YzNzEh2RGy4L8/la9+kHo+7y/f8AUY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aMJHwuxNye0p/31IEm/xbl8q3CLzdcIoRqzt83NnLEk="},"public":{"type":"Buffer","data":"8n8EU3w7zM8brH/kPSZpHFFJB5o7GteqAy0jnzwajA0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+I1UG39zWGWnMC3AXl9DnD2qZbucKXspD6MZAra4F38="},"public":{"type":"Buffer","data":"jzWs1OmGTIAa0qDf09KaR4FiGp58rZSFCisOSZ/xj0I="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8K+dQEvKM1qb7EMFsovV1YnfM/502jJTWecuIwOkbnw="},"public":{"type":"Buffer","data":"HNicP9QctaV2S7jKpOfnXLM8y4aTR+BTpR63ZPeSKWg="}},"signature":{"type":"Buffer","data":"8Dy4P8goLemJo4JHYGi0CQ3yPZiEytKIQlADoJzdqpocuFtQvAQhTuOfwLMC1H1K6p5Q5nMecGBX92iSLPK8Cw=="},"keyId":1},"registrationId":194,"advSecretKey":"uxHwhSKtGS/suGdRGxFt+I/7IxVqWxGmeSFdU32GwLc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"5ilw1AH_RA-mKpknCml_iw","phoneId":"a74d8e89-3c7b-416b-9db3-93bdfd2293bc","identityId":{"type":"Buffer","data":"uO67Zvr2eAXGw2B+RA8TfiXR5pI="},"registered":true,"backupToken":{"type":"Buffer","data":"yU3hIiAnkcuXE6ekXhSHql1DDrM="},"registration":{},"pairingCode":"1VR7M23Y","me":{"id":"2347033183262:11@s.whatsapp.net","lid":"37641680597162:11@lid"},"account":{"details":"CP68nOIHELPC/bQGGAEgACgA","accountSignatureKey":"tBUe8lnya1CIV/pkZHyTN0iF7PGi6nEKO0J3oTwx6CM=","accountSignature":"+ITSEaqmJRFcFOrw/XSV8TKP5XZhW4VLjhdJg2VQ9feFKnaNxQHgVrGubkyr/dKwLVQQiJbHLSf/N+ZorRRGCQ==","deviceSignature":"L9ZLvB1SV3LjpmhEtcLga43G/UxEp7wBmPHJ+OQ0T2t0t6ZGDW5jLDBJ8yf7wOyMlHishWYFe3n66pSUS8y3DA=="},"signalIdentities":[{"identifier":{"name":"2347033183262:11@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbQVHvJZ8mtQiFf6ZGR8kzdIhezxoupxCjtCd6E8Megj"}}],"platform":"android","lastAccountSyncTimestamp":1721721142}`
global.prefa = ["/"]

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
