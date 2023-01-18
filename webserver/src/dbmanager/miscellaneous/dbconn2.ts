import { Client } from 'pg';
import * as ssh2 from 'ssh2';
import * as fs from 'fs';

const conn = new ssh2.Client();


conn.on('ready', () => {
  conn.forwardOut('127.0.0.1', 5433, 'database-crm-2.cluster-cqgoktb7f5aa.us-east-1.rds.amazonaws.com', 5432, (err, stream) => {
    if (err) {
        throw err;
    }
    console.log("connected")
    const pgClient = new Client({
        user: 'pguser_prith',
        password: 'tCt4rfuaAY',
        database: 'mydatabase',
        host: 'database-crm-2.cluster-cqgoktb7f5aa.us-east-1.rds.amazonaws.com',
        port: 5432,
        stream: stream
    });
    pgClient.connect();
    pgClient.query('SELECT NOW()', (err, res) => {
        console.log(err ? err.stack : res.rows[0].now);
        pgClient.end();
        conn.end();
    });
  });
}).connect({
  host: '44.204.82.125',
  port: 22,
  username: 'ec2-user',
  privateKey: fs.readFileSync('/Users/nime/clients/taygo/taygodev-aws.pem'),
});


// conn.on('ready', () => {
//     conn.forwardOut('127.0.0.1', 5433, 'database-crm-2.cluster-cqgoktb7f5aa.us-east-1.rds.amazonaws.com', 5432, (err, stream) => {
//         if (err) {
//             throw err;
//         }
//         const pgClient = new Client({
//             user: 'pguser_prith',
//             password: 'tCt4rfuaAY',
//             database: 'mydatabase',
//             stream: stream
//         });
//         pgClient.connect();
//         pgClient.query('SELECT NOW()', (err, res) => {
//             console.log(err ? err.stack : res.rows[0].now);
//             pgClient.end();
//             conn.end();
//         });
//     });
// }).connect(config);
