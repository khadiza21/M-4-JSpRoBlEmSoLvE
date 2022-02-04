function milesToKilometers(miles) {
  let kilometers = (miles * 1.609344).toFixed(3);
  return parseFloat(kilometers);
}
console.log("KILOMETERS: ", milesToKilometers(5), " Km");
