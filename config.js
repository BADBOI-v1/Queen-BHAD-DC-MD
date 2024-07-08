//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tnOCthZEhEaTJrYmhqSlNCd0oxYlk5OWJpTi9oa1VndUtqMWJVU0cxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3MzNDRuRU9Da2VYNEZvL2tSOG5TYXFockZKRDlCdlpCeGZZYVE2STdCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5THEwVjgwSmFLanRHdTl6aS9uRUdYQ3lmQU9jeUp6eDlXL2FnbHJmdUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTb0I5YUp5dWJXZDVTb2k4VTd5dmIzbmwyNm43Q1RYd2JKaUdteUtKa0JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Qc2hURXQxVDkxdE5lTGVWK25HbTV2ajNVNjNqeEdOKzdPZXFnbzJ0Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxYbFJ4THR5OGxTQS9YdG9YcG1sQnFTZTRrK1JpTU50VHM3em8vejdNVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV043Y2FzcjU5T1FCOFMxbEl1ZjZ4Ym81UHJFVTRoSjMwSWM2TjFoZi9VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhuM3J3NGx4ODJGTW52ekV1TmEwNTNaYldoaFhYU2JLUmpOZ1Z6WUZCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVkeVkvdnVDbEc1L0dkWnh6eUFmdmd2TW1YMEtoVlVGSmtySHVTMzFoaXZHS3drY00xM3UyTTc4TkYzeThVWkRBMGpTSnFESVJFMG1JNWgxQmFMdmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiIzSS9TSHlNb0FnVk9mdS9WUTdkRXh6WnhHc1lZSDlyelBGSTB0ek0xL25JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzUzOTg5MjkyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MDY3NjNGMUFFQUFCNTcyRDU1RTVBODlEQkZDNjdFMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNDM2NzMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzM1Mzk4OTI5MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREE2OTJGNDlFQUVDQjcyQTUzNkQ3MzM2NzlCQzRGNzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQzNjczMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVVVEZTA3OTdUWk9oNzdOLWVUSUVfQSIsInBob25lSWQiOiIzNzdjYzhmOC0yYWFhLTQ4MmMtYTUyZi0xNTkyOWFlMzFlNDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGFoZVNwcEwrcTFYRGZjUnJBNTVzOHZjT05JPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxqTVY1ajN4UzVuZWNzR21CbUwyUFM1MzFmMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWSFNYTDlQSiIsIm1lIjp7ImlkIjoiMjMzNTM5ODkyOTI2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIuSnV1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZUNyVDRRNm8rdnRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxWDJvaUROTjlmY2dBd20yU2JCOHZ2TlpLS0VQTnpxYTNKMmR0Slp5YXkwPSIsImFjY291bnRTaWduYXR1cmUiOiI4NHlpTzZLck5SSXdsNEk0ZHJCU2pRS1FVZUFUOTVqOGtySXc3aHplM1dVTjRVN3ptcHVSVFBmS05YTnlaUTRFUjJRZHJFcEFNaUlpbEljajJVckNCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNFhreGd1SUJhRzdzckNqNzFiYWZYYVB4S3Q3UzhsejcwOGh3Nlo0MUZLTlZmZFlNMzVtUjJhUWovMzJCd3drdm9BaFFCRjBFN05QV3U2dW9kUC8rZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1Mzk4OTI5MjY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkVjlxSWd6VGZYM0lBTUp0a213Zkw3eldTaWhEemM2bXR5ZG5iU1djbXN0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNDM2NzI3fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "233591856630";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://wa.me/233591856630";
global.userImages =
  process.env.USER_IMAGES ||
  "https://wa.me/233591856630";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
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
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.email = "davidcyril209@gmail.com";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.me/233591856630";
global.website = process.env.GURL || "https://whatsapp.me/233591856630";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
