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
global.owner = process.env.OWNER_NUMBER || "2348082733475";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "composing";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBGM0RYam00RVI4SnFoNEh6Y0tjNUFaaTRwNWF3WkR0M1M0dWRId3NtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1krUEVpYmJqR3czU2drd2Q2OVBtZTJBeTlHS2plamUwU25LWkh4OGkxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRHVaL2l2b2JjRnYzb1JIR0luUlVrVG9oODN4SXlKN3U5aTQ2SGZ2bUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUcVRQbWFTZWZhZS84aHVMbDdYMWh1dlN0eTJaWUNqOXZJaTNFbGNMWWxJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIUFpXb1Y5UkNHVm5NaUd2VGV0UTU1N29DdFFxcUVXbGJuWDFPQjY5RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJObTZ0YW41T2RwMGJnbkREY3FZak4vNGFaSDF3aGhZczZGODZDWW9lR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhGeEJhWnRNVU03WitKeVBFRFk3M2dSTWFSTURPWkV3T0hJRG9TSExFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjE3cXRhMlZyVlY4WktldVdqOXdiQ3lVSjZ5QVVvOXNTbkVWSXZFUnB5cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU1Ni9wcUp3Y0did2NNWC83UjgreWVYaUhScTJXOUFQUnFiL3paejVDTmFyd0Nza1diRUZNZVdrOU5pZnY0RlhlNzE0eVo2WG9FSzhrUTVkeWtzV0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJ4L09UdEpkSE5KVVpKbXpZbSs5NXI5TFAvQjBmQ01DaHRIUmpUaGZjV2FZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5N1FHQWxoZVQ0NmNBMG1KbFg5TmhBIiwicGhvbmVJZCI6IjdjYTM3ZTdjLWIxYTEtNGRjMi1iMzRkLWI3MzkyYzRiYzc2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRTZheXg4NFU3dC9xWTFtVjNqNnl3UFhZSnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNGeHIrQTdpbERqdElsRDhLSytIeVAvSllRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldOOVdYSlpBIiwibWUiOnsiaWQiOiIyMzQ4MDgyNzMzNDc1Ojc1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcXF4YVVCRU9QT3FyUUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWZTZLcWIyT2gvTlVNN0dKVDNhWlI1V1lGbnFLNm02VTFNWVVKWlZEeFRRPSIsImFjY291bnRTaWduYXR1cmUiOiJYdjIzTEtnNHdweDRRQkRqVWQ0TVlIWGRqdC9yc2liVXpQZms2aFFWcktWeVArZWU0VVVGRUFaR2lHbHI2Y09wRUs4cFBvV1NoOHJiSmlPaHVMWm5BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYyswbEx6MnJrT2NPcVdSdlNHbCttZEozRE9sQUswY29LQVdhc2VNdmd2YjRTUTdtcEFYeHVzNVFKMy9jUGZ0Qm0vR0NCWVhubS94dThDcUppdCtQQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDgyNzMzNDc1Ojc1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZYdWlxbTlqb2Z6VkRPeGlVOTJtVWVWbUJaNml1cHVsTlRHRkNXVlE4VTAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNjI4NjR9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "      ©2024-2099 David Cyril",
  author: process.env.PACK_AUTHER || "David Cyril",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "David Cyril",
  ownername: process.env.OWNER_NAME || "Turbo Technologies",
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
