// Source: https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
// Description: HTTP server for running local programs with node js
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});