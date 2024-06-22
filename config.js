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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348036863883";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_17_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlYyeFlNb05BVnpFSFBjSHJXM0FybjNoNmtiKytPS2tLVTJPZUVDbVBmbEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF3Z2FDbnI2U25LWl9XRThQSWhfYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGU1OTQ0YTItYmQwZC00OTY2LWJiM2EtNTYwNmYzNmIzZDJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDEyMyxcbiAgICAgIDI0MixcbiAgICAgIDIwNyxcbiAgICAgIDEzNSxcbiAgICAgIDE4NSxcbiAgICAgIDExNCxcbiAgICAgIDUzLFxuICAgICAgMTAzLFxuICAgICAgMjQ5LFxuICAgICAgMTc1LFxuICAgICAgMTA3LFxuICAgICAgMjAyLFxuICAgICAgMjI3LFxuICAgICAgMTIyLFxuICAgICAgNixcbiAgICAgIDEwLFxuICAgICAgOTYsXG4gICAgICAxOTIsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICA4NSxcbiAgICAgIDIzMCxcbiAgICAgIDEzMCxcbiAgICAgIDIxLFxuICAgICAgNjEsXG4gICAgICAxLFxuICAgICAgMzYsXG4gICAgICA3OSxcbiAgICAgIDM1LFxuICAgICAgMjM4LFxuICAgICAgMjE1LFxuICAgICAgMjQ0LFxuICAgICAgMjUzLFxuICAgICAgMzEsXG4gICAgICAyMDYsXG4gICAgICAxMDUsXG4gICAgICA1NCxcbiAgICAgIDQxLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0VMVFMxSkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzY4NjM4ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4OTg1MTY3MjQ1NTQxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZrOHFvREVKT08zTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmRjZOSVE4dk9zYXBEc0k2aTNPYXFUL0JsbmduNDljaENHaXk0UTQ1S2hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInU1bGo0Vjd5dVd5b2JVWWovSk1RTmtiZEoyblRZUzYzVXVHTWdVcEFibGtaeERnM0Z1VEFOSklTTXlaMUNUT3NKcEtaWW8zNDFqTHZKa3h2b0t4QUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1QTVFMckNLenNpT2dHSlFpaU1nTy9iV0o2bUkzWVdSS3VDbWN4WFZQM1JGb0FuU054enFEU3cvQUk0QzFoSGxHd3RmTTV0eDBHOG5Hemd1UXI2Q2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzY4NjM4ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MDc2NjMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHhPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIeE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnaUEvckdQcHRVL0h2dGY0YVE4U0ZpZ1VYbWhUY1hLVFhBVWd5cStqa1U0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5NTI2NzQwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MDc2NjM3NTk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
