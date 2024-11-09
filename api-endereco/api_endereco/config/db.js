const { Pool } = require('pg');

const pool = new Pool({
    connectionString: `postgresql://neondb_owner:Xtw5YmhNA7ld@ep-sparkling-credit-a5ey2odc-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require`,
});

module.exports = pool;

const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('Conexão ao banco de dados bem-sucedida!');
        client.release();
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
};

testConnection();