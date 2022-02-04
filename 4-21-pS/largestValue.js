function findLargeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, " is the leargest number.");
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2, " is the leargest number.");
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3, " is the leargest number.");
  }
}

findLargeNumbers(24, 18, 12);
