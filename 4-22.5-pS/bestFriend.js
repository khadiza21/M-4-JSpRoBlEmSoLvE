// . একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
//  সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর
//  নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে
function bestFriend(array) {
  let goldenName = array[0];
  let largeName = array[0].length;

  for (let i = 0; i <= array.length - 1; i++) {
    if (largeName < array[i].length) {
      largeName = array[i].length;
      goldenName = array[i];
    }
  }
  return goldenName;
}
console.log(
  bestFriend([
    "we",
    "rrtrtrttrtr",
    "rtrf",
    "vfjdt",
    "ief",
    "hirefffffffffffffht",
  ])
);
