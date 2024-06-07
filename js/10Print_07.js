let x=1;
let y=6;

let size = 6;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  strokeWeight(6);
  
  if(random(4) < 0.6){
    rect (x, y, 10, 40);
  }else{
    square (x+size, y+size);
  }
  x += size;
  if(x > width) {
    x = 2;
    y += size;
  }
}