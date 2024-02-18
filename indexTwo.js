let canvasTwo = document.getElementById('canvas_two');
let ctx = canvasTwo.getContext('2d');
let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvasTwo.height = window_height;
canvasTwo.width = window_width;
canvasTwo.style.background = '#94ef81';

class Square {
  constructor({
    width,
    height,
    rotate = 0,
    xPosition = 450,
    yPosition = 330,
    imageUrl,

    duration = 0,  //vaqt
    targetRotate = 0 // aylanish
  }) {
    this.width = width;
    this.height = height;
    this.rotate = rotate;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.image = new Image();
    this.image.src = imageUrl;

    this.duration = duration; // test
    this.targetRotate = targetRotate; // test
    this.startTime = performance.now(); // test
  }
  drawImage() {
    ctx.drawImage(this.image, 5, 5, 30, 30);
  }
}

const square = new Square({
  width: 30, height: 30, imageUrl: '../canvas test/pic/icons8-car.png'
});
let startTime = 0;

function movement(shape) {

  shape.rotate += 0.05;
  // shape.xPosition += 0.3;
  shape.yPosition -= 0.3;
}

function render(timestamp) {

  ctx.fillStyle = "lightsalmon";
  ctx.fillRect(0, 0, window_width, window_height);

    if (startTime === 0) startTime = timestamp;
    const elapsedTime = timestamp - startTime;

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

    if (elapsedTime < 5000){
      movement(square);

    }
    if (elapsedTime < 8000 && elapsedTime > 5000){
      ctx.save();
      // ctx.fillStyle = "salmon";
      ctx.translate(square.xPosition, square.yPosition);
      // ctx.rotate(3*Math.PI/2);
      ctx.rotate(square.rotate);
      square.drawImage();
      ctx.restore();
    }
      ctx.save();
      ctx.fillStyle = "salmon";
      ctx.translate(square.xPosition, square.yPosition);
      ctx.rotate(3*Math.PI/2);
      square.drawImage();
      ctx.restore();

  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);

// let drawSquare = function (x, y, size) {
//     ctx.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
//     ctx.drawImage(img, x, y, 20, 20)
//
//     // ctx.lineWidth = 1;
//     // ctx.fillStyle = 'blue';
//     // ctx.fillRect(x, y, size, size);
//     // ctx.strokeRect(x, y, size, size);
//
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.moveTo(510, 300);
//     ctx.lineTo(510, 90);
//     ctx.arc(500, 300, 10, 0, Math.PI, false);
//     ctx.moveTo(490, 100);
//     ctx.lineTo(490, 300);
//     ctx.arc(480, 100, 10, 0, Math.PI, true);
//     ctx.moveTo(470, 100);
//     ctx.lineTo(470, 310);
//     ctx.closePath()
//     ctx.stroke();

// ctx.drawImage(img, x, y, 25, 25);
//     ctx.save();
//     ctx.translate(x + 7, y + 7);
//     ctx.rotate(3*Math.PI/2);
//     ctx.drawImage(img, -10, -10, 25, 25);
//     ctx.restore();
// };

// function animateSquare(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const elapsedTime = timestamp - startTime;
//     let newX, newY;
//
//     if (elapsedTime < 4000) {
//         newX = 455;
//         newY = 300 - Math.min(elapsedTime / 940) * 50;
//
//
//     } else if(elapsedTime >= 4000){
//         const rotationTime = elapsedTime - 4000;
//         const rotationAngle = (rotationTime / 2000) * Math.PI;
//         const centerX = 475;
//         const centerY = 95;
//         const radius = 10;
//         newX = centerX - Math.cos(rotationAngle) * radius;
//         newY = centerY - Math.sin(rotationAngle) * radius;
//
//     }
//     if(elapsedTime >= 6000){
//         newX = 485;
//         newY = 95 + Math.min((elapsedTime - 6000) / 4000, 1) * 200;
//     }
//
//     drawSquare(newX, newY, 10);
//     if (elapsedTime < 10000) {
//         requestAnimationFrame(animateSquare);
//     }
// }
// requestAnimationFrame(animateSquare);
