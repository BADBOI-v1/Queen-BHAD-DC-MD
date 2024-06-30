//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05YTWFscDJ0Nmp4enc5Zmc3Q0ZYVXpWRXRKNFI4WDl6QlJrZDV3eFduRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTytCODdCQnJjYkNlR3grQ3llaWJiZTRXWE1ZaXhCZS91bHlDbXpCRFMwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRGdGcXV6YVBIckRFUUdxaFJMSHZoaUMyK0xzaHhYeHlFVEJPTU1JYTI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQUkJLWG1qdzRIV2xzS1JpUVRJYnF4SWJZMXJ2eG1SWHRLdFNEUTZHQzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlBUUZ3R0dtS1F4WC9xNFNDQ1pRQmV0N2IvSHNBbzJjMTF4SkRCZi9WVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6dUE0Mko4d1ZyenVTbUNLLzYvQzRhaDNYL1ZVMU8reGZ1MXZjV2FvUzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEM3eGUwSW4wbnB3RE1wOW1kSENiK3E4RDYzQXM4MEt6cStKRHJ2MGlWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2w5ellKbDBBa3FBVjU2UTM1YnZmdVozb0F4NmloREYvMlhyS1JZMkdTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBYbUhxaHNTcHd3ckJYc3V0NE4vS3NsT1JtY0tFWlJiRyttQnhNQjg0RUdmKzFIVnA4bm11MGhIV3g5QXFBZjBHN3g2bWlnMG4wREtvY2R5TEFSUGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6IjlMbVo1VW9tcFUxYlpLMW1mQjh6RE9SeWpIQ1l2Ui9mNCtvcldXZGdsREU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0NTE0ODM4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNkNGNTk1NDJBQ0ZFMjc5NUQxNTY0M0Y2MTlGOTJFMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5MzQ2NTczfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRX1RNTUl6RVNleUlhMjNkTzJhSDNnIiwicGhvbmVJZCI6ImEwY2FhYjIyLWE0YjItNGVhNi04OTIxLWE4ZGVhYTkwN2Y1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eTkwSS9CR3ZuZ2NqSnQwM0lkOWhEUEJGaVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTRYcm1BcmRlNmF2WnUxM2d6eE4zWXlmcW5ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhITUJQRzlIIiwibWUiOnsiaWQiOiIyMzQ4MTQ1MTQ4MzgyOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6Zi/5ouJ57qm6I6rIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMmx1dGdCRVAzSzdMTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVeVRLS0ltMUhUMEFIbUM5S0VuV2lVbUEwd1RCUnRqT0s5ZGhkNzgydm5zPSIsImFjY291bnRTaWduYXR1cmUiOiJ5NXZQZzA4cXB2Z0VYUVl5RGNXVHFlTlJSMlFYNTZ5ZWIzQWdvU2lUMXJmN1QvcVBpVXZhSkdtUjhjYUJwWGYwZ0xBaExGQmw1eVJhL0VrenpqdWhBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVNvT0RyT3VhRHJHUVhKRDZxaE82a05lK2ErS2RoNnZaS2xLMWtNc2ZIdmU1VjRqbklTeVo2UHFpK29ReFpQeHBobGxxbEFhem9uM0pWLzRqWFpnZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ1MTQ4MzgyOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1reWlpSnRSMDlBQjVndlNoSjFvbEpnTk1Fd1ViWXppdlhZWGUvTnI1NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTM0NjU3MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGb1QifQ==";
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
