import pool from './src/dbmanager/dbconn'
  pool.query('SELECT NOW()', (err: any, result: any) => {
    if (err) throw err;
    console.log(result);
    pool.end();
  });