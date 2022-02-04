function oddEven(number) {
  if (number > 0) {
    if (number % 2 != 0) {
      console.log("Odd Number");
    } else if (number % 2 == 0) {
      console.log("Even Number");
    }
  } else {
    console.log("Give Positive Number");
  }
}
oddEven(28);
