// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে
// console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
arr = [90, 12, 89, 67, 0, 100, 234, 98, 34, 789, 23, 53, 1000];
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > 80) {
    console.log(arr[i]);
  }
}
