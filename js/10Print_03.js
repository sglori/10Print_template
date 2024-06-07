let x = 0;
let y = 0;
let size = 40;
let spacing = 40;
let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Inizializza la matrice di colori
    for (let x = 0; x < width; x += spacing) {
        let row = [];
        for (let y = 0; y < height; y += spacing) {
            row.push(getRandomColor());
        }
        colors.push(row);
    }
}

function draw() {
    background(0); // Cancella il canvas ad ogni frame

    for (let xIndex = 0; xIndex < colors.length; xIndex++) {
        for (let yIndex = 0; yIndex < colors[xIndex].length; yIndex++) {
            let x = xIndex * spacing;
            let y = yIndex * spacing;
            fill(colors[xIndex][yIndex]);
            triangle(x, y + size, x + size, y + size, x + size / 2, y);
            triangle(x, y, x + size, y, x + size / 2, y + size); // Triangolo sottosopra
        }
    }
}

// Funzione colore casuale
function getRandomColor() {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let t = random(255);//trasparenza
    return color(r, g, b, t);
}
