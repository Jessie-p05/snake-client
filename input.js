let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    };
    if (key === 'w') {
      conn.write('Move: up');
    };
    if (key === 's') {
      conn.write('Move: down');
    };
    if (key === 'a') {
      conn.write('Move: left');
    };
    if (key === 'd') {
      conn.write('Move: right');
    };
  }

  stdin.on('data', handleUserInput)
  connection = conn;
  return stdin;
}





module.exports = { setupInput };


