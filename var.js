let cloudOneX = 50;
//custom variable for shooting stars
let lineXone = 100;
let lineYone = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('navy');
  frameRate(15);

  //moon
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  //overlapping navy circle for crescent moon
  stroke("navy");   
  fill("navy");
  circle(320,50,100);

  //big gray mountains
  stroke(0);
  fill(80);
  triangle(-40,300,75,100, 250,300);
  triangle(100,300,300,100, 500,300);

  //grass
  fill('rgb(31, 203, 31)');
  rect(0,300, 400, 100);

  //cloud
  fill(255);
  cloudOneX = frameCount % width;
  ellipse(cloudOneX, 50, 80, 40);
  ellipse(cloudOneX - 40 , 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 100, 10);

  //Tree
  fill('rgb(118,80,72)');
  rect(40, 270, 15, 50);
  fill("green");
  triangle(25, 270, 45, 240 - frameCount % 100, 70, 270);

  //start
  stroke("yellow");
  lineXone = random(0, width);
  lineYone = random(0, height / 2);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);



  //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  text(`mouseX: ${mouseX}, mouseY: ${mouseY} ${lineXone}`, 20, 20);
}