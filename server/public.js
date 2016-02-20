

function Public(server){

  //make static resources available
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });
}

module.exports = Public;
