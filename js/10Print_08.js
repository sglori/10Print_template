let x = 4;
let y = 2;
let size = 10;
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    strokeWeight(5);
    if (random(1) < 0.2) {
        rect (x, y, x + size, y + size);
    } else {
        square(x + size, y + size);
    }
    x += size;
    if (x > width) {
        x = 0;
        y += size;
    }
    if(y > height){
      noLoop(); //Interrompi  loop quando finisce lo schermo
    }
}