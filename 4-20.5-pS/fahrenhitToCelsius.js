// cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
// fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr

function fahrenhitToCelsius(fahrenhit) {
  let celsius = (parseFloat((((fahrenhit - 32.0) * 5.0) / 9.0).toFixed(3)));
  return celsius;
}
console.log("Celsius Value is ", fahrenhitToCelsius(235));
