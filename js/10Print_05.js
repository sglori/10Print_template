
let size = 40;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(5);
  background (220);
}

function draw() {
  for(let x=0; x<width; x += spacing){
    for(let y=0; y<height; y += spacing){
      fill(getRandomColor());
      ellipse(x,y,size);
    }
  }
}
function getRandomColor(){
  let r = random(255);
  let g = random(255);
  let b = random(255);
  return color(r, g, b, 80);
}