randomMode = function (socket) {
    setInterval(() => {
        socket.emit('randomMode', {
            rpm: Math.floor((Math.random() * 9000) + 1000),
            speed: Math.floor((Math.random() * 230) + 1)
        });
    }, 200)
};

module.exports = randomMode;