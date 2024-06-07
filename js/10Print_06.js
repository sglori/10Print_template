let size = 80;
let spacing = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
   background(250);
}

function draw() {
 
  for (let x = 2; x < width; x += spacing) {
    for (let y = 2; y < height; y += spacing) {
      
      fill(random(240), random(160));
      ellipse(x, y, size);
      
      
    }
  }
}