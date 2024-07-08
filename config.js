//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "henzymic@gmail.com.com";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "Micahhenry@cluster0.uuwrp6u.mongodb.net";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "null";
global.gurl = process.env.GURL || "null";
global.website = process.env.GURL || "null";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b8e333e4576ebeb4efb98.jpg,https://telegra.ph/file/384ab6d5455e8f11630f5.jpg";
global.devs = "2349137163860";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349137163860";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/4abec26fa18b4a68ed1d4.jpg,https://telegra.ph/file/b8e333e4576ebeb4efb98.jpg,https://telegra.ph/file/b6711b4ccdba86969aa76.mp4";
global.waPresence = process.env.WAPRESENCE || "online";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBOQ013NDg5aUZoTE9LOTRCQXhULzRYZ0I1b2Y0UHljcWhDR0JyL2hGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHRMKzFpUEJ1ZldGZ1REQVV3allNYnhiNkFVYllTREVuNE5kZWMwTEpFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXEyNHppS3cyL2IzTWZKcDQwVHRSWmlramRLSG55VlFJSmpaNzREV1gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZclNoNGtWRjFOTEdsM3I5QjE1bzFwRUNjMUt4dlRGV3ZUdGdra3lyUUFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IR3lNWlhGaGh3QjF3MzFQYUo0Sis3M1M2TnlEeWpQamtSeit0U2NDVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhWSldtbWlWT1FQVjI2M0RyRXEwa1RuVDBDWXAzaWl4M0dXSTJud2dpMGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUp5QU4vUzliYkVXQ2duRTkxUjlJS0tNU0l3d2swb21iVmVpR0FSSU0wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazVsK3BPcnpiM3FHQkNNSldMTHEwR2JtaEp3NHVzTnJHVWQ4a0dDeHJoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdrL3Jac2orOWpIUU5Yd2JKU2QrMnE0NjFlVy9qS0pDQnVRK2hsTmE4Uy9mVGVSS1FNNllYaURxYW5ZWUU4c2NhUEhNWlY3d0R3VVR1SDNHWTR3UWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6ImNFRUlVTFRwMXNybERnSWxBclROdFAvNi9XazVqQ0xPYWJQaE5rYzRxLzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJzSHZMal9zVHhhUk5UX1hzS2pzb3ciLCJwaG9uZUlkIjoiYzA0MmQ0MjgtNDJjZi00MzI3LWJmNGMtY2I0NjhhODIyODU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN4NnMwUmp6MTRPQlZhd0NjRVZLN1hyZjludz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxN3dHU09IRUlKK0ZTM2ZIdjBkNnFGdEczSXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDJRQ0FFNVciLCJtZSI6eyJpZCI6IjIzNDkxMzcxNjM4NjA6NjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oC7fkhlbnp5fuKAuyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRoczlBRUVNM2s5ck1HR0R3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQW9manlVbjdBMCtPcWFaOUNSeGFOT0tZaGc4ZHNOZlNTNUFFcWp2S1pHaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQmFpcHhuc08yRHdyMENMOWErSzIyeWVoUndoR2NKMnRSWlVyQ1JvcTE0dnQ2WTlkRG12TXA5OUFIWXBmWjF1OStGMnU2MndNQUEvOUFtTDRDTVhiQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjVVN2xVWnVVS29ScDhkK0R2OE5tRm94YnJNcjVwcmpUNGsrWitKaXVjVjVjTERXWlBaSnJnQmhJZGhwNkROK1JXZDdrSU1tOTIrNEE5VUhDd3RkN2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEzNzE2Mzg2MDo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRS0g0OGxKK3dOUGpxbW1mUWtjV2pUaW1JWVBIYkRYMGt1UUJLbzd5bVJwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NTEzNjkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQ01BQU9FSiJ9="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "      ©Henzy_vibes",
  author: process.env.PACK_AUTHER || "Henry micah",
  packname: process.env.PACK_NAME || "henzy",
  botname: process.env.BOT_NAME || "Henzy vibes",
  ownername: process.env.OWNER_NAME || "Henry micah",
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
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
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
