function findSmallValue(num1,num2,num3){
       if(num1<num2 && num1<num3){
           console.log(num1 + " is the smallest element.");
       }
       else if (num2<num1 && num2<num3){
        console.log(num2 + " is the smallest element.");
       }
       else{
        console.log(num3 + " is the smallest element.");
       }
}

findSmallValue(234,98,12);