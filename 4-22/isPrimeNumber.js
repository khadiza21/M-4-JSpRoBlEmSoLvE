function isPrimeNumber(a) {
    const statement1 = "Not a Prime Number.";
    const statement2 = "Prime Number.";
    let count= 0;
  if (a <= 1) {
    return statement1;
  }

  for (let i = 2; i <a; i++) {
    if (a % i == 0) {
        count++;
        break;
      
    }
    
  }
  if(count == 0 ){
      return statement2;
  }
  else 
  {
      return statement1;
  }
}
console.log(isPrimeNumber(13));
