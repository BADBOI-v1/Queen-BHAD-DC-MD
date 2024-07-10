//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234906628353";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lqdFFCMWF1QU95SFVSOFE1VkRRZVJwNEJYbXoxR2ZTQmVXZ1cxclVuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGJsV3d2NlFHdU1TN3VaYXhqcDROdXRCRlJXM3YveHdGWU5QcEMyL0ZSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT2U0M1FJaE1hVGxtNytqUFNQVlE3bVQ0ZHJXQUljUmNaaHFwc01lRlVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ29wMnUwNWVqVjVYV2JtYWlYYVZ4MUx6Z0VkR0U2WEVSM3ZhWTRtTkgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPaEpvNTdIZTVIcVFCYWZ2ZGJCZmhRVXdWaW84U0RKRGFDNitpT0ppa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwxUHZKWnNveHFjMFpKdlRJcm9RMXFzeHdEZTBZUlpOQ2NJYkxXMFlNWEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VXb0pseXNRZ1A2b05neDJmbXk3NDV0NmFxVmRBMTEydlpSTllEKy9ubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVhlbVdua0pUWEFuSmR5NWtLN3RQeFdSWkVPNThnRmlQbHZPUkFPa3NFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhSVTJKd0hyQ2FtT3NRenNVcGZNK2NXbnhNVDA3VmlBU3hPdEQ3MFpBbythSC9yZitqV2NLK2J1N0F6bzFXQ2krdjBmV2lFVllVako5TzI1MjMvb0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJLUGVIcDNyck1tblU2ZFNlNHdYQXhHUGNtQnEvQnZKMUJSb2dIUG56QVdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvTGM3b0tiY1JNT3pRVi1GdDFQTWVRIiwicGhvbmVJZCI6IjU3NWY4Y2RkLWIxYzUtNDVhYy04YTk0LTBhOTdlMWVkNjQ5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvaU03WE9sUThkbFVCYUpOSjJqSmpyKzZDVlk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJqcldLUlE5ZGorOTZ4M0cwTWpmbW5RNDlWcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BucnZvTUNFSzMydUxRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpuSU8xT1VmbE9xbzNoZzhIdmtwU0lBNlFOM1IrMWhIUkVQTDUzV3puRWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhXNnFuTjBkckUzQ0NOejUxSHhWNE83MVNvQlQ4Z1NVbTRmUmxSNjdnU2xkbkVYYXB5QVFZNnR4ZFBkbStyNmxlRlIrUjJHT3BSMDA5dnRkaW1IZkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6a01SS0RLRnFmSUU3cjR2dEQxSUtsUVNsWEFBVFZselBOVkRPWERhK1ZBTmFhQjNUcVBCRmxldEhQTDczenlJSkF6UzhRRm9IVFZ0WURxQXNzSWlEUT09In0sIm1lIjp7ImlkIjoiMjU0NzE5MTkwNDI2OjMxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTExMDIwNzYwNjQ5OTU0OjMxQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTkxOTA0MjY6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzV5RHRUbEg1VHFxTjRZUEI3NUtVaUFPa0RkMGZ0WVIwUkR5K2QxczV4SSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTk3MzA2LCJsYXN0UHJvcEhhc2giOiIyRjl5eHoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
