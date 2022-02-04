/* ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে 
second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও।  */

let arr = [12, 9, 1, 23, 5, 234, 745, 987, 23];
let secondlarge = -1223232323434343;
let large = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (large < arr[i]) {
    large = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondlarge && large > arr[i]) {
    secondlarge = arr[i];
  }
}
console.log("Second Largest Number of Array ", secondlarge);
