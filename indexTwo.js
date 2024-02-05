let canvasTwo = document.getElementById('canvas_two');
let ctx = canvasTwo.getContext('2d');


ctx.lineWidth = 1;
ctx.moveTo(510, 90);
ctx.arc(500, 300, 10, 0, Math.PI, false);
ctx.arc(480, 100, 10, 0, Math.PI, true);
ctx.lineTo(470, 310)
ctx.stroke();


let startTime;
let square = {
    x: 465,
    y: 310,
    size: 10,
};
let drawSquare = function (x, y, size) {
    ctx.lineWidth = 1;
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
};

function animateSquare(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;

    const newX = 465;
    const newY = 310 - Math.min(elapsedTime / 940) * 50;
    // const nextX = 480;

    drawSquare(newX, newY, 10);

    if (elapsedTime < 4000) {
        requestAnimationFrame(animateSquare);
    }
}

// Animatsiyani boshlash
requestAnimationFrame(animateSquare);