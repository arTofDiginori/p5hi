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

  // 색상 계산: 지평선 위/아래에 따라 다른 공식 적용
  let r, g, b;

  if (sunHeight < horizon) {
    r = 255;
    g = Math.floor(255 * (horizon - sunHeight) / horizon);
    b = Math.floor(255 * (horizon - sunHeight) / horizon);
    background("lightblue"); // blue sky if above 
  } else {
    // 지평선 위: 노란색 계열
    r = 255;
    g = Math.floor(255 * (sunHeight - horizon) / horizon);
    b = 0;
    background(0); // night sky otherwise
  }

  background(g);
  
  // let r = Math.floor(255 * sunHeight / horizon);
  fill(`rgb(${r}, ${g}, ${b})`);
  circle(centerX, sunHeight, 160);

  // draw line for horizon
  stroke("green");
  line(0,horizon,myW,horizon);

  fill(`rgb(255, 235, 235)`);
  text(`${sunHeight} ${r}`, 10, 10);
}