//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0M4dnBYMklteXpZRHNSWHFUQjhoZ2xKeFluOGw0L2o5TDI4UEljUHkyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTVSNk5ERWhNWVFmdFM0NnFGcUgrejRKcEdBYWthbGw1azJIWEo2QjUzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TFpEZHVabXNSSFE1YlJ4R0VCeWNiVS92ajVxRWpodW9ScjZvUld4ejNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKaS92SHBFblVyZExMeTVFQVBndHhBOUVsN0MrT015a3JTbkcrYlE5NUVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGZzRGc3ZtMnJFemtqU1JmUXV2NzRkNU9rUUM3RzV1blA2Wm9wSGxMbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc2bmVpaWhJOW5qTmVsWnpzcE85SVlKdzhYTmIxbHB5bGRMcHA3ZnJHMWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEYrdkpZYnRhWlR2RDRqeHRhbk9DQmlYV0FDbzcwZVZtRDBVZUxFR3NrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkpKclF4U2xGSjlic042SXFiMk85N0phRE83azdnVkgxaXl5YmJrbkcxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF4TVplcW8wb1k3U09IUUJRdWpuVXU1Q25kY0JoTTg4SUhZQlpJeG1PTmVLWStlaVJlWFdNdmhkQ1ltOVhrcnN2TWFScXI2a21SNHV1OFIxUlJkQmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6Ik9tVnZRWmdkeC9DOGk0YTdXR2dmbVRYZ1pRVGp2TzEwWlZYWkRKV0gySUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0NTE0ODM4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RUZBQzI3QjlDOEJGOUM3MTBCMjI1Q0NGNjgxQjBFMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5Njk3NTEwfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0cEs3UW12WFRyaXZHR1Z1YXBNSUdnIiwicGhvbmVJZCI6IjJiNTkwOWViLThjZjItNDIxMS1hNDdlLWQwNTVjNTYwMTU2MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERlUyb0VxQzBRUHUxMzJ6Z1FIUysxUk8wYkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmtzeGc4cnJqVjFOVFZydmVOZUM5bWVINGtJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFBSFM4M0tDIiwibWUiOnsiaWQiOiIyMzQ4MTQ1MTQ4MzgyOjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6Zi/5ouJ57qm6I6rIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMmx1dGdCRU5XQWdyUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVeVRLS0ltMUhUMEFIbUM5S0VuV2lVbUEwd1RCUnRqT0s5ZGhkNzgydm5zPSIsImFjY291bnRTaWduYXR1cmUiOiJEc29oVk5uL2I0Uk1pN0FKU1MzMEJ4cVBZT0kxZHAxWk1xYzBXaUloRE4zMllid1RHTzNSUEwvN1B5dUd4ZnJHQlhweHlzY2lzWFFFTzdvcWEwUHNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQS8veFFFbHhOTmFjbktNUVg1bTJYTjgwci9jWFFFTDVsUFZHM3hiRmJ3OXZISzlycUxUMGRUTmYxZVNaMXBxTHIvdlNNZFBZQlA4V214UjZVeUJ3aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ1MTQ4MzgyOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1reWlpSnRSMDlBQjVndlNoSjFvbEpnTk1Fd1ViWXppdlhZWGUvTnI1NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTY5NzUwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGb1UifQ==";
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
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
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
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
