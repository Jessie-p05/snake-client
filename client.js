const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    port: 50542,
    host: "135.23.222.131"
  });
  // interpret incoming data as text

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

console.log('Connecting ...');
connect();