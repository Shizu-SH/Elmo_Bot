import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
    if (usedPrefix == 'a' || usedPrefix == 'A') return;
    try {
        const pp = imagen4; // Asegúrate de tener 'imagen4' definido previamente
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
        
        const loadingMessages = [
            'Sigueme en Twiter',
            'atom.bio/shizu.sh',
            '(¬‿¬)',
            `*╭━━❍Eʅɱσ - Bσƚ❍━━╮* 
 *┃ ╭━━━━━━━━━━━━━━━━╮* 
 *┃ ┃ ╭┈────────────╮* 
 *┃ ┃ │❍ 🅼🅴🅽🆄 ❍* 
 *┃ ┃ ╰┈────────────╯* 
 *┃ ╰━━━━━━━━━━━━━━━━╯* 
 *┣━━━▢ ʙᴜᴇɴᴀꜱ, ${taguser}*•`.trim()
        ];
        
        let quoted;
        if (m.isGroup) {
            quoted = { quoted: m };
        } else {
            quoted = {
                quoted: {
                    'key': {
                        'participants': '0@s.whatsapp.net',
                        'remoteJid': 'status@broadcast',
                        'fromMe': false,
                        'id': 'Halo'
                    },
                    'message': {
                        'contactMessage': {
                            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                        },
                        'participant': '0@s.whatsapp.net'
                    }
                }
            };
        }
        
        const { key } = await conn.sendMessage(m.chat, { image: pp, caption: loadingMessages[0], mentions: [m.sender] });

        for (let i = 1; i < loadingMessages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
            await conn.sendMessage(m.chat, { image: pp, caption: loadingMessages[i], edit: key, mentions: [m.sender] });
        }

    } catch {
        conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
    }
};

handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 0;
handler.fail = null;

export default handler;
