
quoted = {quoted: {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}};

let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`.trim()
const { key } = await conn.sendMessage(m.chat, {image: pp, caption: 'Calculando Amor', mentions: [m.sender]}, quoted);
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: '▓▓▓▒▒▒▒▒▒▒ 30%', edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: '▓▓▓▓▓▒▒▒▒▒ 50%', edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: '▓▓▓▓▓▓▓▒▒▒ 70%', edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: '▓▓▓▓▓▓▓▓▓▒ 90%', edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: '▓▓▓▓▓▓▓▓▓▓ 100%', edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
await conn.sendMessage(m.chat, {image: pp, caption: str, edit: key, mentions: [m.sender]});
await new Promise(resolve => setTimeout(resolve, 500));
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

