//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Johannesburg,south Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://herrison:wells@cluster0.tqhtuou.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl";
global.website = process.env.GURL || "https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "27688462376";
global.owner = process.env.OWNER_NUMBER || "27634624586";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1NL1BEVVk0M09zMldwRkdnellYU2w4Vyt1VE02UXF3ejFhaWxxZDJFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTlwcC9WZytlZEcvcll6WUIvZ2NFYld5ZG5vR0ZrTjBLb0lSV2hXTmd6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRUQvR0ltbE5RUzhyS3YrNmNhbDN6SERqUlNiaWRLZ3BPVmxtcUF1cFZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyd0RrbTZIZGlEcXIvNE5NS1JsQ3F4OXVFSnU5dDBWTkdsQ3V2S2RGSVhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGL0JNb2RIcXZhZi9ldmdTUXdmQUQxU3pjZlBUcFdNZ1RQc0JTQlZXazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkltdTExTkIrQ0tkNjdSN3BEUCsrTURMYklYTlNwQitmLy8wdmxla3k4aDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0doMHc5NUtIVlRuVlZCcTlEcWJ6NmYvYkQ0Y2RBZlhrcVlqLzhiQVhFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRERpRVJOZEwwdnh0RkZSUS9vUmUzVDRRK1ByT3R6SFpFRHY0S2pqRHFUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldTeFQrTE1RaWpmd3phcEd5b3grdWw5ajVxR3BKdG9mUkVRR3BreGZkblRqb1pad3NGNFlneHNKWWg5ZVpscHJNQlB4Q3A1Mjk3VmUxT01qd3ZLb2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJLZjZJeldnUVo4S1pPWGYwTlVhL09TT3YvY0xiNDFFSjRKY3hRUUVjVDZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5NUpEVG9fb1MwLXhTeHlqbGJMUGlnIiwicGhvbmVJZCI6IjY3NmVhM2Y1LWRlYTktNGMyYS1iMWU0LTdmZmExOTRkZWQ0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyY2NVSzRraC9CdHlud3dXYUtQcDEyT0xoOUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBhaHdVcUVmMUJzT2UxYTVac3JWMk84d3BpWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096cS9MOEZFTE94eExRR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVLcEFMVHBROHNTUHcrVzZrbFpJMUFXZ0d1Y2ZLOWlmQmEwakVVdzlqMUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFtMFVFTEROSWRkZ2NTTCtBaE1CUlVZZEVQaGlFUHN5VzBEVmYyYkhPUTJvVEMzdXNiekxSb090YWtleEVWK3U5ZTNWeW81N0lOSDYzWnFCSitIMEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwZUgrd3pFSGR5dWtFaUxMV0kvL0Y4Vkw5TVVCWEZuVG10Sm0wTiszZFNJNTlRUmU4RW5UWkpURG44MU1TUFY2L0R1T01zc0dla0I2ZmhEcGJJS2xoUT09In0sIm1lIjp7ImlkIjoiMjc2ODg0NjIzNzY6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5NjY0NTgyMzkxODExMToxMUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2ODg0NjIzNzY6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGlxUUMwNlVQTEVqOFBsdXBKV1NOUUZvQnJuSHl2WW53V3RJeEZNUFk5UyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJREE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3ODUwODgsImxhc3RQcm9wSGFzaCI6IjJGOXl4eiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHlIIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "Tristan®",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Tristan",
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
