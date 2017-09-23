function setup() {
  createCanvas(800, 600);
  background('white');
}

function draw() {  
  stroke('red');
  strokeWeight(10);
  line(100, 100, 400, 300);
  
  stroke('green');
  strokeWeight(5);
  line(600, 100, 200, 400);
  
  stroke('darkgrey');
  strokeWeight(2);
  line(450,450, 600, 450);
  line(450,460, 600, 460);
  line(450,470, 600, 470);
  
  stroke('lightskyblue');
  strokeWeight(10);
  line(500, 100, 500, 400);
  line(520, 100, 520, 400);
  line(540, 100, 540, 400);
}