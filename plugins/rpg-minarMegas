const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 5);
  const time = global.db.data.users[m.sender].lastmiming + 5;
  if (new Date - global.db.data.users[m.sender].lastmiming < 5) throw `*[ ⏲️ ] 𝙴𝚜𝚙𝚎𝚛𝚊 ${msToTime(time - new Date())} 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚖𝚒𝚗𝚊𝚛*`;
  m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${mg} MEGAS*`);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minarmg'];
handler.tags = ['xp'];
handler.command = ['minarmg', 'mimingmg', 'minemg'];
handler.fail = null;
handler.mg = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
