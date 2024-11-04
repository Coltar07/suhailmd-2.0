const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348109966247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_39_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNU4yNzZuclpaYXlIYjZmaW5KNG1FZ2VxWjhYaTdRa1NTM1RLeFZydERrTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVW4tUWZ3dk5UR09ybk9TbUtHT3ZJZ1wiLFxuICBcInBob25lSWRcIjogXCI3MWM5MDNjNy02OGFiLTRhMTctYTcxMi0yZTc3NDM4YjdhNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMjUzLFxuICAgICAgOTUsXG4gICAgICAxNzAsXG4gICAgICA2MyxcbiAgICAgIDYwLFxuICAgICAgMTgxLFxuICAgICAgMTE0LFxuICAgICAgMTc4LFxuICAgICAgMjcsXG4gICAgICAxOTYsXG4gICAgICAxNTIsXG4gICAgICA2MCxcbiAgICAgIDE3NyxcbiAgICAgIDQ2LFxuICAgICAgMTg2LFxuICAgICAgMTg4LFxuICAgICAgMTM4LFxuICAgICAgMTA4LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTkzLFxuICAgICAgMTM3LFxuICAgICAgMTIsXG4gICAgICAxMDYsXG4gICAgICAxNjcsXG4gICAgICAyMDcsXG4gICAgICAyNyxcbiAgICAgIDI1NCxcbiAgICAgIDcsXG4gICAgICA1NSxcbiAgICAgIDQ2LFxuICAgICAgMjQzLFxuICAgICAgMTEzLFxuICAgICAgMTU3LFxuICAgICAgMjAwLFxuICAgICAgMTE3LFxuICAgICAgMjE1LFxuICAgICAgMjA1LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxTMVkzQ000XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA5OTY2MjQ3OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29sdGFyLjA3XCIsXG4gICAgXCJsaWRcIjogXCIxMzM0NzA0ODc2MTM1NDU6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXZJMTVzQ0VMUFlvYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnSFFOeGk5cy9aWUFERWh0R3pEWTZHRWxCdFlNZ0lYcUNadExRTWNhcWpzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNUcEFJQkJOL2JIMjBLNW9xVXB4cUlCTVlmai94OU8vV2kyTjYvcTdPWkVqMHBwbzhMcHZkYnFoWXhMSUNORHpFOHdDTkhhSCtQZ3lXSTRoSUQ0SkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVxK1dKOHRPQU9KeThOK2xFVkdTV1lVaWpMaXEyQ0hHQzBicDhJREcyQkZ2MisvT2M4ZTZFaWJRRVE3THJ4Mm1IRERUT2ZGdWlLK3o2a0NmVHluYkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDk5NjYyNDc6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDcwMjM5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "COLTAR",
  packname: process.env.PACK_NAME || "COLTAR_07",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
