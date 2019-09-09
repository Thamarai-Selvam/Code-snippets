console.log("Loading png")
var png = new Image();
png.onload = drawScene;
png.src =
    "data:image/png;base64,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";

console.log("get Canvas");
var canvas = document.getElementById("scene");
var ctx = canvas.getContext("2d");
var particles = [];

function drawScene() {
    console.log("Drawing scene");
    canvas.width = png.width * 3;
    canvas.height = png.height * 3;
    ctx.drawImage(png, 0, 0);
    var data = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var y = 0, y2 = data.height; y < y2; y++) {
        for (var x = 0, x2 = data.width; x < x2; x++) {
            var p = y * 4 * data.width + x * 4;
            if (data.data[p + 3] > 129) {
                var particle = {
                    x0: x,
                    y0: y,
                    x1: png.width / 2,
                    y1: png.height / 2,
                    speed: Math.random() * 4 + 2,
                    color: "rgb(" +
                        data.data[p] +
                        "," +
                        data.data[p + 1] +
                        "," +
                        data.data[p + 2] +
                        ")"
                };
                TweenMax.to(particle, particle.speed, {
                    x1: particle.x0,
                    y1: particle.y0,
                    delay: y / 250,
                    ease: Elastic.easeOut
                });
                particles.push(particle);
            }
        }
    }
    requestAnimationFrame(render);
}
var render = function() {
    console.log("Rendering")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0, j = particles.length; i < j; i++) {
        var particle = particles[i];
        ctx.fillStyle = particle.color;
        i < particles.length / 2 && particle.x1 < canvas.width / 2 ?
            (ctx.fillStyle = "#000000") :
            (ctx.fillStyle = "#000000");
        ctx.fillRect(particle.x1 * 3, particle.y1 * 3, 2, 2);

    }
    requestAnimationFrame(render);
    setTimeout(function() {
        //alert("Yay");
        clearFrame();
        //clearFrame();
    }, 6000);


};


var speed = 50,
    w = canvas.height,
    cw = w;

var clearFrame = function() {

    if (cw > 0) {
        canvas.height = cw;
        cw--;
        setTimeout(clearFrame, speed);
    }
};