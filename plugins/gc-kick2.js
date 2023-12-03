const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '𝐍𝐞𝐜𝐞𝐢𝐭𝐚𝐬 𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐄𝐥 𝐒𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 : .𝐞𝐧𝐚𝐛𝐥𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭';
  const kicktext = `𝗡𝗲𝗰𝗲𝘀𝗶𝘁𝗮𝘀 𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮𝗿 𝗔 𝗟𝗮 𝗣𝗲𝗿𝘀𝗼𝗻𝗮 𝗤𝘂𝗲 𝗗𝗲𝘀𝗲𝗮𝘀 𝗦𝗮𝗰𝗮𝗿 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼\n\n𝗣𝗼𝗿 𝗘𝗷𝗲𝗺𝗽𝗹𝗼\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
