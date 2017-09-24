function setup() {
  createCanvas(800, 600);
  background('white');
}

function draw() {
  stroke(1);
  noFill();
  rect(0,0,799,599);
  
  noStroke();
  
  fill('red');
  triangle(300, 300, 400, 300, 350, 400);
  
  fill('blue');
  arc(250, 250, 80, 80, 0, PI+QUARTER_PI, OPEN);
  
  fill('red');
  arc(500, 200, 200, 200, PI, PI+QUARTER_PI, PIE);
  
  fill('blue');
  quad(400, 400, 500, 400, 700, 500, 450, 500);
  
  fill('blue');
  ellipse(200, 450, 150, 60);
}