//factorial with recursion
//4! = 4*3*2*1 =24
// let factorial = 1;
// for(let i = 4; i>=1; i--){
//     factorial *= i;
// }
// console.log(factorial);

function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(--number);
}
console.log(factorial(4));

