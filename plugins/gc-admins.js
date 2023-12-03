const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `🩵 𝘽𝙪𝙣𝙣𝙮 𝘽𝙤𝙩 🩵 ${pesan}`;
  const text = `
${oi}
𝙎𝙞 𝘿𝙚𝙨𝙚𝙖𝙨 𝙀𝙡 𝘽𝙤𝙩 𝘾𝙤𝙢𝙥𝙧𝙖 𝘾𝙤𝙣 wa.me/51906582530

${listAdmin}

🩵 𝘽𝙪𝙣𝙣𝙮 𝘽𝙤𝙩 🩵`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
