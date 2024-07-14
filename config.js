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
global.owner = process.env.OWNER_NUMBER || "263789622747";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tLSlNibCtKQURtT2RoU28wbWE5TFJWcVFDazRrRUpwcFZMTnl1eGdXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXFTdVR0eTlzaEY3V3dhTDRjWmJJV0wvY1pFbnJTRlQ4ZnhDNXFOR1pYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRGI0a05mV0UvbHJKWWEyMlFQcHU1N1d0RGE1dXlIanFaUnU3ZjJDNG1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aFNLUXVoNmZla2tBdW9YN1dsYkR2UDJ1RzlkMzJsekt1STJRTDJ3VFMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEWlF5U3VmbmpWa1B4bC9Ca0h5YXdIU1Zma0cxV3hsK2xuQU1FdGRLRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIejBYbzJJeHRxUDRUY3ZoUkh6Z1JDR1F0eXlMUzhTTFJ6V1o2Zm9jZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05ObFVuMldoWjRqSjNjazk4Y09mTHNyNWNLNjBLcjVoUklFeEFtUkcxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCs3citQdFhSQjJ1cjhGcEN1SzQvMjVwZlBaNTZWVkxyU0I4T0lZeVRsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo4Ty9KYUFOTldJeVlwVjR6N0lSSWR6MjM4enZhRGVqRm0yWldjeWlIc2xEczg4NXAvNFFjbnBsMFZlY01RMG9qQVR0dEZySGU5UnlpUm9WUEJvVkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiI4cEpVbGE0VDhId3lGU3ZnVEZEcGNibXNqb3V2UW1nbHkzRW1ZSE5Rc3BBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5YWdzYkJrQ1RydTl3NzVFUWdjNmdRIiwicGhvbmVJZCI6ImVhM2JhNzg1LTVmNWUtNDYwZi1iNjMzLTYwYWVhYjQyOTAyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQnhxSXN2U0NQVVB1ZGRKOWx4Vm9HREZXYnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXoySFNBc0EzOFkwRzlRc1RHaHVPNXBIN1k4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRNOTZINzJKIiwibWUiOnsiaWQiOiIyNjM3ODk2MjI3NDc6MzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svZStiSUJFUCt3MExRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBFVVBOWEJJOW5xQld6M3A4bkpYNE1QRmFZQSs1UGdldVh0Wk1XNmJIQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE4di9oaE5aSW5sYlNMVUNMSlA5UXczZE9rUEhQZHVxRUFIUHRJdDJEVlpRd0w3YmhmZGIxMDNXSDNsTlU0MzNoVjNpT3BzdWFpV29HRXB2aHhyUkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhSnR1SDFUWDl5ays4UzFBL1JoOEZRd0RkN096cnNENFpPZ1dhMzNFaTVSUStEdW9aeEgxR1duVjIvdzdaMlczd2xpZmxkT2l6OWoxQUwzS2FaVnZCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4OTYyMjc0NzozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUeEZEelZ3U1BaNmdWczk2Zkp5VitERHhXbUFQdVQ0SHJsN1dURnVteHdYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTgxNjQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVsWiJ9"
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
