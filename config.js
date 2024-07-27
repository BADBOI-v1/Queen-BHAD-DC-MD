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
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUllbThMT3lQT2JqejBsVjJTeXRFNDNFcS9QQkcva3RqZFRoblhyT3ZXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTBBbmZDTkluNWNTWlpDaStmTFB5bGtXOEZyLzAra3d5eGVGU3ZnZ2FEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Tkw0K2pDSTg3YWNCY0ZwUzRUSWt4bVI5RFBPM0xES2VteCt4WnpTV0dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6Y3o2OC9JRzlSUUVaL1B0QWRKRlBXZE1BNXhqNjY0K3ZmNmFkK0Rhd2tJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPYXRvaEVXQ3FNNGpwNVNGaHdVaGVDcTAvYktMSjhFTExJME9RaHNEbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZTMk9ydXIrOFdMMmlGNTBqWHdEL1AxTEhPdVlIQzhWWXNxYkRtcHpFeU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhLeXhhQkQvUUFVS3JhZkxTWDlXSzU2b1dTUHIvZlpwZ2t6TU9tYlFHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDRnS2psU28vcnNUZWdkdHBIeFZaTEd3eUQzWnM0dFBRWWN5M0N3RVpDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIxNlVzZmFSUDRkcU9rVW81Y0Z5bEdPQVpQQTJoaU84MFBJVDlFS0g4VGJVSStsUnpxOTlzN3FqdHU2WDI1VlZYOFlUMEE0T0YxNmkySCtsSzhHcEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6IkpOdWdoR0Iwa1JUeVVxTVFBM2NyNkt5NzhGQ05NUzJ3TzdFZUdIUVBHV3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMzEyMjk5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRDhCN0U0QUZDRjVBMDgxODBBOEI1NjJBNkY4NTQwOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDkwODAxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtQjIwVURqR1RveWhDN2FEZDRMQTR3IiwicGhvbmVJZCI6ImMzZGRlZTRiLTc1NjQtNDFjNy04NzNiLWE1ZWJmZjVhOGY1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQnZMclpmVEhHM3hYYUt2d3c1M3RnQWpEbXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFR6a20xYVZaanRWVU4zZVI2QVQ0WWhTUUZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktUUUVIUTZGIiwibWUiOnsiaWQiOiIyMzQ5MTIzMTIyOTk4OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJBUEhBRUwgUVVJVCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnY5MGNrQ0VKNktsTFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickZoNGFlaGk4NTY2RTh0OEd3V3Rvb0NWdnI3VU9hWm5JQWdzZDE1TEF5VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2duZWExRWpuWHVpRTlvc2VzQnpRMWRacVBEUnBKVy9pVWpheU9tTkxBbGZQMG95b1JIRjVLSTQrODhQNGQ4RDFTZVZYM1NlUHc5bXZVVWZqSUFXQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxhdnpWdEU4RWJMRGVXbVRoYlR0eEhPa0FhY3pramJoejk1VzVCV3FrTFFuejlWVWhJbXNVSVlWVFV5d0FJTHowZ1NBWmlTTjFZMGJOZll1SmtUR0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMzEyMjk5ODoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJheFllR25vWXZPZXVoUExmQnNGcmFLQWxiNisxRG1tWnlBSUxIZGVTd01sIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDkwNzk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpGaCJ9"
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
