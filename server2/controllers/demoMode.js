var rnd = function (min, max) {
    return Math.floor((Math.random() * max) + min)
}


//
demoMode = function (socket) {
    var speed = 1;
    var rpm = 1000;

    setInterval(() => {
        socket.emit('demoMode', {
            rpm: rpm,
            speed: speed
        });
        (speed < 180) ? speed++ : speed = 0;
        (speed < 180) ? rpm = rpm + 37: rpm = 0;
    }, 60);

    setInterval(() => {
        socket.emit('demoMode2', {
            tmpOut: rnd(-11, 48),
            tmpIn: rnd(-11, 48),
            distance: {
                fr: rnd(1, 12),
                fl: rnd(1, 12),
                rl: rnd(1, 12),
                rr: rnd(1, 12)
            }
        });
    }, 2000)
};

module.exports = demoMode;