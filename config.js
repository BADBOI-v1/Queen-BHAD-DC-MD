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
global.owner = process.env.OWNER_NUMBER || "254742177417";
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
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtkd1VLZWVNdFJzNDVTZGxiUVRVUW1GdGFYMFdNYWtnZGhYTThTamsxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnUvWnlTS0VYYVhNbDR2a2xUWXhBWDJVMll0clE3Vld1cVhnaVJLOXIyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRlVwVks2TEVSK09DMkZldlB5N2dYb3BmODhaOW5qVVJZOWRwaWtkRDEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoNWt6bkU3cnlGUk5XQ3BUb05EZ2JUT1JKaFFURERNeVZpYXFWeHhNdm53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDbkU0TGhmdFRCMDNIVzhwdUY1R2Q5bU5NdDFtaWFhYXhZemJwWXJUVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhlRWM0bGZ3b1I4NVhQMDh6Z2d0a1l2aWN1SlhNUi9rQ2hqUDNINlM1U3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFXZ2x3bTJMWUV6akNIQ2xhYzRqdnI4YnA2a1Y5d0ZxdGVKa2t3TmxuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVFyS0NhSWp2R05zTTJVTkRxY0RwTGhYT2gvTGppVUNIVTk4MVc0RVFRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBxRU9BM0t2di9SU016RVJJQ2ZYYTZzNEd2Q2ZIbUhyTk9HSzVibDlBNStYRG5mcHRsb0dKaUFFZ2tJWC9vc3VxT2t1NWkrK1JCRDZSMFVJanJGemp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJ2MHdodTNoVzJYU1orZkhab0IyQVlQWnBRZm11Z2VtR3hxTnJ6eGtXU1lzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0MjE3NzQxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RENGMkJBQzYyOTRCNUFFOTI5QjlDM0MzRkRENDg3QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNTg5MDg2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NDIxNzc0MTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkQzMzk0RjkxRjNEMTY0RTFCREJCOTE2RkI1ODkzM0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDU4OTA4OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUGMwaWZaMWFTYXVyNXItSlJJOTJaQSIsInBob25lSWQiOiIwMjAwZmM5Yi1mYWZjLTQ3OGQtYThiOC03NWZlNjk5YzA0OTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGZmUkkwbmxSVzQ0b0VrcGNEZEFQNVNvZldrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNXMU4rODlIYUtxc0UzTndmUkc4UEZyRm9oWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTQlo0TFQ0RCIsIm1lIjp7ImlkIjoiMjU0NzQyMTc3NDE3OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU23DuHLDq19racOxZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZpNzVjQ0VJKzJ1TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN29pQllxTWphUytYWFlBM0R4cytwRmlneEl5emRaRUl0QTk2RmR1aVZRcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiajdiY1hFaFJrdXBUUmpYVDhxQ2NoSDZEWk5yNGRGbVlQeUoyU1g0QnZQMlVPcjJQaEU5cGVqNEtxSXE1ZGZTL3FjQlNyTTJwKzRMM2swWE9MOXBzQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InNzUGlVbEI3ci9tM1JQR1c1am9DUkZFSkFRK3REWkpEcVpycm8wNG16b3VyVjMzdTdTVkhINHlvZDIxcXJvbVM3SW1GQTZMT2pPR0pEdG4zbkNYYWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQyMTc3NDE3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTZJZ1dLakkya3ZsMTJBTnc4YlBxUllvTVNNczNXUkNMUVBlaFhib2xVTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDU4OTA4NH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Penuel",
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
