//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || " https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/H4qeXwa.jpeg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234906628353";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExtM1NaU013K1lDVEdxZkFaditTMXM3Vm5MV1ZZU2lKTmw5V3RBZVkxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1F0dGdZK0JWenkxWWNhcytEU2ZGVWVINUFrR3lHRXlwRC9lRVo1N3RIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT3JVaTFSRlZPdFNlT2Z1Y1NZVjBJWTgxK2hvZ0tzT2o1R0hoSE9iV21ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrYjMwekJzSGpUb00vV2RSSWwzZU1iT2sxbGFLbElmLzdneUJNV0g4ZVdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCNDQrZStzWFZSUXQ1QWhObHl5NUMxaUwyWlBOWS8wVTJFQ1dEOXhJR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwQWY1YncrVFBpQ0dNZ0crQU15Y2JoaFBvWi9XS2ZkZWRzNXBKTGJqRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhCSENPeGIxNnpwa1JKZytjSTlhVEt5QzFkZFBGSkIzUy9ScTNPOUkxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW0zR1UwZCtRRDBFc2hRb0JzeGVNMVd2WFhEcTAzamhDakFSdmNIMHNoQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlxeGRMRmJUeWRUTjJySkIvS0Q1cnN0ZTlhb2RZZEpDZFRjZnZSODZsUTBFbkFCMk5vQlAxaCtTZU5tNGFqMGZLUlNLdHZtQjhnbFM4SXkwSk45M2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IjNYZ092aGQwUjlKTnVhK2V3dGhMNHlnalhxc0xqdkduczFDcUhsTEVNczg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVTalRwbjMwUUYtT3QyR1dJRDNaa3ciLCJwaG9uZUlkIjoiNWUxNmQ2OWEtYmNhYi00ZGVkLWE0OWEtNmU5NGMzZTMxMjczIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhEZDhPSkF3UnNGb0YvRVV6ZGg4dUhSRW1hVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKN0V3ODBBY2JCY1pYUmx3WTdNcXd6K0U4Wjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlhaRktGRVMiLCJtZSI6eyJpZCI6IjI1NDc4MjU3MjExMDo3M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYXZpZCBDeXJpbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHV4cWZZSEVJU1BtclFHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid3l2ekFzOG5uQnN1S0ZSWGhKYmNPTnRSZldiQ25XbjVEZmw2QitrUFJYZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2tGOW9VU3kyTE0xUzVKSjlaYjBkR0ZEczd5MTdQZXVVTGNSREhIZVF0bDVqYThsclRQQVRFY2o3aWhKbkdBRGZMOWloUi8va1psRWcyaURSMEtNQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjZYa1hFV0E2TXBiZys0ZWs2NTBHMWVrOXZoenk1SDY3S0xUNGxzWkhhdFo5MmJIZ1UraGxzRHZoc2NMLzkvQW1PM2p5UndwTE1ESGZnbW9HRnZ6bWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzgyNTcyMTEwOjczQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNNcjh3TFBKNXdiTGloVVY0U1czRGpiVVgxbXdwMXArUTM1ZWdmcEQwVjQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwOTI1NjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGNBIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "      ©2024-2099 David Cyril",
  author: process.env.PACK_AUTHER || "David Cyril",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "David Cyril",
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
