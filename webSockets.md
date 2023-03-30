**Microservice 1**
`const io = require('socket.io')(3000);

io.on('connection', socket => {
    console.log('Microservice 1 connected to client');
    socket.emit('message', 'Hello from Microservice 1!');

    socket.on('disconnect', () => {
        console.log('Microservice 1 disconnected from client');
    });
});`

**Microservice 2**
`const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
    console.log('Microservice 2 connected to server');

    socket.on('message', message => {
        console.log(`Microservice 2 received "${message}"`);
    });

    socket.on('disconnect', () => {
        console.log('Microservice 2 disconnected from server');
    });
});`
