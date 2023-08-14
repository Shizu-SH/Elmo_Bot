const handler = async (m, {conn, command, text}) => {
  const love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`.trim();
  m.reply(love, null, {mentions: conn.parseMention(love)});
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(love)$/i;
export default handler;
async function loading () {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await conn.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < hawemod.length; i++) {
/* puedes agregar un delay */
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key });
}
}
