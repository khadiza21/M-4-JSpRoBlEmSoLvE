// simple interest calculation  formula
function simpleInterest(
  principalAmount,
  annualinterestRate,
  termOfLoanPerYear
) {
  const simpleInterest =
    (principalAmount * annualinterestRate * termOfLoanPerYear) / 100;
  return simpleInterest;
}
console.log("Your Simple Interest is: ", simpleInterest(500000, 10, 5));
