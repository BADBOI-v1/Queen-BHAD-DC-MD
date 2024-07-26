//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samuelogundipe12@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://queen_anita_v2_user:vMFsPVqM1rmxgiL9RUpVfQlF7KClPLlo@dpg-cqi0utlsvqrc73chgl80-a.oregon-postgres.render.com/queen_anita_v2";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348138392770";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "paused";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhhWWswRHpnRXhnT1dITy9iOXBlTVY0YUw1Y0RrRnZQbUJBYm9RSWhtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGorbEpnekJINGdUdFpzZ1Uxd1MxcGl3NVVPdytqbC9UK3VST2s3RU9ucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTkxGMGV4OVExTmVrZFloM2NXb0dOQURIUVU4WGNFQTg4cTFqeE0rWlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxYkJUZUJ6TERCMlBUbU54TWZWS2lvSldIVGNhWXI5bVMyVU95Rlc4T1RrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDN0V6cVZnUlZwZDFGc0lMU0psOEREVVJFOEhiSGwrZG1hQ0lmRlgxRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKWUZHeEV3YVg1ZW54TFNvYXRvcllyUWdnekFoa2NiaWRRNU90Vytpelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZlcE10Um1jbXp1MU0xWkhhbGtaZW9maVVJLzdjbEE5M090ek44UzdIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JKLzl0NjZUM3pMMU9IM2Fhc3lqUERvZUhqNnlnTlEwdTNnaDZxajRTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh0ajNSNEs4MGQwVC9TQkxic3RJUEg4VGlmaDdvajZ3dDh4a1RBYzhEUEZiY0Y1Q0N3UGhMcnNhSnNoZEJNcXVZKzEyKzBqWFJkYmpxbjJMcGdlVUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJRdEh1U0FFVjB0OTNTa2tkc0hzc21obHIvL0l0Um93Z0tnSFdWUllTRWVBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJROFBzRnRDYlJoeU5MaVhNUFhLY1BRIiwicGhvbmVJZCI6IjE3NDNjMTRjLTExNTEtNGFlNi1hMTU3LTI3N2EyNzlkOWFjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQ1FiZkpLcXdCYWRmd05NRmdwV0Z0cGszQWM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZaNjlOdmsrN295QkttK1Y5OTFNOG55YUxsUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01td3RQb0ZFTUdYa0xVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imp1NlVhOFNKVE1obE5uYk92ZDV4andWQ0F4cDhVQVQ4YmUrek4vR2JGV1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjEzMUdvY2trOFQycEh6ekFMRjdmalc1NSszYU5KdSt0Y3d6T2JMNUhiLytGRElOS0U3ZzhpbHRGU1YzL3UwV0FqOEc5UUMwMUZDZGZhRS9TQU9sUUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmMjBJS3BIbnI0bEJBdmVCODVaRC9kdG03U1I3QUN1T2xpN3BuYjE3eUxyZWcwMC9UYUJ0eGxWRzAxdFlYOG1relp4ZjlIelBlR042UnFNZWNUb0ZCUT09In0sIm1lIjp7ImlkIjoiMjM0ODEzODM5Mjc3MDo4NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NDUyOTM2MDc5Nzc3ODo4NkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzODM5Mjc3MDo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZN3VsR3ZFaVV6SVpUWjJ6cjNlY1k4RlFnTWFmRkFFL0czdnN6ZnhteFZsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwMjY5NTgsImxhc3RQcm9wSGFzaCI6IjFsT1NFSSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOLEXY-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "BOLEXY-V2",
  ownername: process.env.OWNER_NAME || "BOLEXY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
