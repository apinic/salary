'use strict';
const Hapi = require('hapi');
let versions = require('./versions');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 5000
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function(request, reply) {
      reply.redirect('http://www.apinic.org/salario');
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/v1/calculate',
    handler: versions.v1
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
