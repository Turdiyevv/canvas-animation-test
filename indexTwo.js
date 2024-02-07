let canvasTwo = document.getElementById('canvas_two');
let ctx = canvasTwo.getContext('2d');
let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvasTwo.height = window_height;
canvasTwo.width = window_width;
canvasTwo.style.background = '#94ef81';

let startTime;
let img = new Image();
img.src = '../canvas test/pic/icons8-car-48.png';
let drawSquare = function (x, y, size) {
    ctx.clearRect(0, 0, canvasTwo.width, canvasTwo.height);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(510, 300);
    ctx.lineTo(510, 90);
    ctx.arc(500, 300, 10, 0, Math.PI, false);
    ctx.moveTo(490, 100);
    ctx.lineTo(490, 300);
    ctx.arc(480, 100, 10, 0, Math.PI, true);
    ctx.moveTo(470, 100);
    ctx.lineTo(470, 310);
    ctx.closePath()
    ctx.stroke();

    ctx.drawImage(img, x, y, 20, 20);
};

function animateSquare(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    let newX, newY;

    if (elapsedTime < 4000) {
        newX = 460;
        newY = 305 - Math.min(elapsedTime / 940) * 50;

    } else if(elapsedTime >= 4000){
        const rotationTime = elapsedTime - 4000;
        const rotationAngle = (rotationTime / 2000) * Math.PI;
        const centerX = 470;
        const centerY = 90;
        const radius = 10;
        newX = centerX - Math.cos(rotationAngle) * radius;
        newY = centerY - Math.sin(rotationAngle) * radius;

    }
    if(elapsedTime >= 6000){
        newX = 480;
        newY = 90 + Math.min((elapsedTime - 6000) / 4000, 1) * 200;
    }
    if(elapsedTime >= 10000){
        const rotationTime = elapsedTime - 10000;
        const rotationAngle = (rotationTime / 2000) * Math.PI;
        const centerX = 490;
        const centerY = 290;
        const radius = 10;
        newX = centerX - Math.cos(rotationAngle) * radius;
        newY = centerY + Math.sin(rotationAngle) * radius;
    }
    if (elapsedTime >=12000){
        newX = 500;
        newY = 290 - Math.min((elapsedTime - 12000) / 3000, 1) * 210;
    }

    drawSquare(newX, newY, 10);
    if (elapsedTime < 16000) {
        requestAnimationFrame(animateSquare);
    }
}
requestAnimationFrame(animateSquare);
