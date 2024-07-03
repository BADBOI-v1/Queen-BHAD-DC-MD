//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUg3TW5OZEJHeTIyOGZMdU1CTytIRXVwSnNtRXFsTCt2cHBFVUwwdEpVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlJ4UG5tOEwreisvYU1nN2pKdUEwS2taRFBUNXVJbHVZTi9OUjdpQzF4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTUM0SHdkWXFodkNPMnpRMzJsKytrTHVTQk1USWVKVHJmbERuaVMrMlhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQlErL0JvS3pqYU1HNHNGQVhFd2FncmsySmoyb2RlNy93UDFiTWpiNmg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNISnBOemtTelFnV2twVkh2RUFPUEZqNHdacDkzMTVOUkl1YXgwS2krazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVueWxZSWFmMVVXQVJvbWlxRkJkUUtkUW44YWptNzhEWWIrMVJZbGphQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lLWVZ2T0lrMzd2Wk45R3pkRWp6YXE1TGs5TWJlM00xK2FNVHJpc1FVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk00MEZVU2U2NkFROTZrbGlIRVk1a0lxVjIxbHNFSUpqZ2NDKzFYMW1HND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE2ZzRaQlA4UkZkelVXaHhwR2RIWE1oa2FMWnJMSkhKTTE4cUZwY0M3Y0VYcG9hRE8xRFJuYjBRWW4ybVFxbUZCN25wM1NJSGJFM0ZSV3FsUlJNSGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJiQ3pHWFh0MkVkR1NhNnFzOXpZWTV2aGlTZ2lvdzBaeVhKTU9MQkR1aGl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjQxNjI2OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzZGQUMxM0IzQzQ0OTlDOTc0NUExMDcwNTY2RjlGQzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDAzNTE0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2NDE2MjY5NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMkYxOTI4ODA1MEFBRjkyRDUxOEI0MjA4RENBQTZGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDM1MTQ3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHQ00wbVNfLVRDZUxoRkVWcXJReEZnIiwicGhvbmVJZCI6ImFiMGU3NjFmLTQxMDEtNDU3Yy04ZTVmLTZjYzM4NGE2Nzk4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRjZsbUo0MUdYLzdFYjRVL0RjbDBlTW5GUWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm4ybEFBNmFIVHpGOTBhOWpOaTZsYVIyS3VJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhXU1lXVEtGIiwibWUiOnsiaWQiOiIyMzQ5MTY0MTYyNjk2OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJydWNlIFdheW5lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLK0d2RzBRdmM2V3RBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjNlY5WTVEWENycnRGRkhXUE5CR3dFazVrTTBPWUZzeXo3QytpTDNqUVVZPSIsImFjY291bnRTaWduYXR1cmUiOiJTTWlRM0FnRGlpOEhWNEtpOWgvbEZiNE85VVRTd2ZqWXhYVkVUK01KdDJtUjFwMUpYZWR2Uk9MdjltazE0SG13RkNIMDc5NGUrZCtId2lxU1B5eWRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRThmV0Nqdksxb0tTbjNYdmtrN0JGdGMwSUg4bk1uTHVONmtVQjVCQ2t5NlVKb1RaaGw1ZFcvZmQ3TGkvcmJTOEdHN2RWckp3RHkvaEZuazZBOVREaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY0MTYyNjk2OjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhPbGZXT1Exd3E2N1JSUjFqelFSc0JKT1pETkRtQmJNcyt3dm9pOTQwRkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwMzUxNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSndvIn0=";
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
