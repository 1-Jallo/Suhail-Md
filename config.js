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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_17_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjFRWXhXTjVYcE1xWGJyS0cxUzdkSUFPeVF3Z0VPeCsydnVOUzF4ZDNHWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclNpTlRtazNTNFN3THJUdU9ubnJ6Z1wiLFxuICBcInBob25lSWRcIjogXCI4MjFmY2JmNi00YTExLTRjNjAtYWQyMS05NmY5YjI3MDUzMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNjMsXG4gICAgICAxODQsXG4gICAgICAyMTIsXG4gICAgICAxOTQsXG4gICAgICAxOTksXG4gICAgICAxMzEsXG4gICAgICAxNzYsXG4gICAgICAxOCxcbiAgICAgIDIwMyxcbiAgICAgIDIxNSxcbiAgICAgIDMyLFxuICAgICAgMTUxLFxuICAgICAgNzksXG4gICAgICAyMTMsXG4gICAgICAyOSxcbiAgICAgIDI0NSxcbiAgICAgIDMsXG4gICAgICAxMzksXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA3LFxuICAgICAgNixcbiAgICAgIDI0MCxcbiAgICAgIDIwNyxcbiAgICAgIDE5MCxcbiAgICAgIDEzOCxcbiAgICAgIDE3NCxcbiAgICAgIDY5LFxuICAgICAgMjYsXG4gICAgICAyNCxcbiAgICAgIDM3LFxuICAgICAgODksXG4gICAgICAxMDcsXG4gICAgICAzMyxcbiAgICAgIDExNixcbiAgICAgIDIyNyxcbiAgICAgIDI3LFxuICAgICAgMTA2LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFZWFpCREM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU3MzMyMDA0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSkFMTE8nUyBNRURJQVwiLFxuICAgIFwibGlkXCI6IFwiMTE4NjM2MDIyODc4NDE4OjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6QXlOOERFT245b2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmZRSmNnOWVOZDRiMXNveWhXZEdHRzFleWIxaS9xbXFINUMxdW03TjEycz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3NlhMTk1YcmR2TnhYZElIZkJMemNsZXdaaUhhUXY4bUJJbnIxNUw4YklBNTdtN2prMnNWWGNGZGdkcjF5clRSMEZGNERJeTgvZ3F4aW9JSTAvQnBDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYNUV1aHNSdWZzbzBldmFRZ2JnRHd1S0c0TWVzclVFekMxRG5scFg2V2dqUHFUNTdRR3BUeXk0ckFMR2ZZcDIzWi9sTHNndUZDUnVyMnVFOTNPaWRDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU3MzMyMDA0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMjE0MjFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
