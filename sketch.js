function getWidth() {
  return windowWidth - 10;
}

function getHeight() {
  return windowHeight - 10;
}

function setup() {
  createCanvas(getWidth(), getHeight());
}

function draw() {
  background("aqua");

  if(mouseIsPressed == true) {
    fill(0);
  } else {
    fill(255);
  }

  circle(mouseX, getHeight() - 100 / 2, 100);
  
  arc(getWidth() / 2, mouseY, 80, 80, 0, PI + QUARTER_PI, PIE, 5);
}
