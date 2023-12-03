const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '𝐍𝐞𝐜𝐞𝐢𝐭𝐚𝐬 𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐄𝐥 𝐒𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 : .𝐞𝐧𝐚𝐛𝐥𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭';
  if (!args[0]) throw '𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐄𝐥 𝐍𝐮𝐦𝐞𝐫𝐨 𝐃𝐞𝐥 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐐𝐮𝐞 𝐃𝐞𝐬𝐞𝐚𝐬 𝐀𝐠𝐫𝐞𝐠𝐚𝐫 𝐏𝐨𝐫 𝐄𝐣𝐞𝐦𝐩𝐥𝐨 : .𝐚𝐝𝐝 𝟓𝟏 𝟗𝟎𝟔 𝟓𝟐𝟖 𝟓𝟑𝟎';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `𝐍𝐨 𝐅𝐮𝐞 𝐏𝐨𝐬𝐢𝐛𝐥𝐞 𝐀ñ𝐚𝐝𝐢𝐫 𝐀 𝐋𝐚 𝐏𝐞𝐫𝐬𝐨𝐧𝐚 𝐏𝐨𝐫 𝐂𝐢𝐞𝐫𝐭𝐚𝐬 𝐑𝐚𝐳𝐨𝐧𝐞𝐬  : 𝐄𝐬𝐭𝐚 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨 , 𝐓𝐢𝐞𝐧𝐞 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐝𝐨 𝐒𝐮 𝐏𝐫𝐢𝐯𝐚𝐜𝐢𝐝𝐚𝐝 𝐎 𝐒𝐞 𝐇𝐚𝐲𝐚 𝐒𝐚𝐥𝐢𝐝𝐨 𝐑𝐞𝐜𝐢𝐞𝐧𝐭𝐞𝐦𝐞𝐧𝐭𝐞 𝐃𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐃𝐞𝐥 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐃𝐞 𝐈𝐠𝐮𝐚𝐥 ,𝐚𝐦𝐞𝐫𝐚 𝐒𝐞 𝐋𝐞 𝐏𝐚𝐬𝐨 𝐄𝐥 𝐋𝐢𝐧𝐤 𝐒𝐢 𝐄𝐬𝐪𝐮𝐞 𝐄𝐱𝐢𝐬𝐭𝐞 𝐄𝐥 𝐍𝐮𝐦𝐞𝐫𝐨`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `𝐇𝐞𝐲!! 𝐇𝐨𝐥𝐚, 𝐦𝐞 𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐨, 𝐬𝐨𝐲 𝐚𝐥𝐚𝐜𝐫𝐚𝐧 𝐛𝐨𝐭, 𝐲 𝐬𝐨𝐲 𝐮𝐧 𝐁𝐨𝐭 𝐩𝐚𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩, 𝐮𝐧𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐮𝐭𝐢𝐥𝐢𝐳𝐨 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐚ñ𝐚𝐝𝐢𝐫𝐭𝐞 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐩𝐞𝐫𝐨 𝐧𝐨 𝐩𝐮𝐝𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫𝐭𝐞, 𝐚𝐬𝐢 𝐪𝐮𝐞 𝐭𝐞 𝐦𝐚𝐧𝐝𝐨 𝐥𝐚 𝐢𝐧𝐯𝐢𝐭𝐚𝐜𝐢𝐨𝐧 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐭𝐞 𝐚𝐠𝐫𝐞𝐠𝐮𝐞𝐬, 𝐭𝐞 𝐞𝐬𝐩𝐞𝐫𝐚𝐦𝐨𝐬!!`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '𝐓𝐞 𝐀𝐜𝐨𝐧𝐬𝐞𝐣𝐨 𝐌𝐚𝐧𝐝𝐚𝐫𝐥𝐞 𝐄𝐥 𝐋𝐢𝐧𝐤 𝐃𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 , 𝐆𝐑𝐀𝐂𝐈𝐀𝐒';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
