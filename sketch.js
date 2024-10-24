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
  
  // Update start and stop angles.
  noStroke();
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;
  arc(getWidth() / 2, mouseY, 80, 80, 0, startAngle, endAngle, PIE);
}
