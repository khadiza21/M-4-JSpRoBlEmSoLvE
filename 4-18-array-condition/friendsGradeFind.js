//grade calculation
function gradeCalculation(marks) {
  if (marks >= 0 && marks < 50) {
    return "Grade F";
  } else if (marks >= 50 && marks < 60) {
    return "Grade D";
  } else if (marks >= 60 && marks < 70) {
    return "Grade C";
  } else if (marks >= 70 && marks < 80) {
    return "Grade B";
  } else if (marks >= 80 && marks < 90) {
    return "Grade A";
  } else if (marks >= 90 && marks < 100) {
    return "Grade A+";
  } else {
   return "Enter valid marks!";
  }
}
console.log(" আলি পেয়েছে 195 | আলির  Grade : ", gradeCalculation(195));
console.log(" আলিয়া পেয়েছে 95 | আলিয়ার  Grade : ", gradeCalculation(95));
console.log(" ডালিয়া পেয়েছে 66 | ডালিয়ার  Grade : ", gradeCalculation(66));
console.log(" সালিয়া পেয়েছে 80 | সালিয়ার  Grade : ", gradeCalculation(80));
console.log(" মালিয়া পেয়েছে 59 | মালিয়ার  Grade : ", gradeCalculation(59));
console.log(" লিলিয়া পেয়েছে 47 | লিলিয়ার  Grade : ", gradeCalculation(47));
console.log(
  " জ্বালাইয়া পেয়েছে 77 | জ্বালাইয়ার  Grade : ",
  gradeCalculation(77)
);
