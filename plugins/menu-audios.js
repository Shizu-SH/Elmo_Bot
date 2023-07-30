import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen1
//let vn = './media/menu.mp3'
let img =  './Music.png'
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
let str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *乇ㄥ爪ㄖ - 乃ㄖㄒ* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*
∘ _awebo_
∘ _elmo sabe donde vives_
∘ _droga_
∘ _chupa chupa_
∘ _cariñosas_
∘ _te revelas contra elmo?_
∘ _que dijistes_
∘ _te crees mejor que Elmo_
∘ _Elmo es chingon_
∘ _Noche de paz_
∘ _Buenos dias_
∘ _Audio hentai_
∘ _Fiesta del admin_
∘ _Fiesta del admin 2_
∘ _Fiesta del administrador_ 
∘ _Viernes_
∘ _Mierda de Bot_
∘ _Me olvidé_
∘ _Baneado_
∘ _Feliz navidad_
∘ _A nadie le importa_
∘ _Sexo_
∘ _Vete a la vrg_
∘ _Ara ara_
∘ _Hola_
∘ _Un pato_
∘ _Nyanpasu_
∘ _Te amo_
∘ _Yamete_
∘ _Te diagnostico con gay_
∘ _Quien es tu sempai botsito 7w7_
∘ _Bañate_
∘ _Vivan los novios_
∘ _Marica quien_
∘ _Es puto_
∘ _La biblia_
∘ _Onichan_
∘ _Bot puto_
∘ _Feliz cumpleaños_
∘ _Pasa pack Bot_
∘ _Atencion grupo_
∘ _Homero chino_
∘ _Oh me vengo_
∘ _Murio el grupo_
∘ _Siuuu_
∘ _Rawr_
∘ _UwU_
∘ _:c_
∘ _a_
∘ _Hey_
∘ _Enojado_
∘ _Enojada_
∘ _Chao_
∘ _Hentai_
∘ _Triste_
∘ _Estoy triste_
∘ _Me pican los cocos_
∘ _Contexto_
∘ _Me voy_
∘ _Tengo los calzones del admin_
∘ _Entrada épica_ 
∘ _Esto va ser épico papus_
∘ _Ingresa épicamente_
∘ _Bv_
∘ _Yoshi_
∘ _No digas eso papu_
∘ _Ma ma masivo_
∘ _Masivo_
∘ _Basado_
∘ _Basada_
∘ _Fino señores_
∘ _Verdad que te engañe_
∘ _Sus_
∘ _Ohayo_
∘ _La voz de hombre_
∘ _Pero esto_
∘ _Bien pensado Woody_
∘ _Jesucristo_
∘ _Wtf_
∘ _Una pregunta_
∘ _Que sucede_
∘ _Hablame_
∘ _Pikachu_
∘ _Niconico_
∘ _Yokese_
∘ _Omaiga_
∘ _Nadie te preguntó_
∘ _Bueno si_
∘ _Usted está detenido_
∘ _No me hables_
∘ _No chu_
∘ _El pepe_
∘ _Pokémon_
∘ _No me hagas usar esto_
∘ _Esto va para ti_
∘ _Abduzcan_
∘ _Joder_
∘ _Hablar primos_
∘ _Mmm_
∘ _Orale_
∘ _Me anda buscando anonymous_
∘ _Blackpink in your area_
∘ _Cambiate a Movistar_
∘ _Momento equisde | Momento XD_
∘ _Todo bien | 😇_
∘ _Te gusta el Pepino | 🥒_
∘ _El tóxico_
∘ _Moshi moshi_
∘ _Calla Fan de BTS_
∘ _Que tal grupo_
∘ _Muchachos_
∘ _Está Zzzz | 😴_
∘ _Goku Pervertido_
∘ _Potaxio | 🥑_
∘ _Nico nico_
∘ _El rap de Fernanfloo_
∘ _Tal vez_
∘ _Corte corte_
∘ _Buenas noches_
∘ _Porque ta tite_
∘ _Eres Fuerte_
∘ _Bueno Master | 🫂_
∘ _No Rompas más_
∘ _Traiganle una falda_
∘ _Se están riendo de mí_
∘ _Su nivel de pendejo_
∘ _Bienvenido/a 🥳 | 👋_
∘ _Elmo sabe donde vives_
∘ _tunometecabrasaramambiche_
∘ _Y este quien es_
∘ _Motivación_
∘ _En caso de una investigación_
∘ _Buen día grupo | 🙌_
∘ _Las reglas del grupo_
∘ _Oye | 🐔_
∘ _Ig de la minita_
∘ _Gaspi frase_
∘ _Vamos!!_
∘ _Se pudrio_
∘ _Gol!_

╭════• ೋ•✧๑♡๑✧•ೋ •════╮
                      🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
         0:40 ━❍──────── -8:39
         ↻     ⊲  Ⅱ  ⊳     ↺
         VOLUMEN: ▁▂▃▄▅▆▇ 100%
╰════• ೋ•✧๑♡๑✧•ೋ •════╯
┗━━━━━━━━━━━━━━━━┛`.trim()
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
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i
handler.exp = 0
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
