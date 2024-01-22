const handler = async (m, {conn}) => {
  m.reply(global.vendedores);
};
handler.command = /^(vendedores|Vendedores)$/i;
export default handler;

global.vendedores = `
𝗘𝘀𝘁𝗼𝘀 𝗦𝗼𝗻 𝗟𝗼𝘀 𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝗗𝗲 𝗔𝗹𝗮𝗰𝗿𝗮𝗻 𝗕𝗼𝘁 🙊

*🦂 Alacran  : wa.me/51926933818* 

*🇵🇪 Vendedora Ofc Peru : wa.me/51978420752*
`;
