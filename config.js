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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_45_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUNwaitQT2cwNzZPeldneE9PcDNzTUhkRW5aQjJSYUFGdjIrNmkzekJGbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg3MjgxNTE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QTYyMUZDQjQ2OEQ1RTVCMjYxODhDRDhBMTkzMzQwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNjM1MzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOEo1aGhiNHJRWTJibXE4ZXFUSm1SUVwiLFxuICBcInBob25lSWRcIjogXCIzNDY1OWIwZS1mOGQ1LTQ5YzQtOTgzNy1kNTdjMjBmYzY2NWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMzQsXG4gICAgICAyNDgsXG4gICAgICAxNzQsXG4gICAgICAxNTUsXG4gICAgICAyMjQsXG4gICAgICA1MSxcbiAgICAgIDI0NCxcbiAgICAgIDE4MCxcbiAgICAgIDE1OSxcbiAgICAgIDIzNyxcbiAgICAgIDQsXG4gICAgICAxNzYsXG4gICAgICA3NCxcbiAgICAgIDQwLFxuICAgICAgNTUsXG4gICAgICA1OCxcbiAgICAgIDI0NyxcbiAgICAgIDI0MyxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMjYsXG4gICAgICA3MyxcbiAgICAgIDc2LFxuICAgICAgMjM4LFxuICAgICAgMjE2LFxuICAgICAgMjI2LFxuICAgICAgNCxcbiAgICAgIDE2MyxcbiAgICAgIDE4MSxcbiAgICAgIDEyOSxcbiAgICAgIDIyNyxcbiAgICAgIDExNCxcbiAgICAgIDIzOCxcbiAgICAgIDIwNCxcbiAgICAgIDEzLFxuICAgICAgMTUyLFxuICAgICAgMjQsXG4gICAgICAzNSxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZS0VBUlA1Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NzI4MTUxNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODY5MTcyNDUxNjE0NzY6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJHb2QgRmlyc3Qg4pu377iP4pyd77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VTcEtrQkVJYlVxclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFZURPWWxUSVoxUldTcVFwd3FxL0c2dlBKS2FtQk9qUmRJNlFFMTB4T3djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBNSmllclhYMXhhaHRZQ3JjSnc5a2ZMb3ptWlRWWnVrZW10c2FBOHYwakYyWkMxOHBTY2NCWnhmQzJCMnAya3lWU0NmUmRDbWIvckZDc3ZrbXlIT0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlUxcW9pOSt5bTk4OWVpb2c5L3RTQXJEb3BCOEhscDhLUmhvNGdhcDY1WGxhbWVCRzVWbmZCek02a3F4dURZRmtvQVp2bUI2QjFpV1Q4TkRXdWk5SGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODcyODE1MTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNjM1MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMlZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUyVi5qc29uIjogIntcImtleURhdGFcIjpcIkRPWFQ1SzE2ZGt1OHRpTXdqYWJCc0dXTkl1SGNSTnNhZUJENXByb2k4SVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1MDEwOTE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNjM1MzQ2MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JALLLO-🍃",
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
