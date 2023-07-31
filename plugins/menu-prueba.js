import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img =  './Menu.png'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `*╭━━❍Eʅɱσ - Bσƚ❍━━╮* 
 *┃ ╭━━━━━━━━━━━━━━━━╮* 
 *┃ ┃ ╭┈────────────╮* 
 *┃ ┃ │❍ 🅼🅴🅽🆄 ❍* 
 *┃ ┃ ╰┈────────────╯* 
 *┃ ╰━━━━━━━━━━━━━━━━╯* 
 *┣━━━▢ ʙᴜᴇɴᴀꜱ, ${taguser}*• 
 *┃╭━━━━━━━━━━━━━━━━╾•* 
 *┃┃  ❍ ${vs} ❍* 
 *┃┣━━━━━━━━━━━━━━━━╾•* 
 *┃┃ ⋄ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ:  Shizu-Hub* 
 *┃┃ ⋄ ꜰᴇᴄʜᴀ » ${date}* 
 *┃┃ ⋄ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ » ${uptime}* 
 *┃┃ ⋄ ʟᴇɴɢᴜᴀᴊᴇ » ꜱᴘᴀɴɪꜱʜ* 
 *┃┃ ⋄ ᴜꜱᴜᴀʀɪᴏꜱ » ${rtotalreg}* 
 *┃╰━━━━━━━━━━━━━━━━╾•* 
 *╰━━━╼Eʅɱσ - Bσƚ╾━━━╯* 

 *╭━━━━━━━━━━━━━━━━╮*
 *┃ ⋄ ʟɪɴᴋ » ${gc}* 
 *╰━━━━━━━━━━━━━━━━╾•*

 *╭━━━━━━━━━━━━━━━━╮*
     *INFO DEL USUARIO*          
 *╭━━━━━━━━━━━━━━━━╯*
 *║👤 NOMBRE: ${taguser}* 
 *║🧰 EXPERIENCIA ➟ ${exp}* 
 *║⚓ RANGO ➟* ${role}* 
 *║💎 DIAMANTES ➟ ${limit}* 
 *║💸 DOLARES ➟ ${money}* 
 *╰═══════════════* *✧* 
${readMore}

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║      ❥📌 *𝕀ℕ𝔽𝕆 𝔹𝕆𝕋* 📌❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║  ⃝⃟⃤📝 _${usedPrefix}terminosycondiciones_
║  ⃝⃟⃤📝 _${usedPrefix}grupos_
║  ⃝⃟⃤📝 _${usedPrefix}estado_
║  ⃝⃟⃤📝 _${usedPrefix}infobot_
║  ⃝⃟⃤📝 _${usedPrefix}labiblia_
║  ⃝⃟⃤📝 _${usedPrefix}animes_
║  ⃝⃟⃤📝 _${usedPrefix}speedtest_
║  ⃝⃟⃤📝 _${usedPrefix}donar_
║  ⃝⃟⃤📝 _${usedPrefix}grouplist_
║  ⃝⃟⃤📝 _${usedPrefix}owner_
║  ⃝⃟⃤📝 _${usedPrefix}script_
║  ⃝⃟⃤📝 _${usedPrefix}listprem_
║  ⃝⃟⃤📝 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║❥𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║  ⃝⃟⃤📮 _${usedPrefix}join *<enlace / link / url>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║    ❥𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🤖 _${usedPrefix}serbot_
║   ⃝⃟⃤🤖 _${usedPrefix}stop_
║   ⃝⃟⃤🤖 _${usedPrefix}bots_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄 

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║              ❥𝕁𝕌𝔼𝔾𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🎡 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
║   ⃝⃟⃤🎡 _${usedPrefix}ppt *<papel / tijera /piedra>*_
║   ⃝⃟⃤🎡 _${usedPrefix}prostituto *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}prostituta *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}gay2 *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}lesbiana *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}pajero *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}pajera *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}puto *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}puta *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}manco *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}manca *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}rata *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}love *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}doxear *<nombre / @tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}pregunta *<texto>*_
║   ⃝⃟⃤🎡 _${usedPrefix}suitpvp *<@tag>*_
║   ⃝⃟⃤🎡 _${usedPrefix}slot *<apuesta>*_
║   ⃝⃟⃤🎡 _${usedPrefix}ttt *<nombre sala>*_
║   ⃝⃟⃤🎡 _${usedPrefix}delttt_
║   ⃝⃟⃤🎡 _${usedPrefix}acertijo_
║   ⃝⃟⃤🎡 _${usedPrefix}simi *<texto>*_
║   ⃝⃟⃤🎡 _${usedPrefix}top *<texto>*_
║   ⃝⃟⃤🎡 _${usedPrefix}topgays_
║   ⃝⃟⃤🎡 _${usedPrefix}topotakus_
║   ⃝⃟⃤🎡 _${usedPrefix}formarpareja_
║   ⃝⃟⃤🎡 _${usedPrefix}verdad_
║   ⃝⃟⃤🎡 _${usedPrefix}reto_
║   ⃝⃟⃤🎡 _${usedPrefix}cancion_
║   ⃝⃟⃤🎡 _${usedPrefix}pista_
║   ⃝⃟⃤🎡 _${usedPrefix}akinator_
║   ⃝⃟⃤🎡 _${usedPrefix}wordfind_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║ ❥𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤☑️ _${usedPrefix}enable *welcome*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *welcome*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *modohorny*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *modohorny*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antilink*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antilink*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antilink2*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antilink2*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *detect*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *detect*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *audios*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *audios*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *autosticker*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *autosticker*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antiviewonce*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antiviewonce*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antitoxic*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antitoxic*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antitraba*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antitraba*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *antiarabes*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *antiarabes*_
║   ⃝⃟⃤☑️ _${usedPrefix}enable *modoadmin*_
║   ⃝⃟⃤☑️ _${usedPrefix}disable *modoadmin*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║  ❥ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤📩 _${usedPrefix}reporte *<texto>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║          ❥𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤📤 _${usedPrefix}instagram *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}mediafire *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}gitclone *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}gdrive *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}tiktok *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}xnxxdl *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}xvideosdl *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}twitter *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}fb *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}ytshort *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}ytmp3 *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}ytmp4 *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}videodoc *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}dapk2 *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}stickerpack *<enlace / link / url>*_
║   ⃝⃟⃤📤 _${usedPrefix}play *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}play2 *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}play.1 *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}play.2 *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}playdoc *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}playdoc2 *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}playlist *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}spotify *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}ringtone *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}soundcloud *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}imagen *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}pinterest *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}wallpaper *<texto>*_
║   ⃝⃟⃤📤 _${usedPrefix}pptiktok *<nombre de usuario>*_
║   ⃝⃟⃤📤 _${usedPrefix}igstalk *<nombre de usuario>*_
║   ⃝⃟⃤📤 _${usedPrefix}igstory *<nombre de usuario>*_
║   ⃝⃟⃤📤 _${usedPrefix}tiktokstalk *<username>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║         ❥𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║  ⃝⃟⃤🔍 _${usedPrefix}cuevana *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}pelisplus *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}modapk *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}stickersearch *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}stickersearch2 *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}xnxxsearch *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}animeinfo *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}google *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}letra *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}wikipedia *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}ytsearch *<texto>*_
║  ⃝⃟⃤🔍 _${usedPrefix}playstore *<texto>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║             ❥𝔾ℝ𝕌ℙ𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤💎 _${usedPrefix}add *<numero>*_
║   ⃝⃟⃤💎 _${usedPrefix}kick *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}kick2 *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}listanum *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}kicknum *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}grupo *<abrir / cerrar>*_
║   ⃝⃟⃤💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
║   ⃝⃟⃤💎 _${usedPrefix}promote *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}demote *<@tag>*_
║   ⃝⃟⃤💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║   ⃝⃟⃤💎 _${usedPrefix}demote *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}infogroup_
║   ⃝⃟⃤💎 _${usedPrefix}resetlink_
║   ⃝⃟⃤💎 _${usedPrefix}link_
║   ⃝⃟⃤💎 _${usedPrefix}setname *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}setdesc *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}invocar *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}setwelcome *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}setbye *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}hidetag *<texto>*_
║   ⃝⃟⃤💎 _${usedPrefix}hidetag *<audio>*_
║   ⃝⃟⃤💎 _${usedPrefix}hidetag *<video>*_
║   ⃝⃟⃤💎 _${usedPrefix}hidetag *<imagen>*_
║   ⃝⃟⃤💎 _${usedPrefix}warn *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}unwarn *<@tag>*_
║   ⃝⃟⃤💎 _${usedPrefix}listwarn_
║   ⃝⃟⃤💎 _${usedPrefix}fantasmas_
║   ⃝⃟⃤💎 _${usedPrefix}destraba_
║   ⃝⃟⃤💎 _${usedPrefix}setpp *<imagen>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║      ❥ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🌺 _${usedPrefix}toanime *<imagen>*_
║   ⃝⃟⃤🌺 _${usedPrefix}togifaud *<video>*_
║   ⃝⃟⃤🌺 _${usedPrefix}toimg *<sticker>*_
║   ⃝⃟⃤🌺 _${usedPrefix}tomp3 *<video>*_
║   ⃝⃟⃤🌺 _${usedPrefix}tomp3 *<nota de voz>*_
║   ⃝⃟⃤🌺 _${usedPrefix}toptt *<video / audio>*_
║   ⃝⃟⃤🌺 _${usedPrefix}tovideo *<sticker>*_
║   ⃝⃟⃤🌺 _${usedPrefix}tourl *<video / imagen / audio>*_
║   ⃝⃟⃤🌺 _${usedPrefix}tts es *<texto>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║   ❥𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🐉 _${usedPrefix}logos *<efecto> <texto>*_
║   ⃝⃟⃤🐉 _${usedPrefix}logochristmas *<texto>*_
║   ⃝⃟⃤🐉 _${usedPrefix}logocorazon *<texto>*_
║   ⃝⃟⃤🐉 _${usedPrefix}ytcomment *<texto>*_
║   ⃝⃟⃤🐉 _${usedPrefix}hornycard *<@tag>*_
║   ⃝⃟⃤🐉 _${usedPrefix}simpcard *<@tag>*_
║   ⃝⃟⃤🐉 _${usedPrefix}lolice *<@tag>*_
║   ⃝⃟⃤🐉 _${usedPrefix}itssostupid_
║   ⃝⃟⃤🐉 _${usedPrefix}pixelar_
║   ⃝⃟⃤🐉 _${usedPrefix}blur_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║     ❥𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🎐 _${usedPrefix}piropo_
║   ⃝⃟⃤🎐 _${usedPrefix}consejo_
║   ⃝⃟⃤🎐 _${usedPrefix}fraseromantica_
║   ⃝⃟⃤🎐 _${usedPrefix}historiaromantica_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║            ❥ℝ𝔸ℕ𝔻𝕆𝕄❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║    ⃝⃟⃤🏰 _${usedPrefix}kpop *<blackpink / exo / bts>*_
║    ⃝⃟⃤🏰 _${usedPrefix}cristianoronaldo_
║    ⃝⃟⃤🏰 _${usedPrefix}messi_
║    ⃝⃟⃤🏰 _${usedPrefix}cat_
║    ⃝⃟⃤🏰 _${usedPrefix}dog_
║    ⃝⃟⃤🏰 _${usedPrefix}meme_
║    ⃝⃟⃤🏰 _${usedPrefix}itzy_
║    ⃝⃟⃤🏰 _${usedPrefix}blackpink_
║    ⃝⃟⃤🏰 _${usedPrefix}lolivid_
║    ⃝⃟⃤🏰 _${usedPrefix}loli_
║    ⃝⃟⃤🏰 _${usedPrefix}navidad_
║    ⃝⃟⃤🏰 _${usedPrefix}ppcouple_
║    ⃝⃟⃤🏰 _${usedPrefix}wpmontaña_
║    ⃝⃟⃤🏰 _${usedPrefix}pubg_
║    ⃝⃟⃤🏰 _${usedPrefix}wpgaming_
║    ⃝⃟⃤🏰 _${usedPrefix}wpaesthetic_
║    ⃝⃟⃤🏰 _${usedPrefix}wpaesthetic2_
║    ⃝⃟⃤🏰 _${usedPrefix}wprandom_
║    ⃝⃟⃤🏰 _${usedPrefix}wallhp_
║    ⃝⃟⃤🏰 _${usedPrefix}wpvehiculo_
║    ⃝⃟⃤🏰 _${usedPrefix}wpmoto_
║    ⃝⃟⃤🏰 _${usedPrefix}coffee_
║    ⃝⃟⃤🏰 _${usedPrefix}pentol_
║    ⃝⃟⃤🏰 _${usedPrefix}caricatura_
║    ⃝⃟⃤🏰 _${usedPrefix}ciberespacio_
║    ⃝⃟⃤🏰 _${usedPrefix}technology_
║    ⃝⃟⃤🏰 _${usedPrefix}doraemon_
║    ⃝⃟⃤🏰 _${usedPrefix}hacker_
║    ⃝⃟⃤🏰 _${usedPrefix}planeta_
║    ⃝⃟⃤🏰 _${usedPrefix}randomprofile_
║    ⃝⃟⃤🏰 _${usedPrefix}neko_
║    ⃝⃟⃤🏰 _${usedPrefix}waifu_
║    ⃝⃟⃤🏰 _${usedPrefix}akira_
║    ⃝⃟⃤🏰 _${usedPrefix}akiyama_
║    ⃝⃟⃤🏰 _${usedPrefix}anna_
║    ⃝⃟⃤🏰 _${usedPrefix}asuna_
║    ⃝⃟⃤🏰 _${usedPrefix}ayuzawa_
║    ⃝⃟⃤🏰 _${usedPrefix}boruto_
║    ⃝⃟⃤🏰 _${usedPrefix}chiho_
║    ⃝⃟⃤🏰 _${usedPrefix}chitoge_
║    ⃝⃟⃤🏰 _${usedPrefix}deidara_
║    ⃝⃟⃤🏰 _${usedPrefix}erza_
║    ⃝⃟⃤🏰 _${usedPrefix}elaina_
║    ⃝⃟⃤🏰 _${usedPrefix}eba_
║    ⃝⃟⃤🏰 _${usedPrefix}emilia_
║    ⃝⃟⃤🏰 _${usedPrefix}hestia_
║    ⃝⃟⃤🏰 _${usedPrefix}hinata_
║    ⃝⃟⃤🏰 _${usedPrefix}inori_
║    ⃝⃟⃤🏰 _${usedPrefix}isuzu_
║    ⃝⃟⃤🏰 _${usedPrefix}itachi_
║    ⃝⃟⃤🏰 _${usedPrefix}itori_
║    ⃝⃟⃤🏰 _${usedPrefix}kaga_
║    ⃝⃟⃤🏰 _${usedPrefix}kagura_
║    ⃝⃟⃤🏰 _${usedPrefix}kaori_
║    ⃝⃟⃤🏰 _${usedPrefix}keneki_
║    ⃝⃟⃤🏰 _${usedPrefix}kotori_
║    ⃝⃟⃤🏰 _${usedPrefix}kurumi_
║    ⃝⃟⃤🏰 _${usedPrefix}madara_
║    ⃝⃟⃤🏰 _${usedPrefix}mikasa_
║    ⃝⃟⃤🏰 _${usedPrefix}miku_
║    ⃝⃟⃤🏰 _${usedPrefix}minato_
║    ⃝⃟⃤🏰 _${usedPrefix}naruto_
║    ⃝⃟⃤🏰 _${usedPrefix}nezuko_
║    ⃝⃟⃤🏰 _${usedPrefix}sagiri_
║    ⃝⃟⃤🏰 _${usedPrefix}sasuke_
║    ⃝⃟⃤🏰 _${usedPrefix}sakura_
║    ⃝⃟⃤🏰 _${usedPrefix}cosplay_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄


*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║       ❥ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🔞 _${usedPrefix}labiblia_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║ ❥𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
║   ⃝⃟⃤🎶 _${usedPrefix}bass_
║   ⃝⃟⃤🎶 _${usedPrefix}blown_
║   ⃝⃟⃤🎶 _${usedPrefix}deep_
║   ⃝⃟⃤🎶 _${usedPrefix}earrape_
║   ⃝⃟⃤🎶 _${usedPrefix}fast_
║   ⃝⃟⃤🎶 _${usedPrefix}fat_
║   ⃝⃟⃤🎶 _${usedPrefix}nightcore_
║   ⃝⃟⃤🎶 _${usedPrefix}reverse_
║   ⃝⃟⃤🎶 _${usedPrefix}robot_
║   ⃝⃟⃤🎶 _${usedPrefix}slow_
║   ⃝⃟⃤🎶 _${usedPrefix}smooth_
║   ⃝⃟⃤🎶 _${usedPrefix}tupai_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟
╔═══════❰  𐘷  ❱══════⬣
║      ❥ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🥷🏻 _${usedPrefix}start_
║   ⃝⃟⃤🥷🏻 _${usedPrefix}next_
║   ⃝⃟⃤🥷🏻 _${usedPrefix}leave_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║              ❥𝔸𝕌𝔻𝕀𝕆𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
║ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🎧 _No hay por el momento_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║       ❥ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║   ⃝⃟⃤🧰 _${usedPrefix}chatgpt *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}chatgpt2 *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}delchatgpt
║   ⃝⃟⃤🧰 _${usedPrefix}dall-e *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}spamwa *<numero|texto|cantidad>*_
║   ⃝⃟⃤🧰 _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
║   ⃝⃟⃤🧰 _${usedPrefix}readviewonce *<imagen / video>*_
║   ⃝⃟⃤🧰 _${usedPrefix}clima *<país> <ciudad>*_
║   ⃝⃟⃤🧰 _${usedPrefix}encuesta *<texto1|texto2...>*_
║   ⃝⃟⃤🧰 _${usedPrefix}afk *<motivo>*_
║   ⃝⃟⃤🧰 _${usedPrefix}ocr *<responde a imagen>*_
║   ⃝⃟⃤🧰 _${usedPrefix}hd *<responde a imagen>*_
║   ⃝⃟⃤🧰 _${usedPrefix}acortar *<enlace / link / url>*_
║   ⃝⃟⃤🧰 _${usedPrefix}calc *<operacion math>*_
║   ⃝⃟⃤🧰 _${usedPrefix}del *<mensaje>*_
║   ⃝⃟⃤🧰 _${usedPrefix}whatmusic *<audio>*_
║   ⃝⃟⃤🧰 _${usedPrefix}readqr *<imagen (QR)>*_
║   ⃝⃟⃤🧰 _${usedPrefix}qrcode *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}readmore *<texto1| texto2>*_
║   ⃝⃟⃤🧰 _${usedPrefix}styletext *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}traducir *<texto>*_
║   ⃝⃟⃤🧰 _${usedPrefix}nowa *<numero>*_
║   ⃝⃟⃤🧰 _${usedPrefix}covid *<pais>*_
║   ⃝⃟⃤🧰 _${usedPrefix}horario_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄


*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟ 
╔═══════❰  𐘷  ❱══════⬣
║            ❥𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊❥
╚══════❰ V666 ❱══════⬣
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║   ⃝⃟⃤🎆 _${usedPrefix}sticker *<responder a imagen o video>*_
║   ⃝⃟⃤🎆 _${usedPrefix}sticker *<enlace / link / url>*_
║   ⃝⃟⃤🎆 _${usedPrefix}sticker2 *<responder a imagen o video>*_
║   ⃝⃟⃤🎆 _${usedPrefix}sticker2 *<enlace / link / url>*_
║   ⃝⃟⃤🎆 _${usedPrefix}s *<responder a imagen o video>*_
║   ⃝⃟⃤🎆 _${usedPrefix}s *<enlace / link / url>*_
║   ⃝⃟⃤🎆 _${usedPrefix}s2 *<responder a imagen o video>*_
║   ⃝⃟⃤🎆 _${usedPrefix}s2 *<enlace / link / url>*_
║   ⃝⃟⃤🎆 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
║   ⃝⃟⃤🎆 _${usedPrefix}scircle *<imagen>*_
║   ⃝⃟⃤🎆 _${usedPrefix}sremovebg *<imagen>*_
║   ⃝⃟⃤🎆 _${usedPrefix}semoji *<tipo> <emoji>*_
║   ⃝⃟⃤🎆 _${usedPrefix}attp *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}attp2 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}attp3 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}ttp *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}ttp2 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}ttp3 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}ttp4 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}ttp5 *<texto>*_
║   ⃝⃟⃤🎆 _${usedPrefix}pat *<@tag>*_
║   ⃝⃟⃤🎆 _${usedPrefix}slap *<@tag>*_
║   ⃝⃟⃤🎆 _${usedPrefix}kiss *<@tag>*_
║   ⃝⃟⃤🎆 _${usedPrefix}dado_
║   ⃝⃟⃤🎆 _${usedPrefix}wm *<packname> <author>*_
║   ⃝⃟⃤🎆 _${usedPrefix}stickermarker *<efecto> <imagen>*_
║   ⃝⃟⃤🎆 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

*━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━ۧ۟┶━ۣ۠ۛ͠͠͝ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟━━━ۧ۟┶━ϕ̶̸̷ܽۡ͟ํ̷̸̶̶͟͟  
╭─「❥𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊❥」
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
║  ⃝⃟⃤👑 > *<funcion>*
║  ⃝⃟⃤👑 => *<funcion>*
║  ⃝⃟⃤👑 $ *<funcion>*
║  ⃝⃟⃤👑 _${usedPrefix}setprefix *<prefijo>*_
║  ⃝⃟⃤👑 _${usedPrefix}desactivarwa *<numero>*_
║  ⃝⃟⃤👑 _${usedPrefix}resetprefix_
║  ⃝⃟⃤👑 _${usedPrefix}autoadmin_
║  ⃝⃟⃤👑 _${usedPrefix}leavegc_
║  ⃝⃟⃤👑 _${usedPrefix}cajafuerte_
║  ⃝⃟⃤👑 _${usedPrefix}blocklist_
║  ⃝⃟⃤👑 _${usedPrefix}block *<@tag / numero>*_
║  ⃝⃟⃤👑 _${usedPrefix}unblock *<@tag / numero>*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *restrict*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *restrict*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *autoread*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *autoread*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *public*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *public*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *pconly*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *pconly*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *gconly*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *gconly*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *anticall*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *anticall*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *antiprivado*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *antiprivado*_
║  ⃝⃟⃤👑 _${usedPrefix}enable *modejadibot*_
║  ⃝⃟⃤👑 _${usedPrefix}disable *modejadibot*_
║  ⃝⃟⃤👑 _${usedPrefix}msg *<texto>*_
║  ⃝⃟⃤👑 _${usedPrefix}banchat_
║  ⃝⃟⃤👑 _${usedPrefix}unbanchat_
║  ⃝⃟⃤👑 _${usedPrefix}banuser *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}unbanuser *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}dardiamantes *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}añadirxp *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}banuser *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}bc *<texto>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcchats *<texto>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcgc *<texto>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcgc2 *<audio>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcgc2 *<video>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcgc2 *<imagen>*_
║  ⃝⃟⃤👑 _${usedPrefix}bcbot *<texto>*_
║  ⃝⃟⃤👑 _${usedPrefix}cleartpm_
║  ⃝⃟⃤👑 _${usedPrefix}restart_
║  ⃝⃟⃤👑 _${usedPrefix}update_
║  ⃝⃟⃤👑 _${usedPrefix}banlist_
║  ⃝⃟⃤👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
║  ⃝⃟⃤👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
║  ⃝⃟⃤👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
║  ⃝⃟⃤👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
║  ⃝⃟⃤👑 _${usedPrefix}delprem *<@tag>*_
║  ⃝⃟⃤👑 _${usedPrefix}listcmd_
║  ⃝⃟⃤👑 _${usedPrefix}setppbot *<responder a imagen>*_
║  ⃝⃟⃤👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
║  ⃝⃟⃤👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗❀•°•════ஓ๑♡๑ஓ════•°•❀━≫`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(mnu)$/i
handler.exp = 0
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
