let stringBehave = "Bangladesh is Beautiful Country.";
console.log("The String Length Is ", stringBehave.length);
console.log("Index of 0: ",stringBehave[0]);
console.log("Index of 7: ",stringBehave[7]);
console.log("Index of 19: ",stringBehave[19]);
console.log("Index of 24: ",stringBehave[24]);

// for of loop apply in string 
 let i = 0;
for (const char of stringBehave){
   
    console.log(i,'th index value: ',char);
    i++;
}