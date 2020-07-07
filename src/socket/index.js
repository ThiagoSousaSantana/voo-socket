const io = require('socket.io').listen('3000');

io.on("conection", (socket) => {
    console.log(socket);
});
