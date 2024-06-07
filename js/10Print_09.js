let size = 60;
let spacing = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(250);
}

function draw() {
  for(let x = 0; x < width; x += spacing){
    for(let y = 0; y < height; y += spacing){
      fill(random(245), random(150));
      ellipse(x, y, size);
    }
  }
}