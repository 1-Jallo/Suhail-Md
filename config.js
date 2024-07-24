const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348160027216";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349157332004";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "https://telegra.ph/file/d493d7ba0ae7f28f9ecef.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_46_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpqT3NXcW1HbGZ5MEQrOGtqMllUc1paVm8zc1JrZ0tnNC9qRmI3aEFyT0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3NDY1MjcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjMxRjAyNTI2Rjk0QTJGMzQyMDNBQkI5MDc0MDkyN0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzk5OTY0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3NDY1MjcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDBENjExODBEMzM5RDU3RjAzMURCNTEzOTQyQjVCRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzk5OTY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhHVXNKSTJsUnlxTDJSMW8yS0FHSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjczYTAwZTgtYzYxMi00ZTkwLThhMjktY2VkMmJmOTUyMTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMjI2LFxuICAgICAgMTA5LFxuICAgICAgMTgwLFxuICAgICAgMTg4LFxuICAgICAgMTY5LFxuICAgICAgNDAsXG4gICAgICAxNjEsXG4gICAgICAxODYsXG4gICAgICAxNjQsXG4gICAgICAxODMsXG4gICAgICA4NixcbiAgICAgIDIzNSxcbiAgICAgIDcxLFxuICAgICAgMjA2LFxuICAgICAgODcsXG4gICAgICAxOTcsXG4gICAgICAzNixcbiAgICAgIDIxMixcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTY5LFxuICAgICAgMTk5LFxuICAgICAgMjQsXG4gICAgICAyNTQsXG4gICAgICAxNzEsXG4gICAgICAxMzEsXG4gICAgICA4MCxcbiAgICAgIDIwNSxcbiAgICAgIDEwNSxcbiAgICAgIDEwNyxcbiAgICAgIDgyLFxuICAgICAgNixcbiAgICAgIDI0NCxcbiAgICAgIDE4NSxcbiAgICAgIDIzLFxuICAgICAgNTEsXG4gICAgICAxNzIsXG4gICAgICAyMDEsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0xZS0xGQUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzQ2NTI3Mjk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2NzM3NjUwMzY0NDI4OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR2lmdCBCb2lcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcm84NDBCRUphcWdyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxmSWUybFBHZ1UwUlIwZVhsOFlkby8rVG1kTzhYZ0V4SC9mTkp2L3hJbjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaUdONGxGU0V0SWlFd3VJQkREQjVwUDFuUzFNWWRGby9XQ3EwL0dkYUNLS3R6VjJQWkpyb2FpanpkeVVWbm10QUM3SXJPRXcyaWppalJpb21BeTA4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidTBHSUZyeG83SEVJSnJyWWZ5cURxUXU1K2Z6Y3A2bUhUMlVWYVZsTmJXSGZVeEZaMHl2YkZLZU5kUzcxbkxpdnExc25rNzc4NFpYTHBweThIa1VzQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3NDY1MjcyOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc5OTk2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR5ZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHlkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjdHbHdWMkw3dUJJS3JjMFFteWRZb0NOaTNLNXV5UzdNWG5xWlUyVzdNND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTc1OTYwMTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc5OTk2MjczOVwifSIKfQ=="  // PUT your SESSION_ID 

module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JALLLO-🍃",
  packname: process.env.PACK_NAME || "Jallo❤️",
  botname : process.env.BOT_NAME  || "Jallo-md",
  ownername:process.env.OWNER_NAME|| "GIFT BOI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
