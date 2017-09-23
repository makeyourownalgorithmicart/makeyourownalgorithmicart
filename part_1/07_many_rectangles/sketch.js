function setup() {
  createCanvas(800, 600);
  background('white');
}

function draw() {
  noStroke();
  fill('lightblue');
  rect(100, 100, 200, 200);
  
  noStroke();
  fill('aquamarine');
  rect(200, 200, 300, 200);
  
  stroke('red');
  fill('bisque');
  rect(400, 300, 200, 200);
  
  stroke('lightgrey');
  strokeWeight(10);
  noFill();
  rect(500, 100, 200, 300);
}