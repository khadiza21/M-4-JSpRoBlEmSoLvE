//traffic signal command check
function trafficSignal(signal) {
  if (signal == "red") {
    return "RED! Danger! You Cann't Cross The Road!";
  } else if (signal == "yellow") {
    return "Yellow! You Should Stop!";
  } else if (signal == "green") {
    return "Green! You Can Cross The Road!";
  } else {
    return "Enter Valid Color.";
  }
}
// let s = 'ReD';
// console.log(s.toLowerCase());

console.log(trafficSignal("ReD".toLowerCase()));
console.log(trafficSignal("ORaNGe".toLowerCase()));
console.log(trafficSignal("gReEn".toLowerCase()));
console.log(trafficSignal("YeLlOw".toLowerCase()));
