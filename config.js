//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "markbrianmwas@gmail.com";
global.location = "Kerugoya,kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/baby-droid/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "254705486402";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254705486402";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254768925411";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "254768925411";
global.read_status_from = process.env.READ_STATUS_FROM || "254768925411";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NmMW9QbFJPVmwrR0R6WXJETXd2eWtPUHBjQlhiUldqZ2liU1o1QlYxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1V0S2xPZHBUTWpPRXZXblllQndjVFlPa2NDTWRFc3ZvaGdUVnFnVDcyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R0pDZUZLTmxBUEtDL01ha2t5aHlvaEhqdkVPSEg2eElCUFdseHU1cVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dnRnQkVGSzBQdHlGYUE1TmpCVmF3cDhCWjlHamZhd2FQNm11MUlpS2w0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHTzdFN1pqb3U0Q2Yva1BQQ3N5SHRBTXBOZEFjNVR3Vjg3YTNBL29uRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgwSUQwOEYzbnVJbk5yM1NZMCt6ME5WV3pLckxyZk83SlJGSmJiZ2RwU289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNqUjJmSHlkRU4vSFIvMDhGNDVzNjNrcWU0WWVQRHprNUhpTDVpbUhuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDRnMklEUGdTL2NpaG1sbFNHNkdnamNYRDBxd1RRV24rK1dMWllzVFpRRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDT0J6ZEFzaVZpYlljNzlJUzB6cWQ4eGxsNlVBUThlMmlQZG5TTEpQNWVVZ0d4M2s5RmlBdFdhVjlDdytGeDNQeXhMSDdXVmFhTHFLUDhQUTFHUmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiI0aUkxZXpFNFZ5R1djbDl0REdHSXBRMEhjcmE2eWF0MmFjb3lmdk8xRnRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2ODkyNTQxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNjQzMUVGNUVEN0ZCMTk3MkYyODJCNkY1QUUxNjJGMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMDI0Mjk0fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2TF9BV1BMWlJZU19YVXFVa2JXa0d3IiwicGhvbmVJZCI6IjcyN2UyY2ZmLTAxNjQtNGVmNy1hNWFkLTZjNjRmNjZkYzM0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOEdieUxKeXdQRTl1bmMrSE5aZVdWRjM0VmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic25VNzVTN1p1Y1NBRXl2UTc5akpTSEE5Z2RZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNZOUg3U1BQIiwibWUiOnsiaWQiOiIyNTQ3Njg5MjU0MTE6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYtNiq2K/Yq9mKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV0Jtdk1FRUpYKzByUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsVExNb05CSnpGSnlHbDBmejA1ME43UlRBcXd4N29KaC9mcnhBZ2g3UkJvPSIsImFjY291bnRTaWduYXR1cmUiOiJGTGVYMWUrTS9YMkN4Y2VnSzhOK2hnbFVTL3BFazgra0k3cDl5QmpKbURpQXNwdzhCdWp6dUR4UFpLeDR0Z1JaOXBueXRpV2Q3eGI0WkZkMWVFMVFCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQm1lQmFtQ1U2S25kZFhsbTZyKzBhYVY3TVZ4WUtRWG42Z3VBNXlSaHd2R0tDdEl4NXB1U3pYbVRYblpNSG4ydU0wSEVaU3ByS1JJdDlVQ3pPZVhEakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3Njg5MjU0MTE6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaVXl6S0RRU2N4U2NocGRIODlPZERlMFV3S3NNZTZDWWYzNjhRSUllMFFhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMDI0MjkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFETyJ9"
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
