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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349157332004";
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
global.read_status = process.env.AUTO_READ_STATUS || "allo"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_32_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlRbzQ4SERJM2xDeWw4cllKdXVSU3FBR3JnaWlXSi9palRmTmw2QXVya0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdqVkVZOHdhUlhPdDIwdmRrVFhOX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGNhYjBmY2MtNjJmYy00MGQ1LWIxMzEtZmMxZDFlYTJlMzhkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDkzLFxuICAgICAgMjUzLFxuICAgICAgMTIwLFxuICAgICAgMTg4LFxuICAgICAgMjA1LFxuICAgICAgMzIsXG4gICAgICAxNTEsXG4gICAgICAxNjksXG4gICAgICAxMzIsXG4gICAgICAyMTQsXG4gICAgICAxOCxcbiAgICAgIDYwLFxuICAgICAgMjUsXG4gICAgICAzMCxcbiAgICAgIDIyMixcbiAgICAgIDExLFxuICAgICAgMTcsXG4gICAgICAyNixcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDYyLFxuICAgICAgMTksXG4gICAgICA3MSxcbiAgICAgIDc0LFxuICAgICAgMTksXG4gICAgICAyMDUsXG4gICAgICA2LFxuICAgICAgMTY5LFxuICAgICAgMzYsXG4gICAgICAxMTIsXG4gICAgICA1OCxcbiAgICAgIDk4LFxuICAgICAgMjA3LFxuICAgICAgMTA4LFxuICAgICAgOTksXG4gICAgICAxOTgsXG4gICAgICAxMzYsXG4gICAgICA4OCxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWkFFOTRQN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NzI4MTUxNTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODY5MTcyNDUxNjE0NzY6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV1NwS2tCRU12V3BMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVlRE9ZbFRJWjFSV1NxUXB3cXEvRzZ2UEpLYW1CT2pSZEk2UUUxMHhPd2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUUJvNDh4L29mNmxSa1UvYTlDSC9rZS9HV0tzdHdOb0dHeFlKSEYzcW55Q3kyYjFIODdvU3pQK0NvRXBWVEYvRS9YTlpBejRFSVpPNDliY1BmdTQ4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSU9qMC9uTFRKSHBsSU02MFQxdlpYbVp1T0oxaE1jdUJaK3ZaN3BveUx1RmdGZVhweGs2bXNIdGovUzIyTytFMGdlSTlZckVabGpQQ1F0R1NYeStqalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NzI4MTUxNTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2NTU1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUyTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTJOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEhEQU95R0J0K1NITXJmVkhhRGYzWkF3ZFBzdTNjaXgyamRSUnJVN0dNYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNTUwMTA5MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JALLLO-MD",
  packname: process.env.PACK_NAME || "Jallo❤️",
  botname : process.env.BOT_NAME  || "Jallo-md",
  ownername:process.env.OWNER_NAME|| "JALLO-MD",


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
