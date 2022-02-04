// array decleare
let arr1 = [12, 23, 45, 52, 65, 34];
let arr2 = ["orange", "apple", "banana", "lichi", "water-millon"];
let arr3 = [12.34, 23.34, 23.42, 54.244, 65.233];
let arr4 = ["S", "B", "T", "Y", "I", "P"];

// print array
console.log(arr2);

//find array length
console.log(arr1.length);

//find array index
console.log(arr4.indexOf("T"));
console.log(arr4.indexOf("A"));

//set array index
arr3[0] = 45.233;
console.log(arr3);

//get array index
console.log(arr4[3]);

//push/add element in array last position
arr4.push('V');
console.log(arr4);

//pop/remove element in array last position
arr4.pop();
console.log(arr4);

//push/add element in array first position
arr4.unshift('Z');
console.log(arr4);

//pop/remove element in array first position
arr4.shift();
console.log(arr4);