var server = require('./lib/server');

//Comment in js
var routes = [
    'status',
    'user',
    'team'
];

server(routes).start();
