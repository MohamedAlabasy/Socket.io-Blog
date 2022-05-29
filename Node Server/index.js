const http = require('http');
const server = http.createServer();
const { Server } = require("socket.io");

const myPort = 8888;

const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('new-message', message)
        console.log(message);
    })
    console.log('a user connected');
});

server.listen(process.env.PORT || myPort, () => {
    console.log(`App is run :  http://localhost:${myPort}`);
})