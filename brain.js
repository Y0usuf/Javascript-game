var ball = document.getElementById("ball");
var x = 0;
var y = 0;

function gameStart()
{
    setInterval(engine,1000);
}

function engine()
{
    ball.style.marginLeft = randomCordinateX() + "px";
    ball.style.marginTop  = randomCordinateY() + "px";
}

function mouseEngine()
{
    setTimeout(engine , 100);
}

function randomCordinateX()
{
    x = Math.floor(Math.random()*1350);
    return x;
}

function randomCordinateY()
{
    y = Math.floor(Math.random()*700);
    return y;
}

function point()
{
    alert("Tebrikler");
}

