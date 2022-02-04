function inchToFeet(inches) {
  let feet = (inches / 12).toFixed(3);
  return "FEET: ", parseFloat(feet);
}
console.log(inchToFeet(32));
