let toM = a => '@' + a.split('@')[0]

const loading = async (conn, m) => {
    var hawemod = [
        "Calculando...",
        "Buscando posibles parejas...",
        "Analizando compatibilidad...",
        "Generando resultados...",
        "Listo para mostrar parejas..."
    ];
    let { key } = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' });

    for (let i = 0; i < hawemod.length; i++) {
        /* puedes agregar un delay */
        await conn.sendMessage(m.chat, { text: hawemod[i], edit: key });
    }
};

function handler(m, { groupMetadata, conn }) {
    loading(conn, m); // Mostrar el efecto de carga

    setTimeout(() => {
        let ps = groupMetadata.participants.map(v => v.id);
        let a = ps.getRandom();
        let b;

        do b = ps.getRandom();
        while (b === a);

        m.reply(`*${toM(a)}, 𝙳𝙴𝙱𝙴𝚁𝙸𝙰𝚂 𝙲𝙰𝚂𝙰𝚁𝚃𝙴 💍 𝙲𝙾𝙽 ${toM(b)}, 𝙷𝙰𝙲𝙴𝙽 𝚄𝙽𝙰 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💓*`, null, {
            mentions: [a, b]
        });
    }, 5000); // Esperar 5 segundos (ajusta el tiempo según tus necesidades)
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
