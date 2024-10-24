let sunHeight;
let horizon, centerX;
let myW, myH;

function setup() {
  myW = windowWidth - 10;
  myH = windowHeight - 10;
  horizon = myH / 2;
  centerX = myW / 2;
  createCanvas(myW, myH);
  windowHeight
}

function draw() {
  background(0);
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;
  
  let r = Math.floor(255 * sunHeight / horizon);
  fill(`rgb(${r}, 149, 16)`);
  circle(centerX, sunHeight, 160);

  // draw line for horizon
  stroke("green");
  line(0,horizon,myW,horizon);

  fill(`rgb(255, 235, 235)`);
  text(`${sunHeight} ${r}`, 10, 10);
}