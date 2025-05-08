import mysql from 'mysql2/promise';

const pool = mysql.createPool(process.env.DATABASE_URL!);

export async function query(sql: string, values?: any[]) {
  try {
    const [results] = await pool.execute(sql, values);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}
