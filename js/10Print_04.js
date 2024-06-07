let num = 5000; // Aumentato il numero di punti
let range = 50; // Aumentato il range di movimento
let size = 60;

let ax = [];
let ay = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // Imposta il canvas per coprire l'intera finestra
  for (let i = 0; i < num; i++) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);
  noLoop(); // Interrompe il loop di disegno dopo la prima esecuzione

  // Aggiorna tutti i punti un numero sufficiente di volte
  for (let k = 0; k < 1000; k++) {  // Numero di aggiornamenti
    for (let i = 1; i < num; i++) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }

    ax[num - 1] += random(-range, range);
    ay[num - 1] += random(-range, range);

    ax[num - 1] = constrain(ax[num - 1], 0, width);
    ay[num - 1] = constrain(ay[num - 1], 0, height);
  }
}

function draw() {
  background(255);

  // Disegna una linea che collega i punti
  for (let j = 1; j < num; j++) {
    stroke(255, 150);

    // Disegna linee tra punti
    line(ax[j], ay[j], ax[j - 1], ay[j - 1]);


    fill(random(150),150);
    rect(ax[j - 1], ay[j - 1], size, size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
