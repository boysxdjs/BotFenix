const handler = async (m, {conn}) => {
  m.reply(global.pagos);
};
handler.command = /^(mipaispago|pagos)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.pagos = `
𝙈𝙚𝙩𝙤𝙙𝙤𝙨 𝘿𝙚 𝙋𝙖𝙜𝙤 𝙋𝙖𝙧𝙖 𝙇𝙤𝙨 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙋𝙖𝙞𝙨𝙚𝙨 🥵 : 

🇲🇽 𝙈𝙚𝙭𝙞𝙘𝙤 : *105 Pesos Mexicanos*
🇪🇨 𝙀𝙘𝙪𝙖𝙙𝙤𝙧 : *6.15 Dolar*
🇨🇴 𝘾𝙤𝙡𝙤𝙢𝙗𝙞𝙖 : *24,385.54 Pesos Colombianos*
🇵🇪 𝙋𝙚𝙧𝙪 : *20 Soles*
🇨🇱 𝘾𝙝𝙞𝙡𝙚 : *5,284.59 Pesos Chilenos*
🇦🇷 𝘼𝙧𝙜𝙚𝙣𝙩𝙞𝙣𝙖 : *2,227.84 Pesos Argentinos*
🇧🇴 𝘽𝙤𝙡𝙞𝙫𝙞𝙖 : *42.52 Bolivianos*

𝘽𝙤𝙩 𝙁𝙪𝙡𝙡 : *20 Soles*
𝘽𝙤𝙩 𝙇𝙞𝙩𝙚 : *10 Soles Permannente - 6 Soles Por Mes*

💎 𝙈𝙚𝙩𝙤𝙙𝙤 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 :

*500 💎 = Marca De Agua*
*1000 💎 = Sin Marca De Agua*

🙀 𝙊𝙛𝙚𝙧𝙩𝙖𝙨 :
*15 Soles Perzonalizado*
*500 💎 Perzonalizado*
*Pregunta El Precio En Oferta De Tu Pais*

*⏱ Duracion :*

𝙀𝙢𝙥𝙞𝙚𝙯𝙖 𝟬𝟭 𝙃𝙖𝙨𝙩𝙖 𝟬𝟲

𝙀𝙢𝙥𝙞𝙚𝙯𝙖 𝟮𝟬 𝙃𝙖𝙨𝙩𝙖 𝟮𝟲

🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂
`;

