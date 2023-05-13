let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let fg = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
pipeUp.src = "images/pipeUp.png";
pipeBottom.src = "images/pipeBottom.png";
fg.src = "images/fg.png";

let xPos = 10; // координата птички
let yPos = 150; //

let gap = 110;

let pipes_x = [cvs.width, cvs.width + 150];
let pipes_y = [0, -100];

let fgPosx = 0;
let fgPosy = 400;

let grav = 0.3;
let change = 5;

document.addEventListener("keydown", function () {
  change = 4;
});

document.addEventListener("click", function () {
  change = 4;
});

let score = 0;

function draw() {
  ctx.drawImage(bg, 0, 0);
  for (i = 0; i < pipes_x.length; i++) {
    ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
    ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
    pipes_x[i] = pipes_x[i] - 2;
    if (pipes_x[i] <= 50) {
      pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height);
      pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
    }
    if (pipes_x[i] == -52) {
      pipes_x.shift();
      pipes_y.shift();
    }
    if (
      (xPos + bird.width >= pipes_x[i] &&
        xPos <= pipes_x[i] + pipeUp.width &&
        (yPos <= pipes_y[i] + pipeUp.height ||
          yPos + bird.height >= pipes_y[i] + pipeUp.height + gap)) ||
      yPos + bird.height >= cvs.height - fg.height
    ) {
      pipes_x = [cvs.width];
      pipes_y = [0];
      score = 0;
      xPos = 10;
      yPos = 150;
      change = 5;
    }
    if (pipes_x[i] < 5 && pipes_x[i] >= 4) {
      score++;
    }
  }

  ctx.drawImage(bird, xPos, yPos);
  ctx.drawImage(fg, fgPosx, fgPosy);

  ctx.fillStyle = "#000";
  ctx.font = "18px Verdana";
  ctx.fillText("Количество очков: " + score, 10, cvs.height - 20);

  yPos = yPos - change;
  change = change - grav;
  requestAnimationFrame(draw);
}

draw();
