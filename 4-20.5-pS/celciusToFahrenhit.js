/* . তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন
 করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */

 // cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
// fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr

function celciusToFahrenhit(celcius) {
    let fahrenhit = (celcius * 9.0) / 5.0 + 32.0;
    return fahrenhit;
  }
  console.log("Fahrenhit Value is ", celciusToFahrenhit(234));
  