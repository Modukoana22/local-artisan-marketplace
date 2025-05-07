import mysql from 'mysql2/promise';

export async function query(sql: string, values?: any[]) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);
  const [results] = await connection.execute(sql, values);
  await connection.end();
  return results;
}
