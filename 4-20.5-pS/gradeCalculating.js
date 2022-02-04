/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা 
তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে 
সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */

//grade calculation
function gradeCalculation(marks) {
  if (marks >= 0 && marks < 39) {
    return "Grade F";
  } else if (marks >= 40 && marks <= 49) {
    return "Passed!";
  } else if (marks >= 50 && marks <= 59) {
    return "Grade D";
  } else if (marks >= 60 && marks <= 69) {
    return "Grade C";
  } else if (marks >= 70 && marks <= 79) {
    return "Grade B";
  } else if (marks >= 80 && marks <= 89) {
    return "Grade A";
  } else if (marks >= 90 && marks <= 100) {
    return "Grade A+";
  } else {
    return "Enter valid marks!";
  }
}
console.log(" Your Marks 195 & Your Grade : ", gradeCalculation(195));
console.log(" Your Marks 95 & Your Grade : ", gradeCalculation(95));
console.log(" Your Marks 66 & Your Grade : ", gradeCalculation(66));
console.log(" Your Marks 80 & Your Grade : ", gradeCalculation(80));
console.log(" Your Marks 59 & Your Grade : ", gradeCalculation(59));
console.log(" Your Marks 47 & Your Grade : ", gradeCalculation(47));
