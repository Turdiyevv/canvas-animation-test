let canvasTwo = document.getElementById('canvas_two');
let ctx = canvasTwo.getContext('2d');
let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvasTwo.height = window_height;
canvasTwo.width = window_width;
canvasTwo.style.background = '#94ef81';

let startTime;

let img = new Image();
img.onload = function() {
    ctx.drawImage(img, 10, 10, 20, 20);
};
img.src = '../canvas-animation-test/pic/icons8-car.png';

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

    // ctx.drawImage(img, x, y, 25, 25);
    ctx.save();
    ctx.translate(x + 7, y + 7);
    ctx.rotate(3*Math.PI/2);
    ctx.drawImage(img, -10, -10, 25, 25);
    ctx.restore();
};

function rotateCar(){
    // ctx.save();
    // ctx.translate(x + 13, y + 13);
    // ctx.rotate(Math.PI/2);
    // ctx.drawImage(img, -10, -10, 25, 25);
    // ctx.restore();
}

function animateSquare(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;
    let newX, newY;

    if (elapsedTime < 4000) {

        newX = 460;
        newY = 305 - Math.min(elapsedTime / 1000) * 54;
    }
    if(elapsedTime >= 4000){
        const rotationTime = elapsedTime - 4000;
        const rotationAngle = (rotationTime / 2000) * Math.PI;
        const centerX = 470;
        const centerY = 90;
        const radius = 10;
        newX = centerX - Math.cos(rotationAngle) * radius;
        newY = centerY - Math.sin(rotationAngle) * radius;

        if ( elapsedTime >= 4000 )
        console.log(
            ctx.drawImage
        )
    }
    if(elapsedTime >= 6000){
        newX = 480;
        newY = 90 + Math.min((elapsedTime - 6000) / 4000, 1) * 200;

        ctx.drawImage(img, newX, newY, 20, 20)
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
        newY = 290 - Math.min((elapsedTime - 12000) / 3000) * 157;
    }

    drawSquare(newX, newY, 10);
    if (elapsedTime < 16000) {
        requestAnimationFrame(animateSquare);
    }
}
requestAnimationFrame(animateSquare);
