import { Pool } from 'pg';

const pool = new Pool ({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5433'),
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'senha123',
  database: process.env.DB_NAME || 'sentinel-postgres',
  max: 5,
  connectionTimeoutMillis: 2000,
});

export default pool