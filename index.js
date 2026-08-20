const { Pool } = require('pg');

const pool = new Pool({
  user: 'meu_usuario',
  host: 'localhost',
  database: 'meu_banco',
  password: 'minha_senha',
  port: 5433,
});

async function criarTabela() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);
    console.log('✅ Tabela usuarios verificada/criada com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao criar tabela:', err);
  }
}

async function rodarProjeto() {
  try {
    // 1. Garante que a tabela existe
    await criarTabela();

    // 2. Tenta inserir o usuário (Evita duplicados com ON CONFLICT)
    await pool.query(`
      INSERT INTO usuarios (nome, email) 
      VALUES ('edina', 'edina@email.com') 
      ON CONFLICT (email) DO NOTHING;
    `);
    console.log('🚀 Tentativa de inserção realizada!');

    // 3. Lê e exibe todos os usuários salvos no banco
    const res = await pool.query('SELECT * FROM usuarios;');
    console.log('📊 Usuários encontrados:', res.rows);

  } catch (err) {
    console.error('❌ Erro ao executar o projeto:', err);
  } finally {
    // Fecha a conexão apenas UMA vez no final de tudo
    await pool.end();
  }
}

rodarProjeto();

