// function
function findFactorialNumbers(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(number, " Factorial IS ", fact);
}
findFactorialNumbers(6);
