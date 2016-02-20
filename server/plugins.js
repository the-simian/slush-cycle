const inert = require('inert');
const good = require('good');
const goodConsole = require('good-console');

const goodOpts = {
  reporters: [{
    reporter: require('good-console'),
    events: {
      log: '*',
      response: '*'
    }
  }]
};

function Plugins(server) {

  server.register(inert);

  server.register({
    register: good,
    options: goodOpts
  });

  return server;
}

module.exports = Plugins;
