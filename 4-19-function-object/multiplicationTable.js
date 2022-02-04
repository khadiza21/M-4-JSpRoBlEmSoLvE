/* ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */
function multiplicationTable(number){
    console.log('Multiplication Table of ',number);
    for(i=1; i<=10; i++){
        console.log(number,' * ',i,' = ',i*number);
    }
}

multiplicationTable(12);