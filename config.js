//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2348109243618,2349076810086,2349163621557,2349012640680";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 4;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0E5bmhkMXp2SnBwS1NJdjdHY3ZiWVkzbStLYnJ1WW9pd3VBbjdOeEtWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkdBS1lRa0IvT1NPSFlmRTZrWERybUd4K04rYittSjdXdE1BcER0Wi9Dcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQjFsUVdvRXA5T1FwRGkzdVhMN2k5SDlkSWh4VWhqQ21sS0xBd0djc0Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIUWdrUWJYME5qb0tHZ1p3a2Y2MEY1ZG5ORWpKUUVIemw2S2xVZ0JHQ0Y4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKTUtUaFBDNzNlcmxuaDZvdmpMTXdZUFlIM3pYZVgvNElmemZ6MXRtSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rV3N2d1NYb3RSU21QTm9pVnV3d2Zac1QxallhUWtZUmgwR0RxclJ4aGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUkybTQvWEZ4S3lLV1VaaS9vSC9ObUx5TXU2T1BnN2t6cnE5dzVTQjZrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3VJTWt0OFp2TEx4SU9EQURPS2VxMG11clVZWUh4aWNYaUlKTGlyU2oyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJMRnRJZkFtK0V3enN2OVpIT2tIQUIzN2tSUTh2cXBIQ2M4Z0tHRnBUQ0dDZVFtRG5tZFYzV3I4QUVLakZ0YVc3T0doL25xNWE5dllHMDlSL3plUUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJuMGdnZC9maXUza3Mzb09tSUxUZG9ad0dPYkFobFlJYXFuR3U2aWxBcFpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlUGhxRUtuNlM0bV9WNk01WGZGc2F3IiwicGhvbmVJZCI6ImFkMjFkZDhhLWJiMDUtNGRjNS04MmM4LTdkZDkxNDAwN2IzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5OWdiNW1wK1VFT010Vyt6eUJia1BxUmxtdzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Q0N2hzNzVaUUs4d2Q4OXdMTWJXOXF2Qzd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY1TFRGWEhZIiwibWUiOnsiaWQiOiIyMzQ4MTA5MjQzNjE4Ojg3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6In5EYXZpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTld5MTg4RUVLWHB1YnNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0wyUjU5RXFCMTlIU3hYUXp6dlJFbTVrck1UUW9VSGdhMk9qQ1BOWHFqZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicFpzYURzNWJaS3VnbGJUVXc4a2pkTnYrajkxaXpRNUh2bnBZVUpOM1VJaXJuMExIdVdrM3ZEQldhVGdkS0pHaXZYZXNQbm1RUmhiclNVTWhLL1dUREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxBbnNrRVZScUIrZ3NQUk5sdm9sK0ZQZjRYNVBzUDF1MklHY3Bpd0V2NGREbTdOVFZNTG5DNTlMU0JqbkRlYlRFMG8zbXZnUWU2Yjh0cmREOUNPeEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwOTI0MzYxODo4N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWaTlrZWZSS2dkZlIwc1YwTTg3MFJKdVpLekUwS0ZCNEd0am93anpWNm80In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MjkyMDg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNkaSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "DAVID",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
