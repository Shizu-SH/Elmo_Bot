import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
    if (usedPrefix == 'a' || usedPrefix == 'A') return;

    try {
        const pp = imagen4; // Asegúrate de tener 'imagen4' definido previamente
        const img = './Menu.png';
        const d = new Date(new Date + 3600000);
        const locale = 'es';
        const week = d.toLocaleDateString(locale, { weekday: 'long' });
        const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
        const _uptime = process.uptime() * 1000;
        const uptime = clockString(_uptime);
        const user = global.db.data.users[m.sender];
        const { money, joincount } = global.db.data.users[m.sender];
        const { exp, limit, level, role } = global.db.data.users[m.sender];
        const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
        const more = String.fromCharCode(8206);
        const readMore = more.repeat(850);
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

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

        const loadingMessages = [
            '█▒▒▒▒▒▒▒▒▒ 10%',
            '▓▓▓▒▒▒▒▒▒▒ 30%',
            '▓▓▓▓▓▒▒▒▒▒ 50%',
            '▓▓▓▓▓▓▓▒▒▒ 70%',
            '▓▓▓▓▓▓▓▓▓▒ 90%',
            '▓▓▓▓▓▓▓▓▓▓ 100%',
        ];

        const str = `*╭━━❍Eʅɱσ - Bσƚ❍━━╮* 
 *┃ ╭━━━━━━━━━━━━━━━━╮* 
 *┃ ┃ ╭┈────────────╮* 
 *┃ ┃ │❍ 🅼🅴🅽🆄 ❍* 
 *┃ ┃ ╰┈────────────╯* 
 *┃ ╰━━━━━━━━━━━━━━━━╯*`.trim();

        const { key } = await conn.sendMessage(m.chat, { image: pp, caption: loadingMessages[0], mentions: [m.sender] });

        for (let i = 1; i < loadingMessages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            await conn.sendMessage(m.chat, { image: pp, caption: loadingMessages[i], edit: key, mentions: [m.sender] });
        }

        await new Promise(resolve => setTimeout(resolve, 500));
        await conn.sendMessage(m.chat, { image: pp, caption: str, edit: key, mentions: [m.sender] });
    } catch {
        conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
    }
};

handler.command = /^(mnup)$/i;
handler.exp = 0;
handler.fail = null;

function clockString(ms) {
    const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

export default handler;
