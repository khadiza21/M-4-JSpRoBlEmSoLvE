function findSmallNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1, " is the smallest number.");
  } else if (num2 < num1 && num2 < num3) {
    console.log(num2, " is the smallest number.");
  } else if (num3 < num1 && num3 < num2) {
    console.log(num3, " is the smallest number.");
  }
}

findSmallNumber(4, 8, 12);
