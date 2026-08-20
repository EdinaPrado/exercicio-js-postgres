const { Pool } = require('pg');

const pool = new Pool({
  user: 'meu_usuario',
  host: 'localhost', // O port-forward traz o banco para o seu localhost
  database: 'meu_banco',
  password: 'minha_senha',
  port: 5433,
});

async function testarBanco() {
  try {
    // Testando a leitura da tabela criada pelo ConfigMap
    const res = await pool.query('SELECT * FROM usuarios;');
    console.log('✅ Conectado ao Kind! Usuários encontrados:', res.rows);
  } catch (err) {
    console.error('❌ Erro ao conectar ou consultar o banco:', err);
  } finally {
    await pool.end();
  }
}

testarBanco();
async function testarBanco() {
  try {
    // 1. Comando para acrescentar um novo usuário direto pelo Node
    await pool.query("INSERT INTO usuarios (nome, email) VALUES ('edina', 'edina@email.com') ON CONFLICT (email) DO NOTHING;");
    console.log('👤 Tentativa de inserção realizada!');

    // 2. Testando a leitura para ver todos os usuários atuais
    const res = await pool.query('SELECT * FROM usuarios;');
    console.log('✅ Conectado ao Kind! Usuários encontrados:', res.rows);
  } catch (err) {
    console.error('❌ Erro ao conectar ou consultar o banco:', err);
  } finally {
    await pool.end();
  }
}
