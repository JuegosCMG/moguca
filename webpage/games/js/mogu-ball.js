var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
    screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;

var ball = document.getElementById("ball");
var directionX = 1;
var directionY = 1;
var speed = 1;
var timeout = 50;
var style = ball.style;
style.marginTop = "5px";
style.marginLeft = "5px";

function tick() {
    var screenWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    var screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    var ballX = parseInt(style.marginLeft.replace("px"));
    var ballY = parseInt(style.marginTop.replace("px"));
    
    if(ballX >= (screenWidth - 15)){
        directionX = -1;
    }
    if(ballX <= 0){
        directionX = 1;
    }
    if(ballY >= (screenHeight - 15)){
        directionY = -1;
    }
    if(ballY <= 0){
        directionY = 1;
    }
    
    ballX += directionX * speed;
    ballY += directionY * speed;
    ball.style.marginTop = ballY + "px";
    ball.style.marginLeft = ballX + "px";
    setTimeout(tick, timeout);
}

tick();