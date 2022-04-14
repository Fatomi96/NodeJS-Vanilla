const http = require('http');

const server = http.createServer(function (req, res) {
   res.end('Welcome to NodeJS vanilla tutorial\n');
});

server.listen(3000, function () {
   console.log('Server is listening on PORT 3000 now');
})