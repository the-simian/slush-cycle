//TODO: get this integrated with the webpack dev server

const Hapi = require('hapi');
const server = new Hapi.Server();
const config = require('./config.js');

server.connection({
  port: config.hapi.port
});

require('./server/plugins')(server);
require('./server/public')(server);


server.start((err) => {
  if (err) {
    throw err;
  }
  console.info('Server started at ' + server.info.uri);
});
