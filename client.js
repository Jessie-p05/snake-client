const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    port: PORT,
    host: IP
  });
  // interpret incoming data as text

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: jxp");
  });
  conn.on('data', () => {
    conn.write("Say: Hi!");
  });

  // setInterval(() =>
  //   conn.on('connect', () => {
  //     conn.write("Move: down");
  //   }), 50)

  // setTimeout(() => {
  //   conn.on('data', () => {
  //     conn.write("Move: right")
  //   }, 1000);
  // })


  // conn.on('connect', () => {
  //   conn.write("Move: left");
  // });

  return conn;
}

console.log('Connecting ...');
// connect();

module.exports = { connect };


