/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে 
সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা
 শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা 
 হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে।
  সেগুলা রিটার্ন করে দিবে।  */

let array1 = [23, 34, 34, 0, -34, 23, -56, 90, 78];
let array2 = [];
for (let i = 0; i < array1.length - 1; i++) {
  if (array1[i] >= 0) {
    // console.log(array1[i]);
    array2.push(array1[i]);
  } else if (array1[i] < 0) {
    break;
  }
}
console.log(array2);
