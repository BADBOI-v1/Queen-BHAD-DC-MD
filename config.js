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
global.sudo = process.env.SUDO || "263774918784";
global.owner = process.env.OWNER_NUMBER || "263774918784";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "263774918784";
global.read_status_from = process.env.READ_STATUS_FROM || "263774918784";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEEwTFdueFZNK1M1c1ZPR1BYVlgrb09wc0FQWnpkd1M5QUpuWlJ6bXZGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2ZsQVpRZjc0eGJ2NHRwQUJHT1ZBYXEzZDJHVXlSZmdjc0tRbmN6aW1Haz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR0lOZTdKNXROR0pqTUNQY3ZGZXpxZFZac1NMaDg4SGl4Qk9uR1lQdlUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ29PN1hvcWRNdUJsVisvckwvWWRjL2hCbFVueWhia0VEUGxzbFcvTVNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BNGpOVmZUblNFcVFnSTNDZ094bWpueDRZQVlrMGpGeitDckdFSm9XbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVocGw5VHg4dWFWMWFJTVJ5RUZNQ1ZZbEwvOHZoYk04TVNhRFJrM0ZsM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ004UUROWkJxSkJMZXZuRnhHSU4xVFRPWkpuQ2hhaGNuS2p4emx4UDJFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDRsODFZZTM0dUsrQldPNVZxVUJmdHJHcmZSUlh4SGJjeDBoRmxIZ3NRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVtSVY2MW52Q1AzMVNWV0RHRUJROURSTEF4YUVYWE12N255S2t5bUp0c0hvOUVhOGVQMERRS3RQVDZtckgyK2VrbDNmMWxPakNqaGlSUTB1M2ZueWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiYkVaaXVQZEZhcW4wRmxFSmtFQTBQRmVHeEhHd1hZWGMyMUk3UlZJNXptWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZEdLUTlrYWpRbTJUa2M1T3ZDT3F6dyIsInBob25lSWQiOiJlNjZhMWM4Yy1mYTM0LTRlMGItOTc3Mi00YzMzYmZlNWY3YzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSktTM0pVa1VYNWx5eWF0d0didzhwVGhlUW5zPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZHUllWcFRTWXdtS3g5OHJEa0xJRnp1S3hqcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQM1FKSzY0SyIsIm1lIjp7ImlkIjoiMjYzNzc0OTE4Nzg0OjE2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbUM1OVVFRUszMWxiVUdHQkFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxL2x0RTh1MlVhZ1cxZnp6SjdxWTFMM3c2aFJkUGdJTHNQbmVUSXRtWjBBPSIsImFjY291bnRTaWduYXR1cmUiOiJkcE9QWFFzdUZ3UEUzeW8rZXJZREJnYk1MNjJNdEl1ajc0UEd0Zk9JNS84QkY5cnpZL2lDY0ZqRnM4b25wQnhXbHhCRk9RTS94VlFhNWovUzFqdzNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRHZvT2VueC91WFR0WnV2Zjg5M01tQ2dodXJpOEd0U3ZVcjJIL2JJQ0EvYWJOdDV1N2R2L3V2aHFhdE9LV2g2UUFiMjB3bnZYRmZNRVFqSGt4TEwwaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzQ5MTg3ODQ6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXY1YlJQTHRsR29GdFg4OHllNm1OUzk4T29VWFQ0Q0M3RDUza3lMWm1kQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjEyMDg5MX0="
module.exports = {
  menu: process.env.MENU || "1,2,3,4",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`😎👽",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A😎👽",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Mabhosiedu RoynJK😎👽",
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
