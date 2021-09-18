let riceWeight = 0.065;
let rowsNumber = 9;
let riceGrainsNumber = 1;
let sumRiceGrainsNumber = 0;
for (let i = 0; i <= rowsNumber; i++) {
  riceGrainsNumber *= 8;
  sumRiceGrainsNumber += riceGrainsNumber;
  riceGrainsNumber *= 2;
  document.write(sumRiceGrainsNumber + "<br>");
}
riceWeight *= sumRiceGrainsNumber;
riceWeight /= 1000000;
document.write(riceWeight + "тонн");
