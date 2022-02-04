/* ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */
function isAgeEvenOdd(age) {
  if (age > 0) {
    if (age % 2 != 0) {
      return 0;
    } else if (age % 2 == 0) {
      return 1;
    }
  } else {
    return "Give Valid Age.";
  }
}
console.log(isAgeEvenOdd(-34));
