let handler = (m) => m;
handler.all = async function (m) {


  if (/^yhair|owner|cristhofer$/i.test(m.text)) {
    var ax = `𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙀𝙨 𝘾𝙧𝙞𝙨𝙩𝙝𝙤𝙛𝙚𝙧 𝙎𝙞 𝘿𝙚𝙨𝙚𝙖𝙨 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙀𝙨𝙩𝙚 𝘽𝙤𝙩 𝙎𝙪 𝙉𝙪𝙢𝙚𝙧𝙤 𝙀𝙨 : +51 902 360 712 `;


    m.reply(ax, m.chat, { mentions: conn.parseMention(ax)}); 
  return !0
}}
export default handler
