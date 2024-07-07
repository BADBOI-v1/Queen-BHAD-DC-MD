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
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05ybEhjTURvSUU5OUxKVzNmL0tOaC9aWFFESlNzUGV0b0ZmeS9BQkptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGdmcldONDdHOUJsNDE2OElPajFsZitnNjZrb3A2ellzOW1KV2lxVmNGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSkdRbXBKcHBGcThRMEF5N01YWXhsb2RlUlViOWtyOXd3d2N3dWJUM0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6b1lMcHVHZ1IvTlZ2SXovaGdrWEZmTy9OWVVQS2VCMXE4WjAvNGZ1K1QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HaFNVSjdoQUJ4bmk4V3A2ZU1iaDhBWUVpTTVLcWNaaHpIR1JXakhrV3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQzSTFablJ5djRmVi96ZUJQNUhBZ2ovdEh0TFo2ZHZTNUNwTzJQU1hwWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV000Y1J3Snp3UWZSSG9qeUNvdEQ3NjViS1lwd1RIMFkxTmtiZVdFTjdYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOS93ZVNKa0tzMlkwajA1a2JudGgxZk1QaVArcFN6U0NqODdjZmtlVzJVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRwY2doWmpmZ1gxRXRkSGEySTcxUHNQVUs1U05UZXhWcmIwTFkrTmdGMllYdGwzV0R3Tytnb285Szlyc1VHdk15MEZENGxJWTQxMVptL3ZPM1pGa0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6Ik1ncm5IN0l5NURKZ21pOFB0ZXN1TlViM0hhU0k5K1dnVy9HRHRRS2YxdVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdzOFdvZ1VNU0Q2VVVlSjNvR1dPeHciLCJwaG9uZUlkIjoiMmMwZjkxYzItMTU2OS00NWFmLWEyNDQtYjBkMGQwN2E2NzRlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJyMnJIWVZ3STY2cXFVdG5DTHVFMDlkc3JsMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5aFRGTG00MFJOdENpVGlqQmRyOWVYbStvRU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRThZRFpCVDgiLCJtZSI6eyJpZCI6IjMzNzU3MDU0NDE0OjE4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQamh2TUFFRVB2MnFiUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0SHdPNm5lUWhzV3dMQXg0MGZkcUJYUVc2RlhWUjB0OFdaMDRYb2VJdmpJPSIsImFjY291bnRTaWduYXR1cmUiOiI1Y09PWGJNQ3NZTXMxZzhJUlFZcW1HeFRWb1N0MDMyQWRJaDJ5bkp4Z3ZQWHUybzN2bkN6RGc1ZmlKSGtMUTRjNVlmd1FHamV5eDNVQ0dBQnZpMHNBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU2s3Um8xNkZsSUY1QTBWNkd4Szk2WHoyNEVwNDUyOGdaUlhNb0wrbkFadk9Ma0ZxdzFRZUlaUTNwNGE3YXkvTzVxVzI5RkhDMmtHZTJsTHJldURpQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMzc1NzA1NDQxNDoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiUjhEdXAza0liRnNDd01lTkgzYWdWMEZ1aFYxVWRMZkZtZE9GNkhpTDR5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzUxNjI0fQ=="
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
