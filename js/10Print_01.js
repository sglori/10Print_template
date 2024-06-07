let num = 50000; // Aumentato il numero di punti
let range = 50; // Aumentato il range di movimento

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
  background(51);

  // Disegna una linea che collega i punti
  for (let j = 1; j < num; j++) {
    let val = j / num * 204.0 + 51;
    stroke(val);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
