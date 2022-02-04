//decremental loop
// function
function findFactorialNumbers(number) {
  let fact = 1;
  let i = number;
  while (i >= 1) {
    fact *= i;
    //console.log(i);
    i--;
  }
  console.log(number, " Factorial IS ", fact);
}
findFactorialNumbers(5);
