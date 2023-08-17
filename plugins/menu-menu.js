import fetch from 'node-fetch';
const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    const link = await(await fetch('https://shizu.boxmine.xyz')).buffer();
    const titulo = global.wm  
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    let quoted
    if (m.isGroup) {
    quoted = {quoted: m}      
    } else {
    quoted = {quoted: {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}};
    }
    const str = `╭━━❍Eʅɱσ - Bσƚ❍━━╮ 
 ┃ ╭━━━━━━━━━━━━━━━━╮ 
 ┃ ┃ ╭┈────────────╮ 
 ┃ ┃ │❍ 🅼🅴🅽🆄 ❍ 
 ┃ ┃ ╰┈────────────╯ 
 ┃ ╰━━━━━━━━━━━━━━━━╯ 
 ┣━━━▢ ʙᴜᴇɴᴀꜱ, ${taguser}• 
 ┃╭━━━━━━━━━━━━━━━━╾• 
 ┃┃  ❍ ${vs} ❍ 
 ┃┣━━━━━━━━━━━━━━━━╾• 
 ┃┃ ⋄ ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ:  Shizu-Hub 
 ┃┃ ⋄ ꜰᴇᴄʜᴀ » ${date} 
 ┃┃ ⋄ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ » ${uptime} 
 ┃┃ ⋄ ʟᴇɴɢᴜᴀᴊᴇ » ꜱᴘᴀɴɪꜱʜ 
 ┃┃ ⋄ ᴜꜱᴜᴀʀɪᴏꜱ » ${rtotalreg} 
 ┃╰━━━━━━━━━━━━━━━━╾• 
 ╰━━━╼Eʅɱσ - Bσƚ╾━━━╯ 

 ╭━━━━━━━━━━━━━━━━╮
 ┃ ⋄ ᴄᴏᴍᴀɴᴅᴏꜱ: » shizu.boxmine.xyz
 ╰━━━━━━━━━━━━━━━━╾•

 ╭━━━━━━━━━━━━━━━━╮
     INFO DEL USUARIO          
 ╭━━━━━━━━━━━━━━━━╯
 ║👤 NOMBRE: ${taguser} 
 ║🧰 EXPERIENCIA ➟ ${exp} 
 ║⚓ RANGO ➟ ${role}* 
 ║💎 DIAMANTES ➟ ${limit} 
 ║💸 DOLARES ➟ ${money} 
 ╰═══════════════ ✧ 
${readMore}

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕀ℕ𝔽𝕆 𝔹𝕆𝕋❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 ${usedPrefix}terminosycondiciones
┣ ඬ⃟ 💟 ${usedPrefix}grupos
┣ ඬ⃟ 💟 ${usedPrefix}estado
┣ ඬ⃟ 💟 ${usedPrefix}infobot
┣ ඬ⃟ 💟 ${usedPrefix}labiblia
┣ ඬ⃟ 💟 ${usedPrefix}animes
┣ ඬ⃟ 💟 ${usedPrefix}speedtest
┣ ඬ⃟ 💟 ${usedPrefix}donar
┣ ඬ⃟ 💟 ${usedPrefix}grouplist
┣ ඬ⃟ 💟 ${usedPrefix}owner
┣ ඬ⃟ 💟 ${usedPrefix}script
┣ ඬ⃟ 💟 ${usedPrefix}listprem
┣ ඬ⃟ 💟 Bot (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 ${usedPrefix}join <enlace / link / url>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋❥」 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 ${usedPrefix}serbot
┣ ඬ⃟ 🤖 ${usedPrefix}stop
┣ ඬ⃟ 🤖 ${usedPrefix}bots
┗━━━━━━━━━━━━━━━━┛  

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕁𝕌𝔼𝔾𝕆𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
┣ ඬ⃟ 🎖️ ${usedPrefix}ppt <papel / tijera /piedra>
┣ ඬ⃟ 🎖️ ${usedPrefix}prostituto <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}prostituta <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}gay2 <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}lesbiana <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}pajero <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}pajera <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}puto <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}puta <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}manco <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}manca <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}rata <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}love <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}doxear <nombre / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}pregunta <texto>
┣ ඬ⃟ 🎖️ ${usedPrefix}suitpvp <@tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}slot <apuesta>
┣ ඬ⃟ 🎖️ ${usedPrefix}ttt <nombre sala>
┣ ඬ⃟ 🎖️ ${usedPrefix}delttt
┣ ඬ⃟ 🎖️ ${usedPrefix}acertijo
┣ ඬ⃟ 🎖️ ${usedPrefix}simi <texto>
┣ ඬ⃟ 🎖️ ${usedPrefix}top <texto>
┣ ඬ⃟ 🎖️ ${usedPrefix}topgays
┣ ඬ⃟ 🎖️ ${usedPrefix}topotakus
┣ ඬ⃟ 🎖️ ${usedPrefix}formarpareja
┣ ඬ⃟ 🎖️ ${usedPrefix}verdad
┣ ඬ⃟ 🎖️ ${usedPrefix}reto
┣ ඬ⃟ 🎖️ ${usedPrefix}cancion
┣ ඬ⃟ 🎖️ ${usedPrefix}pista
┣ ඬ⃟ 🎖️ ${usedPrefix}akinator
┣ ඬ⃟ 🎖️ ${usedPrefix}wordfind
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ❥」 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ ${usedPrefix}enable welcome
┣ ඬ⃟ ☑️ ${usedPrefix}disable welcome
┣ ඬ⃟ ☑️ ${usedPrefix}enable modohorny
┣ ඬ⃟ ☑️ ${usedPrefix}disable modohorny
┣ ඬ⃟ ☑️ ${usedPrefix}enable antilink
┣ ඬ⃟ ☑️ ${usedPrefix}disable antilink
┣ ඬ⃟ ☑️ ${usedPrefix}enable antilink2
┣ ඬ⃟ ☑️ ${usedPrefix}disable antilink2
┣ ඬ⃟ ☑️ ${usedPrefix}enable detect
┣ ඬ⃟ ☑️ ${usedPrefix}disable detect
┣ ඬ⃟ ☑️ ${usedPrefix}enable audios
┣ ඬ⃟ ☑️ ${usedPrefix}disable audios
┣ ඬ⃟ ☑️ ${usedPrefix}enable autosticker
┣ ඬ⃟ ☑️ ${usedPrefix}disable autosticker
┣ ඬ⃟ ☑️ ${usedPrefix}enable antiviewonce
┣ ඬ⃟ ☑️ ${usedPrefix}disable antiviewonce
┣ ඬ⃟ ☑️ ${usedPrefix}enable antitoxic
┣ ඬ⃟ ☑️ ${usedPrefix}disable antitoxic
┣ ඬ⃟ ☑️ ${usedPrefix}enable antitraba
┣ ඬ⃟ ☑️ ${usedPrefix}disable antitraba
┣ ඬ⃟ ☑️ ${usedPrefix}enable antiarabes
┣ ඬ⃟ ☑️ ${usedPrefix}disable antiarabes
┣ ඬ⃟ ☑️ ${usedPrefix}enable modoadmin
┣ ඬ⃟ ☑️ ${usedPrefix}disable modoadmin
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 ${usedPrefix}reporte <texto>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 ${usedPrefix}instagram <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}mediafire <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}gitclone <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}gdrive <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}tiktok <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}xnxxdl <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}xvideosdl <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}twitter <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}fb <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytshort <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp3 <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp4 <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp3doc <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp4doc <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}videodoc <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}dapk2 <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}stickerpack <enlace / link / url>
┣ ඬ⃟ 📥 ${usedPrefix}play <texto>
┣ ඬ⃟ 📥 ${usedPrefix}play2 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}play.1 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}play.2 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playdoc <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playdoc2 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playlist <texto>
┣ ඬ⃟ 📥 ${usedPrefix}spotify <texto>
┣ ඬ⃟ 📥 ${usedPrefix}ringtone <texto>
┣ ඬ⃟ 📥 ${usedPrefix}soundcloud <texto>
┣ ඬ⃟ 📥 ${usedPrefix}imagen <texto>
┣ ඬ⃟ 📥 ${usedPrefix}pinterest <texto>
┣ ඬ⃟ 📥 ${usedPrefix}wallpaper <texto>
┣ ඬ⃟ 📥 ${usedPrefix}pptiktok <nombre de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}igstalk <nombre de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}igstory <nombre de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}tiktokstalk <username>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊❥」 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 ${usedPrefix}cuevana <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}pelisplus <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}modapk <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}stickersearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}stickersearch2 <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}xnxxsearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}animeinfo <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}google <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}letra <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}wikipedia <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}ytsearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}playstore <texto>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔾ℝ𝕌ℙ𝕆𝕊❥」 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 ${usedPrefix}add <numero>
┣ ඬ⃟ 💎 ${usedPrefix}kick <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}kick2 <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}listanum <texto>
┣ ඬ⃟ 💎 ${usedPrefix}kicknum <texto>
┣ ඬ⃟ 💎 ${usedPrefix}grupo <abrir / cerrar>
┣ ඬ⃟ 💎 ${usedPrefix}grouptime <opcion> <tiempo>
┣ ඬ⃟ 💎 ${usedPrefix}promote <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}demote <@tag>
┣ ඬ⃟ 💎 admins <texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 ${usedPrefix}demote <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}infogroup
┣ ඬ⃟ 💎 ${usedPrefix}resetlink
┣ ඬ⃟ 💎 ${usedPrefix}link
┣ ඬ⃟ 💎 ${usedPrefix}setname <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setdesc <texto>
┣ ඬ⃟ 💎 ${usedPrefix}invocar <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setwelcome <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setbye <texto>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag <texto>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag <audio>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag <video>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag <imagen>
┣ ඬ⃟ 💎 ${usedPrefix}warn <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}unwarn <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}listwarn
┣ ඬ⃟ 💎 ${usedPrefix}fantasmas
┣ ඬ⃟ 💎 ${usedPrefix}destraba
┣ ඬ⃟ 💎 ${usedPrefix}setpp <imagen>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 ${usedPrefix}toanime <imagen>
┣ ඬ⃟ 🧧 ${usedPrefix}togifaud <video>
┣ ඬ⃟ 🧧 ${usedPrefix}toimg <sticker>
┣ ඬ⃟ 🧧 ${usedPrefix}tomp3 <video>
┣ ඬ⃟ 🧧 ${usedPrefix}tomp3 <nota de voz>
┣ ඬ⃟ 🧧 ${usedPrefix}toptt <video / audio>
┣ ඬ⃟ 🧧 ${usedPrefix}tovideo <sticker>
┣ ඬ⃟ 🧧 ${usedPrefix}tourl <video / imagen / audio>
┣ ඬ⃟ 🧧 ${usedPrefix}tts es <texto>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ ${usedPrefix}logos <efecto> <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}logochristmas <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}logocorazon <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}ytcomment <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}hornycard <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}simpcard <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}lolice <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}itssostupid
┣ ඬ⃟ 🖍️ ${usedPrefix}pixelar
┣ ඬ⃟ 🖍️ ${usedPrefix}blur
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 ${usedPrefix}piropo
┣ ඬ⃟ 🥀 ${usedPrefix}consejo
┣ ඬ⃟ 🥀 ${usedPrefix}fraseromantica
┣ ඬ⃟ 🥀 ${usedPrefix}historiaromantica
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℝ𝔸ℕ𝔻𝕆𝕄❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 ${usedPrefix}kpop <blackpink / exo / bts>
┣ ඬ⃟ 👾 ${usedPrefix}cristianoronaldo
┣ ඬ⃟ 👾 ${usedPrefix}messi
┣ ඬ⃟ 👾 ${usedPrefix}cat
┣ ඬ⃟ 👾 ${usedPrefix}dog
┣ ඬ⃟ 👾 ${usedPrefix}meme
┣ ඬ⃟ 👾 ${usedPrefix}itzy
┣ ඬ⃟ 👾 ${usedPrefix}blackpink
┣ ඬ⃟ 👾 ${usedPrefix}lolivid
┣ ඬ⃟ 👾 ${usedPrefix}loli
┣ ඬ⃟ 👾 ${usedPrefix}navidad
┣ ඬ⃟ 👾 ${usedPrefix}ppcouple
┣ ඬ⃟ 👾 ${usedPrefix}wpmontaña
┣ ඬ⃟ 👾 ${usedPrefix}pubg
┣ ඬ⃟ 👾 ${usedPrefix}wpgaming
┣ ඬ⃟ 👾 ${usedPrefix}wpaesthetic
┣ ඬ⃟ 👾 ${usedPrefix}wpaesthetic2
┣ ඬ⃟ 👾 ${usedPrefix}wprandom
┣ ඬ⃟ 👾 ${usedPrefix}wallhp
┣ ඬ⃟ 👾 ${usedPrefix}wpvehiculo
┣ ඬ⃟ 👾 ${usedPrefix}wpmoto
┣ ඬ⃟ 👾 ${usedPrefix}coffee
┣ ඬ⃟ 👾 ${usedPrefix}pentol
┣ ඬ⃟ 👾 ${usedPrefix}caricatura
┣ ඬ⃟ 👾 ${usedPrefix}ciberespacio
┣ ඬ⃟ 👾 ${usedPrefix}technology
┣ ඬ⃟ 👾 ${usedPrefix}doraemon
┣ ඬ⃟ 👾 ${usedPrefix}hacker
┣ ඬ⃟ 👾 ${usedPrefix}planeta
┣ ඬ⃟ 👾 ${usedPrefix}randomprofile
┣ ඬ⃟ 👾 ${usedPrefix}neko
┣ ඬ⃟ 👾 ${usedPrefix}waifu
┣ ඬ⃟ 👾 ${usedPrefix}akira
┣ ඬ⃟ 👾 ${usedPrefix}akiyama
┣ ඬ⃟ 👾 ${usedPrefix}anna
┣ ඬ⃟ 👾 ${usedPrefix}asuna
┣ ඬ⃟ 👾 ${usedPrefix}ayuzawa
┣ ඬ⃟ 👾 ${usedPrefix}boruto
┣ ඬ⃟ 👾 ${usedPrefix}chiho
┣ ඬ⃟ 👾 ${usedPrefix}chitoge
┣ ඬ⃟ 👾 ${usedPrefix}deidara
┣ ඬ⃟ 👾 ${usedPrefix}erza
┣ ඬ⃟ 👾 ${usedPrefix}elaina
┣ ඬ⃟ 👾 ${usedPrefix}eba
┣ ඬ⃟ 👾 ${usedPrefix}emilia
┣ ඬ⃟ 👾 ${usedPrefix}hestia
┣ ඬ⃟ 👾 ${usedPrefix}hinata
┣ ඬ⃟ 👾 ${usedPrefix}inori
┣ ඬ⃟ 👾 ${usedPrefix}isuzu
┣ ඬ⃟ 👾 ${usedPrefix}itachi
┣ ඬ⃟ 👾 ${usedPrefix}itori
┣ ඬ⃟ 👾 ${usedPrefix}kaga
┣ ඬ⃟ 👾 ${usedPrefix}kagura
┣ ඬ⃟ 👾 ${usedPrefix}kaori
┣ ඬ⃟ 👾 ${usedPrefix}keneki
┣ ඬ⃟ 👾 ${usedPrefix}kotori
┣ ඬ⃟ 👾 ${usedPrefix}kurumi
┣ ඬ⃟ 👾 ${usedPrefix}madara
┣ ඬ⃟ 👾 ${usedPrefix}mikasa
┣ ඬ⃟ 👾 ${usedPrefix}miku
┣ ඬ⃟ 👾 ${usedPrefix}minato
┣ ඬ⃟ 👾 ${usedPrefix}naruto
┣ ඬ⃟ 👾 ${usedPrefix}nezuko
┣ ඬ⃟ 👾 ${usedPrefix}sagiri
┣ ඬ⃟ 👾 ${usedPrefix}sasuke
┣ ඬ⃟ 👾 ${usedPrefix}sakura
┣ ඬ⃟ 👾 ${usedPrefix}cosplay
┗━━━━━━━━━━━━━━━━┛


🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔞 ${usedPrefix}labiblia
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉
┣ ඬ⃟ 🎤 ${usedPrefix}bass
┣ ඬ⃟ 🎤 ${usedPrefix}blown
┣ ඬ⃟ 🎤 ${usedPrefix}deep
┣ ඬ⃟ 🎤 ${usedPrefix}earrape
┣ ඬ⃟ 🎤 ${usedPrefix}fast
┣ ඬ⃟ 🎤 ${usedPrefix}fat
┣ ඬ⃟ 🎤 ${usedPrefix}nightcore
┣ ඬ⃟ 🎤 ${usedPrefix}reverse
┣ ඬ⃟ 🎤 ${usedPrefix}robot
┣ ඬ⃟ 🎤 ${usedPrefix}slow
┣ ඬ⃟ 🎤 ${usedPrefix}smooth
┣ ඬ⃟ 🎤 ${usedPrefix}tupai
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 ${usedPrefix}start
┣ ඬ⃟ 📳 ${usedPrefix}next
┣ ඬ⃟ 📳 ${usedPrefix}leave
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝔸𝕌𝔻𝕀𝕆𝕊❥」  
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ - 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .) 
┃ - (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 No hay por el momento
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ ${usedPrefix}chatgpt <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}chatgpt2 <texto>
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ ${usedPrefix}dall-e <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}spamwa <numero|texto|cantidad>
┣ ඬ⃟ 🛠️ ${usedPrefix}tamaño <cantidad> <imagen / video>
┣ ඬ⃟ 🛠️ ${usedPrefix}readviewonce <imagen / video>
┣ ඬ⃟ 🛠️ ${usedPrefix}clima <país> <ciudad>
┣ ඬ⃟ 🛠️ ${usedPrefix}encuesta <texto1|texto2...>
┣ ඬ⃟ 🛠️ ${usedPrefix}afk <motivo>
┣ ඬ⃟ 🛠️ ${usedPrefix}ocr <responde a imagen>
┣ ඬ⃟ 🛠️ ${usedPrefix}hd <responde a imagen>
┣ ඬ⃟ 🛠️ ${usedPrefix}acortar <enlace / link / url>
┣ ඬ⃟ 🛠️ ${usedPrefix}calc <operacion math>
┣ ඬ⃟ 🛠️ ${usedPrefix}del <mensaje>
┣ ඬ⃟ 🛠️ ${usedPrefix}whatmusic <audio>
┣ ඬ⃟ 🛠️ ${usedPrefix}readqr <imagen (QR)>
┣ ඬ⃟ 🛠️ ${usedPrefix}qrcode <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}readmore <texto1| texto2>
┣ ඬ⃟ 🛠️ ${usedPrefix}styletext <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}traducir <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}nowa <numero>
┣ ඬ⃟ 🛠️ ${usedPrefix}covid <pais>
┣ ඬ⃟ 🛠️ ${usedPrefix}horario
┗━━━━━━━━━━━━━━━━┛


🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 ${usedPrefix}sticker <responder a imagen o video>
┣ ඬ⃟ 👽 ${usedPrefix}sticker <enlace / link / url>
┣ ඬ⃟ 👽 ${usedPrefix}sticker2 <responder a imagen o video>
┣ ඬ⃟ 👽 ${usedPrefix}sticker2 <enlace / link / url>
┣ ඬ⃟ 👽 ${usedPrefix}s <responder a imagen o video>
┣ ඬ⃟ 👽 ${usedPrefix}s <enlace / link / url>
┣ ඬ⃟ 👽 ${usedPrefix}s2 <responder a imagen o video>
┣ ඬ⃟ 👽 ${usedPrefix}s2 <enlace / link / url>
┣ ඬ⃟ 👽 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
┣ ඬ⃟ 👽 ${usedPrefix}scircle <imagen>
┣ ඬ⃟ 👽 ${usedPrefix}sremovebg <imagen>
┣ ඬ⃟ 👽 ${usedPrefix}semoji <tipo> <emoji>
┣ ඬ⃟ 👽 ${usedPrefix}attp <texto>
┣ ඬ⃟ 👽 ${usedPrefix}attp2 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}attp3 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp2 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp3 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp4 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp5 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}pat <@tag>
┣ ඬ⃟ 👽 ${usedPrefix}slap <@tag>
┣ ඬ⃟ 👽 ${usedPrefix}kiss <@tag>
┣ ඬ⃟ 👽 ${usedPrefix}dado
┣ ඬ⃟ 👽 ${usedPrefix}wm <packname> <author>
┣ ඬ⃟ 👽 ${usedPrefix}stickermarker <efecto> <imagen>
┣ ඬ⃟ 👽 ${usedPrefix}stickerfilter <efecto> <imagen>
┗━━━━━━━━━━━━━━━━┛

🍁᭢━━━━━━━━━᭥🍁᭢
╭─「❥𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊❥」
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > <funcion>
┣ ඬ⃟ 👑 => <funcion>
┣ ඬ⃟ 👑 $ <funcion>
┣ ඬ⃟ 👑 ${usedPrefix}setprefix <prefijo>
┣ ඬ⃟ 👑 ${usedPrefix}desactivarwa <numero>
┣ ඬ⃟ 👑 ${usedPrefix}resetprefix
┣ ඬ⃟ 👑 ${usedPrefix}autoadmin
┣ ඬ⃟ 👑 ${usedPrefix}leavegc
┣ ඬ⃟ 👑 ${usedPrefix}cajafuerte
┣ ඬ⃟ 👑 ${usedPrefix}blocklist
┣ ඬ⃟ 👑 ${usedPrefix}block <@tag / numero>
┣ ඬ⃟ 👑 ${usedPrefix}unblock <@tag / numero>
┣ ඬ⃟ 👑 ${usedPrefix}enable restrict
┣ ඬ⃟ 👑 ${usedPrefix}disable restrict
┣ ඬ⃟ 👑 ${usedPrefix}enable autoread
┣ ඬ⃟ 👑 ${usedPrefix}disable autoread
┣ ඬ⃟ 👑 ${usedPrefix}enable public
┣ ඬ⃟ 👑 ${usedPrefix}disable public
┣ ඬ⃟ 👑 ${usedPrefix}enable pconly
┣ ඬ⃟ 👑 ${usedPrefix}disable pconly
┣ ඬ⃟ 👑 ${usedPrefix}enable gconly
┣ ඬ⃟ 👑 ${usedPrefix}disable gconly
┣ ඬ⃟ 👑 ${usedPrefix}enable anticall
┣ ඬ⃟ 👑 ${usedPrefix}disable anticall
┣ ඬ⃟ 👑 ${usedPrefix}enable antiprivado
┣ ඬ⃟ 👑 ${usedPrefix}disable antiprivado
┣ ඬ⃟ 👑 ${usedPrefix}enable modejadibot
┣ ඬ⃟ 👑 ${usedPrefix}disable modejadibot
┣ ඬ⃟ 👑 ${usedPrefix}msg <texto>
┣ ඬ⃟ 👑 ${usedPrefix}banchat
┣ ඬ⃟ 👑 ${usedPrefix}unbanchat
┣ ඬ⃟ 👑 ${usedPrefix}banuser <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}unbanuser <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}dardiamantes <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}añadirxp <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}banuser <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}bc <texto>
┣ ඬ⃟ 👑 ${usedPrefix}bcchats <texto>
┣ ඬ⃟ 👑 ${usedPrefix}bcgc <texto>
┣ ඬ⃟ 👑 ${usedPrefix}bcgc2 <audio>
┣ ඬ⃟ 👑 ${usedPrefix}bcgc2 <video>
┣ ඬ⃟ 👑 ${usedPrefix}bcgc2 <imagen>
┣ ඬ⃟ 👑 ${usedPrefix}bcbot <texto>
┣ ඬ⃟ 👑 ${usedPrefix}cleartpm
┣ ඬ⃟ 👑 ${usedPrefix}restart
┣ ඬ⃟ 👑 ${usedPrefix}update
┣ ඬ⃟ 👑 ${usedPrefix}banlist
┣ ඬ⃟ 👑 ${usedPrefix}addprem <@tag> <tiempo>
┣ ඬ⃟ 👑 ${usedPrefix}addprem2 <@tag> <tiempo>
┣ ඬ⃟ 👑 ${usedPrefix}addprem3 <@tag> <tiempo>
┣ ඬ⃟ 👑 ${usedPrefix}addprem4 <@tag> <tiempo>
┣ ඬ⃟ 👑 ${usedPrefix}delprem <@tag>
┣ ඬ⃟ 👑 ${usedPrefix}listcmd
┣ ඬ⃟ 👑 ${usedPrefix}setppbot <responder a imagen>
┣ ඬ⃟ 👑 ${usedPrefix}addcmd <texto> <responder a sticker/imagen>
┣ ඬ⃟ 👑 ${usedPrefix}delcmd <responder a sticker/imagen con comando o texto asignado>
┗━━━━━━━━━━━━━━━━┛`.trim()
const { key } = await conn.sendMessage(m.chat, {text: `Sigueme en Twiter`.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": `${titulo}`, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});      
await new Promise(resolve => setTimeout(resolve, 1000));
await conn.sendMessage(m.chat, {text: 'atom.bio/shizu.sh', edit: key, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": `${titulo}`, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}});
await new Promise(resolve => setTimeout(resolve, 1000));
await conn.sendMessage(m.chat, {text: '(¬‿¬)', edit: key, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": `${titulo}`, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}});
await new Promise(resolve => setTimeout(resolve, 1000));    
await conn.sendMessage(m.chat, {text: str, edit: key, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": `${titulo}`, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}});
await new Promise(resolve => setTimeout(resolve, 1000));
// await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})      
      
  } catch (e) { 
    console.log(e)  
    conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd|shizu)$/i;
handler.exp = 0;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
