let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.lineWidth = 2;

// ctx.fillStyle = 'red';
// ctx.fillRect(50, 50, 100, 100);
// ctx.strokeRect(50,50, 100, 100);
// ctx.rect(50,50, 100, 100);
// ctx.stroke()
// ctx.fill()
// ctx.moveTo(50,50)
// ctx.lineTo(200,200)
// ctx.stroke()

let circle = function(x, y, radius, fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    if (fillCircle){
        ctx.fill()
    }else {
        ctx.stroke();
    }
}

let drawBee = function (x, y){
    ctx.lineWidth = 2;
    ctx.stroceStyle = 'black';
    ctx.fillStyle = 'gold';

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x-5, y-11, 5, false);
    circle(x+5, y-11, 5, false);
    circle(x-2, y-1, 2, false);
    circle(x+2, y-1, 2, false);
}

let update = function (coordinate){
    let offset = Math.random() * 4 - 2;
    coordinate += offset;
    if (coordinate > 200){
        coordinate = 200;
    }
    if(coordinate<0) {
        coordinate = 0;
    }
    return coordinate;
}

let x = 100;
let y = 100;
setInterval(function (){
    ctx.clearRect(0, 0, 200, 200);
    drawBee(x, y);
    x= update(x);
    y= update(y);
    ctx.strokeRect(0, 0, 200, 200)
}, 30)