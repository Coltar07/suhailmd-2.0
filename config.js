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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_44_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkI2cUd1ZTUxeWM0Rm5qRXBvS2s1dE1wenpBTERCN3NUMGhZNXRWZTBhRmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBoekdXcGdaUllLdm1DWWM3TkM1aVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjhlZTMyOTYtNWZiNC00Y2QzLWJjMGUtYWJlNWQxNDVhYmZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDEyNCxcbiAgICAgIDExMyxcbiAgICAgIDI1MixcbiAgICAgIDIzLFxuICAgICAgMjUyLFxuICAgICAgMzEsXG4gICAgICA0NCxcbiAgICAgIDEzNyxcbiAgICAgIDIxMixcbiAgICAgIDIxMSxcbiAgICAgIDEwOCxcbiAgICAgIDIyNSxcbiAgICAgIDEsXG4gICAgICA3OSxcbiAgICAgIDE5MyxcbiAgICAgIDIxMyxcbiAgICAgIDE1OSxcbiAgICAgIDM2LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjQ1LFxuICAgICAgMjAsXG4gICAgICAxODAsXG4gICAgICAxNjQsXG4gICAgICAyMzcsXG4gICAgICA5LFxuICAgICAgMjI3LFxuICAgICAgMzMsXG4gICAgICAxMDIsXG4gICAgICAxNTksXG4gICAgICAxMDEsXG4gICAgICAxODEsXG4gICAgICAxLFxuICAgICAgMTI5LFxuICAgICAgMjM3LFxuICAgICAgMTUwLFxuICAgICAgMTExLFxuICAgICAgMTAwLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOURSRk1KUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTk2NjI0Nzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNvbHRhci4wN1wiLFxuICAgIFwibGlkXCI6IFwiMTMzNDcwNDg3NjEzNTQ1OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luSTE1c0NFSm02bXJrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0hRTnhpOXMvWllBREVodEd6RFk2R0VsQnRZTWdJWHFDWnRMUU1jYXFqcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuaG5iZHVRWXNZY2ZsQVFYeE5ZVWU2SG1yblVCVitGdVN5Q1JGVjVJb2lkOUhwdDg0WmJJN0kxVzFKTEdidi9aSjRFZG5MTnVubXVTeEF6eHcyUXZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMWUJKc200cENCd0NrcFc5YlFWbmdlNUhvSS8wVmtoRVhlTVVDeklkMitMaWc1eTkvN2pXTGFHQk9KUCt6T2VkTFFxYVp3OWhZSUtudGYrUXM5d3BpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA5OTY2MjQ3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1ODM4MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxCby5qc29uIjogIntcImtleURhdGFcIjpcIk1xeXVxc3ZYbXpwd2xXL2JzYWlHKzk5U1VaNkFRakdaaTRKek5iQkhPc0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk0OTI4NjQ2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
