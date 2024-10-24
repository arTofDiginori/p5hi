

function getWidth() {
  return windowWidth - 10;
}

function getHeight() {
  return windowHeight - 10;
}

let circle_diameter = 100;

function setup() {
  createCanvas(getWidth(), getHeight());

  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function draw() {
  background("aqua");

  if(mouseIsPressed == true) {
    fill(0);
  } else {
    fill(255);
  }

  circle_diameter = getWidth() / 3;
  circle(mouseX, getHeight() - circle_diameter / 2, circle_diameter);
  circle(getWidth() / 2, mouseY, 50);
  
  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  noStroke();
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;
  arc(getWidth() / 2, mouseY, 80, 80, startAngle, endAngle, PIE);
}
