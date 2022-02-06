function consoleNumber(i) {
  //   if(i>5){
  //       return;
  //   }
  //   console.log(i);
  //   consoleNumber(i + 1);
  if (i <= 200) {
    console.log(i);
    consoleNumber(i + 1);
  }
}

consoleNumber(100);

//// reverse loop
let sum = 0;
for (let i = 5; i >= 1; i--) {
  sum = sum + i;
}
console.log(sum);
