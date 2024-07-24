//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "okekepaschal519@gmail.com";
global.location = "Rivers state, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/River's state";
global.github = process.env.GITHUB || "https://github.com/Nastyc1g/PASCHAL-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYb7EyLNSZvA5A4iK2C;
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYb7EyLNSZvA5A4iK2C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7615e8957b6efa9e84f38.jpg,https://telegra.ph/file/187d36d4cbe12a19a77e4.jpg,https://telegra.ph/file/66b884192c27df2020403.jpg,https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg;
global.devs = "2347066575685";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347066575685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xDdE9WZ2lqU0gzOHFVVXViZWprcWo5OU1zMTg0OEVYR0xITGlVVFMwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXdIZXBVbjZVYUpHME9JMkozdThWRXhoOStuSVJGZEpBSWFTcjhwNkdqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TmF5Tm5LRzFOVWJTVkwvbm9ZeEVZNmMvcjFDam5YbUVkMXVUL3JEUmxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NnNnL2h5YlFBOS95UVNwYXR4NTJQNUdaeGxQZ0tEb0h2QTZXYm1QMW1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOc054T1N6WFhJUWVjWlJHK1EydkZMeCtmYmdibHRMZ0NkdWVwaE9KbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktXSXU1UUVGdm5wUkxTdlI5Wk5ISkdBcmppOHZnMy9ab01zeVlKSXhURU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0p3cGFhdW1nNkQ1OElTenJmK3BMREd2MCtIbUE5WHhiajZpZTVsLzJXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1p3cFIyVFFGT0RHNiswZ1JBRmEzN0tZblBSRURvL0duTnJ2ZTY5NUp5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLZjJPbmc3Nll4VlQ4NitoUU1tSVg5TUxqMWpRZXoreWIyaE03ZStOL3hIc1RGT2k0TFk5cGdkSXFyNldQWEVzd2tJVG1LR3ArZER6bTI2ay9pMENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJ1UTh4dXBoZ0RMbWdTTmhVbndYQmxtc210emlYSG5KSE1vMlVPa2RSU0wwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3dE5raGxmN1NoU2xtOTV1WFhQdDR3IiwicGhvbmVJZCI6IjYzMDg3MTM0LTMzNDAtNGFlOS04NmYxLWQ4ODk0ODY2MTVkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRDVjblE0Ymd4NHNocWo1eTJzb3h5dFB6WHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjVrOEdMbmkrUk5ON1VYVXZOR2gycnB0MFAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNURVpKREdBIiwibWUiOnsiaWQiOiIyMzQ3MDY2NTc1Njg1OjQ5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeWprYXdIRVAvZHlyUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzbTVudU8zamlSZ01xei9MWTNINUIxb2djV29mZFo3SkhoTmpkZkR2RGtvPSIsImFjY291bnRTaWduYXR1cmUiOiJZakpCTDJtQ2hhclFLdHJBcStyN1lsUmc3RjBXTkE1WnNsODVpbE8veGNlR2JYK1RlUDBiL1F2OEUwRTc3dVdVYmJrbUJSeHQ4TzQrR0YrKy96aDRCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2xFMnk5b2R6SVhPUzVyY3A2cWJaQmVlS3pmdFgvRk1jeWxoaHEwZ0w5K29SS3JSNVdZbHUzeGtrQXBtSm5nNmJSVWhZK2ZyYWFKMVh5ekMrTkgwQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY2NTc1Njg1OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJKdVo3anQ0NGtZREtzL3kyTngrUWRhSUhGcUgzV2V5UjRUWTNYdzd3NUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4ODkwOTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlFLIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PASCHAL-MD`",
  author: process.env.PACK_AUTHER || "PASCHAL-MD",
  packname: process.env.PACK_NAME || "P A S C H A L",
  botname: process.env.BOT_NAME || "PASCHAL-MD",
  ownername: process.env.OWNER_NAME || "Okeke Paschal",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
