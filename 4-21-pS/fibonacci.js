function fibonacciNumbers(number) {
  let firstFiboNumber = 0;
  let secondFiboNumber = 1;
  let fibo = 0;

  while (fibo <= number) {
    console.log(fibo);
    firstFiboNumber = secondFiboNumber;
    secondFiboNumber = fibo;

    fibo = firstFiboNumber + secondFiboNumber;
  }
}
fibonacciNumbers(57);
