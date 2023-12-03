const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙎𝙞 𝘿𝙚𝙨𝙚𝙖𝙨 𝙀𝙡 𝘽𝙤𝙩 𝘾𝙤𝙢𝙥𝙧𝙖 𝘾𝙤𝙣 wa.me/51906528530 ${pesan}`;
  let teks = `𝙀𝙮 𝙈𝙖𝙡𝙙𝙞𝙩𝙤 𝙉𝙚𝙜𝙧𝙭 𝙏𝙚 𝘼𝙣𝙤𝙩𝙖𝙨 𝙊 𝙏𝙚 𝙎𝙖𝙘𝙤 𝙃𝙞𝙟𝙭 𝘿𝙚 𝙋𝙪𝙩𝙖 \n\n ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🩵| ▪ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n🩵 𝘽𝙪𝙣𝙣𝙮 𝘽𝙤𝙩 🩵`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
