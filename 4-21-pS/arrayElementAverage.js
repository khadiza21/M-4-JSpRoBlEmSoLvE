/*  একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। 
সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array
 এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় 
 ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো।  */

let arr = [12, 34, 45, 98, 39, 92, 41, 39];

function averageArrayNumbers(array) {
  let count = 0;
  let i;
  for (i = 0; i < array[i]; i++) {
    count += array[i];
  }

  return count / i;
}
console.log("Array Numbers Average is ", averageArrayNumbers(arr));
