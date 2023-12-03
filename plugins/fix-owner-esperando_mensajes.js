/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*Este Comando Solo Funciona Con El Numero Del Bot Hdp : 🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*'}, {quoted: m});
  const sessionPath = './AlacranSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*Archivos Eliminados ${filesDeleted} Por 🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*🦂 𝘼𝙡𝙖𝙘𝙧𝙖𝙣 🦂*\n\n*[❗] Si el Bot no le responde a sus comandos por favor haga un pequeño spam*\n\n*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession|AlacranFix|alacranfix)$/i;
handler.rowner = true
export default handler;
