
const fs = require('fs');
const Client = require('ssh2').Client;
const pg = require('pg');


const privateKey = fs.readFileSync('/Users/nime/clients/taygo/taygodev-aws.pem');

const conn = new Client();
conn.on('ready', function() {
  conn.forwardOut(
    // source address, source port, destination address, destination port
    '127.0.0.1',
    1234,
    'database-crm-2.cluster-cqgoktb7f5aa.us-east-1.rds.amazonaws.com',
    5432,
    function(err, stream) {
      if (err) throw err;
      // use the stream
      const config = {
        user: 'pguser_prith',
        password: 'tCt4rfuaAY',
        database: 'mydatabase',
        stream: stream
      };
      const pgClient = new pg.Client(config);
      pgClient.connect(function(err) {
        if (err) throw err;
        pgClient.query('SELECT NOW()', function(err, result) {
          if (err) throw err;
          console.log(result);
          pgClient.end();
        });
      });
    });
}).connect({
  host: '44.204.82.125',
  port: 22,
  username: 'ec2-user',
  password: privateKey
});
