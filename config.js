//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JIM3RuT2hiNWp5cEROWk9WOTVsZVBZVk5XSlVMRnNoNFlERmpyOU8zcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDdWYmVkZ3lOQlM4b3VNeFJTNGgyTGdpODd5WkEwMWxGTVVSYWNBTmtsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT1RHNXRFalVibGlZdTZXVnpCYTd3L2FXa1hXT3cyZWRldEdTVVZkL1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VnN1ZWtHcEhHWFhNYlJxVVFMVnF0Y2wzUy9Ra2ZDcHZ4N1ljQkYyZlZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLcGo5L0lTOExrREFjM25JR2paR20rSHRCT1NjclNYL0RBTmV1dTlhbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcvcXpCMDVYRVN1NTNzQVpPNUFtb3Bidy85WUM0QXpXZ3B2NTIrYkVLelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FFaWF5aVVud1hFRGlDTkVyL3BZTWRTcUVKdmRiVVNXeFRZazNSdXJrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibS9obS9QTm9seklmckpWSFN5QThOL2MweTBCT3E4YkZwSzB4NDI5Um5Icz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIvTjZ4VHZKQzZhWnE3L2FXR3R6QzQraGEwVkk3eC9BcmZYRk94bG90czBreEdsV25tUXhtSG85NnN1enJqVWtSUHV2QWJUU0dUb1FHeVVKQkJHbENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJYMytBL2t4RDRONUFXWVdUa0I2VUFtaFZoVVlRL1hMVmx4R2lUNisvbFdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWX3B1ZE9TZFJ5LWZyT2VKSEYzZUx3IiwicGhvbmVJZCI6IjM5ZjI1MDMyLTk1MjctNGMwOS1iNmIxLTkwZGI5Nzk4ZmNlOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS2ViSTBjTHA3YWJFM0xBc042TkdibGJ2ZWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekROK25PcVY4Q3ZHak4rcXlFaW1raTFDWUlBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1NWTRYQlBGIiwibWUiOnsiaWQiOiIyMzM1OTE4NTY2MzA6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiMjMzNTkxODU2NjMwIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMmQ0b1FGRU9TNnNMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGcFlZeGx0S3RmV1B1cUJ5THVCN1U3NVg4Y1BzZU9CbmxLYlU1S1RVMkNnPSIsImFjY291bnRTaWduYXR1cmUiOiJ2Ti85MlFhUERpQ1AxMThMaHRaL014MG4vNW5wYjVBdm5PQjJ1K2lMd1FuN1pHODVyL2lTbk5DcUp1VUlrdS9QeXg0RlVtR29heEN5Sis2ZTZ6d1NEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblNESFBNbnhtdGtBUElZNitTNnREc0x4NzZMYURuU3NsRHowRnJCNzhBMzZRT2Rkenl3T29CajVCbWdyMlRURnJhbkNCaG0zUjcxT29pUWhXSnUwRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTE4NTY2MzA6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmFXR01aYlNyWDFqN3FnY2k3Z2UxTytWL0hEN0hqZ1o1U20xT1NrMU5nbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ1ODYwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFILzIifQ==";
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
