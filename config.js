//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFxQkx4NDVpNCsyM1F2VzRpQkNNeTZXK1MyZzVHbHBPZFdNRitlMTIzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3dKODJTQWh3cEdBcjBKcGVFeDIwTDFXZlhLMmF4YTNpVTlsT2pLWWcwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UEJ0RTVkRFdhSlBoMXAreXZtVm0zWmo5cDEvN1lKNHowWEhySVNjRDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSWwzZHM0bk5XMFZpYXdwS2phbm0rTlcyVnk4dzdSV2w2RG1HejduVG5FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFGY1d3TGZrdlpIZlIrWG5ZdzFZSFNoMEs0Y3hIbEtrSGswOU1iNHlLbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF4eUEvdk80ZWsrVkFFK0hQNFVEelpkYXhzMTlJWmNQS2ZCYW5SODlWMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9Qa2ljdTREdWhuOTFiMHk1V0dTVEVmaytSWk5ZWG4xcUhvSTB5b3BXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2RlRXJOWk9KLytmSzVJSVY5S0NuMFVQNklCM05mNy9VdkFhOTNNdnBWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFyUUdybGVLN1Y5UXJib0tEOGtjbElxWU41TkNRZk5DMmdzcEEydkFFa3M3dlBHanVYb3JBUVdPRUdOR3NLZGxsR3MzU3IrRDVlTisvcGRwY3h3d2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IlM3dUtvTEc2OVFhS2pHTFdyME5pR0sreWlWeFNFZFNkUCsyb2VoQU9Fbm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyMjEyMzgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI2OTA3NkI3MUFGQjIwQUE3RUY0MTU4RDI3QjQxNzVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxOTcyMzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImEyRzh1N2ZoUS11SGlrUExjRW9yc1EiLCJwaG9uZUlkIjoiYThlODhkN2MtMWEyZC00MTQ0LWJhYzktOGQyNzQ1MmY1MWRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik42RVZjN1FkZm84WnR3bU9sWnprdEZuZndQUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSkJUUGV6WDVxdkhneDNoaXVnMFYrVHk4eVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNENGSFMzVkUiLCJtZSI6eyJpZCI6IjkyMzE0MjIxMjM4MzozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmOIPCdnpwg8J2ekyDwnZ6gIPCdnqIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uWjRvMENFT0hBb0xRR0dDUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRYcGJ3K3lxLzNyR2kyOGxKSVNLTzhDc3ZxMktYYzFaSlU1MFZyTkpiVnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitUTzdEazIyVHFqc2FZL2d0Nkk1UHdRVjJWUjJ3QllXYnhzK1VNanh1eWMxRDRTZy8xellpUENXeTJSN20rcTgvWW1MTjNiVm4vUnZ3NUwxQ3NjUkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmNk9Ed0FjZmNTVDBLOS9FVTg0VWlOMkNWRWxxMFlaNi8zaysxbnZMMW5adndCbitWeHA1UnBFOXJBbnZKaFJIL0NyamVFbXErLzBabmI0MFBQUVBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE0MjIxMjM4MzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlRjZXOFBzcXY5NnhvdHZKU1NFaWp2QXJMNnRpbDNOV1NWT2RGYXpTVzFjIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTk3MjMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJyeSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/de395cdf0fbca8605f964.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/71bf5ba1dd522a6ad8579.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©SNAPE-V2`",
  author: process.env.PACK_AUTHER || "SNAPE-V2",
  packname: process.env.PACK_NAME || "S N A P E",
  botname: process.env.BOT_NAME || "SNAPE-V2",
  ownername: process.env.OWNER_NAME || "Tamseel Riaz",
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
global.appUrl = process.env.APP_URL || "https://chat.whatsapp.com/Kz2z5hSFpab6x3qsto3JkB";
global.email = "akhundtamseel913@gmail.com ";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
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
