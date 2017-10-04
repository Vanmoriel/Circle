function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0);
  frameRate(30);
}

function draw() {
  
  noFill();
  stroke(255,0,0);
  translate(width/2, height/2);
  //rotate(frameCount*9);
  stroke(lerpColor(color('#02e506'), color('#0214e5'), frameCount/300));
  line(100,0,cos(frameCount*3)*100,sin(frameCount*3)*100);
  
}

