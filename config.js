//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUs2ZUpyc0hGNzNoaFZ3MW9PNjZCRW5Eck13MVhLZHk4bGtwQWdLUU0yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRldYTTkraXFQZlJ4WWNnWTlTa1VXVm10RWxmUytmYkVyUk43T0ZhL29sTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTmFWbC9UOTBlTldXcmorMExJZmErdXJuOEZldllzbkZjaGZWTHdBVDJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTlBBNHNsTTR2VXhNY3dmMlBsc29BWnVJaWwzSWM2a3UyMmZxekM4ZUgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEUU5rR1lqeGd3MWxYbUQ0UGxLWWliK0VhazRTeHc3b1ZQMVZnU25mMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Db0ZKc2I2UGtCZHU0Vm5BTmVMTXFFY1RIUVlIdGkwd1VxZnFGYnpBQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZ0Q0t6ZXVNRThPT3E5ck1OblRiZnVtVnJSL2RscnVWNStibWY3bzJYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG9SRlNRUU40aC9COU5XdFlzVVZ1NTJ5SUZXQXJFMTJsM1FGd25oeFgyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjcE1tZDdyTHlNS0Q0aHJBdjN4aXBHMWlDNVlEU3RLenZxdzZ2UENLb0NIQm9yY3FZeEtTZU13V2ExanQwZ2I3UnlxZ3N1a0xIMTdlTStxcjVSMURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJYOWtKcTZmSnJTQmFxZGh6ZmtQemxnU0lzcmptdldocE9SUW5jajd6bXo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzEzMjg2MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkVFMDEyREIxOUFFN0FFRjcyQkY1OEE3OEMwODczREQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTcwNTA1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAzMTMyODYzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQkU3OUJBMjFDNDdFQkQwQkVCQkE3OTc4NjA2N0RERSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzA1MDU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHVzNEeWY4elFxbVpWR0JENi1jb2JBIiwicGhvbmVJZCI6Ijc4OWU4MTBlLWY0Y2UtNGVjZS1iMGE4LTAxMTA0Njk3MjYyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERXdXN09uM29oWEsvTGIrV0swYmVGWE4vZHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianVoajNNM09KZ0ZwQkt0Mk5FdlR5Y1RoenI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpXUTlTQjk4IiwibWUiOnsiaWQiOiIyMzQ3MDMxMzI4NjM3OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT3NpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQclZ5K3dHRU5PN2dyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoeTZxZk8rSFJ2QlBVdHR0V2JQRU94dWZFVDhNcjlwTkJnenh4b3ltVVRBPSIsImFjY291bnRTaWduYXR1cmUiOiJPdFZxWEJrdFI1bzlsQ3d6WDBGRXhZeGVudGVwV1U2amFsQkFadC8vb1hjQ25sWWlwRWRqUmhJRVBuZTFObisxSUFUbDZnTVorYUhBY201Z0tVQkhBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVJPVU1Eajh2QzN6MEVaTlVFMzQyMkZIdXFYcEM0UHd1ODRoTEtGUEFxVmtPNzdtaVVtd2pxbTlwaHNUVmlGYWp1M3pZNVVWV0xWS05zUW5pSnVuQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDMxMzI4NjM3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWN1cW56dmgwYndUMUxiYlZtenhEc2JueEUvREsvYVRRWU04Y2FNcGxFdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTcwNTA1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKemQifQ==";
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
