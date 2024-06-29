//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZGTnZCcFJIWmE0dnF2Q05RVXRobWhzL0l2NmNqVG1ldysrdXBjdlVHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFhaQ1hIR0VEa3lYUDRVdDI0bTNOU1ZpdFFkM2RrVlpHWndsbzdRekIxRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNREw0TnZqM0UxQ054RnNnekJXU3ZidUFzaVo4TEduTVU1d002MGQzSUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudDZXQ1hTZTZJTWNEY0dHMmFKU0t0enByNmpabUNrSWJRdmNXOGJXcHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNWEpXV0x1N1oralNqYmN0VlpSajg0WkpLRHgzamxwWlI5K1FUSmlQMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNoMjdUMHZoa0xlVDUwVmtaK0pjb3MvT25XblJBMXUwS0dKWHNXRmkwVk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tabDJ3ZXVKVjN4MXRTekNXbDJZa0RWaW5uV2hDRWhnNHdpUXEvbkNsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2hpWnZ2cjJyb2llTlBlVWtGNkRtYTNURmtKWXFZajl0d0RFMU9jYUZUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDTUMzNWtUSUZBTXdVRFB4UWZrbmNTdzFtM29VTUFRUFRTOGx2eUlJZTZIZzB3bFkyb3hUTjdXWHZCeTVmUFIvSzVJdEo1UlhzZExOYmREdlJJVWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiIrMm9mZU9nUFJrcDJiV0ZRYm5wVDM3Z09mWmc3RnFaQ0ErcDRLaUZUbFJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMNlprY2padFJEZWpTWUlrOEdLUXNnIiwicGhvbmVJZCI6ImY2N2VjNGFjLTQ3ZGUtNGE3MS05MzcwLWUxZTQ5YTk4YTZiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZTBOTjkrOGdjdUVBUThrdHBMZXlXWE5oeFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmsyc20reDVGb2p5OWNPM0tveG9JZDN1TkVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRURlpKWDREIiwibWUiOnsiaWQiOiIyMzQ4MTM3NjIxNTg1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRhbWlsYXJlU0hBS1VSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT045b2dFRUpTZGdyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrdklWRUVnckVQOGFPbGRxWndOdzMzT1A5QmVZampUL2k4TUpIOGo3aXhFPSIsImFjY291bnRTaWduYXR1cmUiOiJoRUVHR1I5Z0Z6Wi9jK2xFK1VJU29LbThLUkltdiszYURoZjcvcTJuZWhuNTllL2hDWEtOc3JxWjJZcWcwSUJHSllyMzdJYks3Y0x0SkdYS1Z1OXZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRHg4dzJUQVBYUG9vTTQ0S1NjK2l0V1pkdy9sV3lZYTdVWEcyUHBHeWJ1SWd5YzlpelJ1SlZKSG5xQzJNbWhjVEFJVU5kT3pGM0pIN2VhbjV1bHVMaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTM3NjIxNTg1OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpMeUZSQklLeEQvR2pwWGFtY0RjTjl6ai9RWG1JNDAvNHZEQ1IvSSs0c1IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MDExNTJ9tMUhUMEFIbUM5S0VuV2lVbUEwd1RCUnRqT0s5ZGhkNzgydm5zPSIsImFjY291bnRTaWduYXR1cmUiOiJEc29oVk5uL2I0Uk1pN0FKU1MzMEJ4cVBZT0kxZHAxWk1xYzBXaUloRE4zMllid1RHTzNSUEwvN1B5dUd4ZnJHQlhweHlzY2lzWFFFTzdvcWEwUHNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQS8veFFFbHhOTmFjbktNUVg1bTJYTjgwci9jWFFFTDVsUFZHM3hiRmJ3OXZISzlycUxUMGRUTmYxZVNaMXBxTHIvdlNNZFBZQlA4V214UjZVeUJ3aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ1MTQ4MzgyOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1reWlpSnRSMDlBQjVndlNoSjFvbEpnTk1Fd1ViWXppdlhZWGUvTnI1NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTY5NzUwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGb1UifQ==";
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
