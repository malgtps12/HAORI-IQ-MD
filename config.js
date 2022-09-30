let fetch = require('node-fetch') 
 let moment = require('moment-timezone') 
 let d = new Date(new Date + 3600000) 
 let locale = 'id' 
 let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
 let date = d.toLocaleDateString(locale, { 
 day: 'numeric', 
 month: 'long', 
 year: 'numeric' 
 }) 
  
 let time = d.toLocaleTimeString(locale, { 
 hour: 'numeric', 
 minute: 'numeric', 
 second: 'numeric' 
 }) 
 let wktuh = moment.tz('Asia/Jakarta').format('HH') 
 let wktum = moment.tz('Asia/Jakarta').format('mm') 
 let wktus = moment.tz('Asia/Jakarta').format('ss') 
  
 function pickRandom(list) { 
   return list[Math.floor(Math.random() * list.length)] 
 } 
 global.owner = ['6289516353968'] // Put your number here 
 global.mods = [] // Want some help? 
 global.prems = [] // Premium user has unlimited limit 
 global.APIs = { // API Prefix 
   // name: 'https://website' 
   nrtm: 'https://nurutomo.herokuapp.com',  
   xteam: 'https://api.xteam.xyz', 
   zahir: 'https://zahirr-web.herokuapp.com', 
   lol: 'https://api.lolhuman.xyz', 
   dhnjing: 'https://dhnjing.xyz', 
   zeks: 'https://api.zeks.me', 
   pencarikode: 'https://pencarikode.xyz', 
   bear: 'https://apikey-bear.herokuapp.com', 
   bear2: 'https://apikey-bear2.herokuapp.com', 
   bear3: 'https://apikey-bear3.herokuapp.com', 
   vinco: 'https://viko-api.herokuapp.com', 
   LeysCoder: 'https://leyscoders-api.herokuapp.com' 
 } 
 global.APIKeys = { // APIKey Here 
   // 'https://website': 'apikey' 
   'https://api.xteam.xyz': 'https://pastelink.net/v20Md', 
   'https://api.lolhuman.xyz': 'rey2k21', 
   'https://zahirr-web.herokuapp.com': 'zahirgans', 
   'https://api.zeks.me': 'apivinz', 
   'https://pencarikode.xyz': 'pais', 
   'https://apikey-bear3.herokuapp.com': 'https://pastelink.net/v20Md', 
   'https://viko-api.herokuapp.com': 'vinko', 
   'https://leyscoders-api.herokuapp.com': 'dappakntlll' 
 } 
  
 lolkey = 'rey2k21' 
 zekskey = 'apivinz' 
 xteamkey = 'https://pastelink.net/v20Md' 
 leyskey = 'dappakntlll' 
 bearkey = 'https://pastelink.net/v20Md' 
 ApiiKey = 'https://pastelink.net/v20Md' 
 vinkey = 'vinko'//Kata apikey ubah jadi apikey lu dengan beli di website nya 
  
 // Sticker WM 
 global.stiker_wait = '*WAIT! | Mohon Tunggu Sebentar...*' 
 global.packname = 'Buatan Siapa?' 
 global.author = `Buatan MallBot-MD` 
 global.wm = 'MallBot-MD' 
 global.watermark = wm 
 global.linkgc = '-'
global.link = '-'
global.deslink = ''
global.titlink = 'MallBot-MD'
global.bodlink = '@xzdk.m'
global.linkig = 'https://instagram.com/xzdk.m'
global.instagram = 'https://instagram.com/not_pilar32'
 global.botdate = `❏ ${wktuh} H  ${wktum} M  ${wktus} S\n❏ ${week} ${date}` 
 global.media = 'https://telegra.ph/file/ccb2359d3925fd7af58cd.jpg' 
 global.github = 'https://github.com/malgtps' 
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23401620&text=' 
 global.wait = '_*L O A D I N G*_' 
 global.eror = '_*Server Error*_' 
 global.benar = 'Benar ✅\n' 
 global.salah = 'Salah ❌\n' 
  
 global.multiplier = 69 // The higher, The harder levelup 
  
 global.rpg = { 
   emoticon(string) { 
     string = string.toLowerCase() 
     let emot = { 
       exp: '✉️', 
       money: '💵', 
       potion: '🥤', 
       diamond: '💎', 
       common: '📦', 
       uncommon: '🎁', 
       mythic: '🗳️', 
       legendary: '🗃️', 
       pet: '🎁', 
       sampah: '🗑', 
       armor: '🥼', 
       sword: '⚔️', 
       kayu: '🪵', 
       batu: '🪨', 
       string: '🕸️', 
       kuda: '🐎', 
       kucing: '🐈' , 
       anjing: '🐕', 
       petFood: '🍖', 
       gold: '👑', 
       emerald: '💚' 
     } 
     let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string)) 
     if (!results.length) return '' 
     else return emot[results[0][0]] 
   } 
 } 
  
 let fs = require('fs') 
 let chalk = require('chalk') 
 let file = require.resolve(__filename) 
 fs.watchFile(file, () => { 
   fs.unwatchFile(file) 
   console.log(chalk.redBright("Update 'config.js'")) 
   delete require.cache[file] 
   require(file) 
 })
