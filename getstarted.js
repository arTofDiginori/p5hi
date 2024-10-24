function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);

  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(550,50,100);

  stroke(0);
  strokeWeight(1);
  fill("green");
  rect(0, 200, 600, 200);

  //emojis
  textSize(75);
  text("🌸", mouseY, mouseX); //flower
  text("🐞", mouseX, mouseY); //ladybug
}