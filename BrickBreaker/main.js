import "./style.css";
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball(
  canvas.width / 2,
  canvas.height - 30,
  10,
  10,
  "#0095DD",
  2,
  -2
);

const paddle = new Paddle(
  canvas.width / 2,
  canvas.height - 10,
  80,
  10,
  "#0095DD",
);

let gameGoing = true;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(ctx);
  paddle.draw(ctx);
  ball.move();
  paddle.move(canvas.width);
  ball.colides(paddle);
  gameGoing = ball.bounce(canvas.width, canvas.height)

  if (gameGoing) {
    window.requestAnimationFrame(draw);
  } else {
    window.alert("Game Over!")
  }


}

draw();
