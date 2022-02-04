//  if(var == ture || var3>34), multistage and nested condition,

// comparisom operator: >, <, ==, !=, <=, >=
var num1 = 34;
var num2 = 98;
console.log("number 1 is less than number 2 ", num1 < num2);
console.log("number 1 is greater than number 2 ", num1 > num2);
console.log("number 1 is equal number 2 ", num1 == num2);
console.log("number 1 is not equal number 2 ", num1 != num2);
console.log("number 1 is less than and equal number 2 ", num1 <= num2);
console.log("number 1 is greater than and equal number 2 ", num1 >= num2);
console.log("true == 1: ", true == 1);
console.log("false == 0: ", false == 0);

//condition
if (num2 == num1 || (num1 > 35 == 0 && num1 < 100)) {
  console.log("condition");
}

//multistage condition
i = 7;
if (i < 15) {
  console.log(i, " is less than 15");
} else if (i < 30) {
  console.log(i, " is less than 30");
} else if (i < 45) {
  console.log(i, " is less than 45");
} else if (i < 50) {
  console.log(i, " is less than 50");
} else if (i < 65) {
  console.log(i, " is less than 65");
} else {
  console.log(i, " is greater than 65");
}

//nested loop
n = 0;
if (n <= 100) {
  if (n <= 50) {
    console.log(n, " Less than 51");
  } else {
    console.log(n, " Less than 101");
  }
} else {
  console.log(n, " Greater than 100");
}
