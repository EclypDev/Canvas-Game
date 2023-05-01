const canvas = document.querySelector('canvas');
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext('2d');

function Ball({color='blue', x = 0, y=-1}) {
    this.x = x;
    this.y = y;
    this.w = 10;
    this.h = 10;
    this.color = color;
    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

const ballplayer = new Ball({
    color: 'blue',
    x: canvas.width/2,
    y: canvas.height/2,
});

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = true;
    }
    if (event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = true;
    }
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = true;
    }
    if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Left" || event.key === "ArrowLeft") {
        leftPressed = false;
    }
    if (event.key === "Right" || event.key === "ArrowRight") {
        rightPressed = false;
    }
    if (event.key === "Up" || event.key === "ArrowUp") {
        upPressed = false;
    }
    if (event.key === "Down" || event.key === "ArrowDown") {
        downPressed = false;
    }
});
const square = {
    x: 10,
    y: 10,
    w: 50,
    h: 50
  };
  function checkCollision(ball, object) {
    if (ball.x < object.x + object.w &&
        ball.x + ball.w > object.x &&
        ball.y < object.y + object.h &&
        ball.y + ball.h > object.y) {
            console.log('Colisión detectada');
      // aquí puedes añadir la función que quieras ejecutar al detectar la colisión
      

  }

}

  
  checkCollision(ballplayer, square);
    
let speed = 2;
function Rectangle({ x = 0, y = 0, width = 10, height = 10, color = "red" }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.draw = function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  }
  
  const rect = new Rectangle({
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    color: "red",
  });
  function detectCollision(rect, ball) {
    // Comprobar si la bola colisiona con el rectángulo
    if (
      ball.x < rect.x + rect.width &&
      ball.x + ball.w > rect.x &&
      ball.y < rect.y + rect.height &&
      ball.y + ball.h > rect.y
    ) {
      rect.color = "green";
    } else {
      rect.color = "red";
    }
  }
  

function Update() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    if (leftPressed) {
        ballplayer.x -= speed;
    }
    if (rightPressed) {
        ballplayer.x += speed;
    }
    if (upPressed) {
        ballplayer.y -= speed;
    }
    if (downPressed) {
        ballplayer.y += speed;
    }
    
    ballplayer.draw();
    rect.draw()
    detectCollision(rect, ballplayer);
    requestAnimationFrame(Update);
}

Update();