import { Pool } from "pg";
import dotEnv from 'dotenv';

dotEnv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

export default {
    query: (text, params) => pool.query(text, params),
};
