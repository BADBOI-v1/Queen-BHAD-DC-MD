const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = true;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //This is the new variable for controlling status seen.


//
global.Owner = ["2347043759577","2349066528353","263719936989"];         //If you want singal number so global.Owner = ['8801928502256'] Change into your number.
global.OwnerNumber = ["2347043759577","2349066528353","263719936989"];   //If you want singal number so global.Owner = ['8801928502256'] Change into your number.
global.ownertag = ["2347043759577","263719936989];
global.OwnerName = "DAVID CYRIL";
global.BotName = "QUEEN_ANITA-V2";
global.packname = "A N I T A <3 D A V I D";                             //Do not change.
global.author = "QUEEN_ANITA-V2";                               //Do not change.
global.BotSourceCode = "https://github.com/DeeCeeXxx/"; //Do not change.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L"; 


//
global.sessionName = "session","eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ljQ2JIakJ1SUJjeHFpaVM2ZDl2UEFrMGtCb2ZiVkZJeThGdzEyZ3dsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3ZuV3NDTVNpemVsUXN6SU9zSTJGN2g4dDc3RFJ5WjRwRk9sMXlBNnJtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTFQ0OVZFa3p4NTNWMUhzSDhsSFhONGR6cnVHM1NyVHRnaUpnVmduYzBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSUh5cVF5UndweEFIUUdtWCt3emxuZ29aYWtCOFBOenlkeCtUVFNMZmxJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPcEhUNlZFTjAwdENsemYzNThtUUNrRkg2a2U1OUJtVkdieHVmeGFUSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwTSswdEFoU1hzRzB0Mi9wTUZsNWxRVWkweHhwOGJNaUJOMzZjbkVWUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUl2OWxxRmJUWUFnbWNqNHQ1T3lNYTRjLzNxZml2cFE4MDVvV1lZVi9WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjN1aTRBSU04cjVtWFNYYzdGT1VlNDNRYjB2cjNPWU9CL1JBcjBnTjBWND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEcXlDTDcvaTA2KzZiRlh4Y0tQSUFCSmJrR0VSUzZGenBNeUNHV1o2cWZ6SXFHeXRWN2tuWEo5bTFNdHFKbGdrK0IybkFkZWd6UnBveHhDT05XL2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiIzNWQ5NlVVVHNUWENXOXhkbktmTG1OODBvcDhSR3Y2RUkwOEYxWm1kQmlJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkcmVYcHEtOFJoNnhncmtYYklQYVNRIiwicGhvbmVJZCI6IjVlOTcyYTIxLThlZTAtNDM2Yy1hOWYzLTNhMzExM2FiOGRiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrWElWVE9rRERSY25idHl2aDM0WVMzOGFqUm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicCt4NW96aTBVbXhSWkMxVWVMdE55elNnTnFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJaOTRGUEhRIiwibWUiOnsiaWQiOiIyNjM3MTk5MzY5ODk6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJiw7PDn8Ofw6nDnyBqcsOxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRFkra29RMWRua3RBWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzaS9WaStkYXJTY3htU2RCQzZKS3dNclcvZG41NEJFYWNMM0UxVXhaaWo4PSIsImFjY291bnRTaWduYXR1cmUiOiIwMjJJdlpheG9OcFpDMnBuRzVPcCtrSXBXRmgwejFHcGNack5xM1VscmxpaTkxNFY1cjJXUXVib0FRUWgzcXErMCtCaWZmUGRERVhiUU5sNGRrRlhDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicmNxcGtmUFlFZWV3WjNLSHg0a2dPakJLLzRYWWFkME5INUVETVJDOGI4NG9ZblhQcWtCaEcxVEcyTFYrczJrKytVQjQ4M0tjU2FOZlZ5V1dhU09vakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTk5MzY5ODk6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNHYxWXZuV3Ewbk1aa25RUXVpU3NESzF2M1orZUFSR25DOXhOVk1XWW8vIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzE0NTMyfQ==",;                          //Do not change.


//
global.prefa = ["."];                                    //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "😎";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/chainsaw-man-power-csm-power-anime-gif-9890569885648818723' };
global.websitex = "https://github.com/ahil15";
global.lolhuman = "KaysaS";


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
    useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Just Wait...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
