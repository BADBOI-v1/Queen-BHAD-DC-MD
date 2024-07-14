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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://immanueladebayo302:Xx9KSHbTRbYTZT9W@cluster0.zca9hz8.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "2349072642884";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349072642884";
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
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU80ZWh3dXoyS1Z6R3ZDUnIreWJVSkoya08ybXJISlB5THYrU1NrU1pXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmZHV0lyeWNqMTUzUmZqUmtnbUc1V1JGeUVDYThDSGt2SUxXS0l4NGhnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TFppaWtmdjVleGlJZHZvcnJQcWEyMDluV0NNRGxaNS8xUDV5VkZpSVdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxcXp1UTUvV2xJaDVJM1VnY0RWTmJra0JEMjBsSzFwR2dmcmkxdHhNYlNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKc2N1dWIrTHZMYVJDbGp6dzZvTU00aU8yWUhVdTFOdU5DMitPRE4rbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRnQnA3RUU4dkMzM3E5N2tUaWFjUHFTckwvN3Y3Njg2Z0M5QU1jd3RFQ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5RbWNJNjNBa09seTNoK21FVUJ5MU14ejBCRFZxU2dYQ3ZkQXBURVJFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWFjZ0pQNjVueGZiYnRWOURYT3ppQlNCZlFscSt3dVVsMHdVODNSOTltaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhlYmNkMGJKZVdRbDVuTkh2TWJpd3prMmwxa25NKzJZM3ZEZmN5cy9DblZrd2Y1Yk5GS3UvdmJ4SzZKb2VpRzBIK2lteTlhdXBMWVpjQlRuN05lMkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6ImVINFVPRUdYcWt0K3FaOHpWWXd0YVJhUXpyQ2FBSFEzSmgyRWdkam95YVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFHaUtOZHd3U19lTTRlR2ZDMUhrTUEiLCJwaG9uZUlkIjoiMDgzZTRhNjktNmI2OC00ZDM4LTllM2YtZGRiYzhmMzg2NGRlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNyWXZjZ08zeVRxVVlQOHRub2NMUHMrZ2JoVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQm9lSHphNm44M0kvdDVCZDBRMEFLdWU0Rzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU01HTTRBQjIiLCJtZSI6eyJpZCI6IjIzNDkwNzI2NDI4ODQ6NTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLTnRhQUdFSkQyekxRR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJOaXphMU9oNkhEeUR1UllubXgzeXpiaWU4VjE4Y1dLaE9VeEw0ZTNCem89IiwiYWNjb3VudFNpZ25hdHVyZSI6InVXZkRYcm5DcUZ0MGpMQVVaTllGb3F3Z21IT1UvVW1KekxWcUkvUXJldWc4dmlELzVyMXdNK2Qxc3BFUXIzckNXM1VnT20zaThxOVduTHgrRmU2dERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5Mm9BT2Q4Qnc0TUtrMG5Ea1hjMlhEVm5jLzIyQjIrV3l4TW5DSTVSWUw2bU1JOVNmRlkrbmJiZmVpNFlmZFhzdStYeU9UTW1OMWh0VEtCeXVrQ0xCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzI2NDI4ODQ6NTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3pZczJ0VG9laHc4ZzdrV0o1c2Q4czI0bnZGZGZIRmlvVGxNUytIdHdjNiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDkyNDk1Nn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "EmmyGold",
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
