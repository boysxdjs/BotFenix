const handler = async (m, {conn}) => {
  m.reply(global.nuevos);
};
handler.command = /^(new|comandosnuevos|nuevos)$/i;
export default handler;

global.nuevos = `
*Hola Estos Son Los Comandos Nuevos 🦂*

*Comandos :*

_follar_ 🙊
_nalga_ 😂
_huevo_ 😈
_minovia_ 😻
_minovio_ 😻
_listavs_ 🙀
_yape_ 👀
_vendedores_ 🤑
_cuando_ 🤪
_ship5_ 😏
_ship2_ 😏
_formartrio_ 🥵
_zodiac_ 🤓

*Nota :* _Recuerda Para Que Funciones Escriba El . +El Comando Que Desee Usar 🦂_

*Ejemplo : .yape*
`;
