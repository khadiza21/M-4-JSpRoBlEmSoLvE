let a = 23;
let b = 45;

console.log("Values of a and b ", a, b);
[a, b] = [b, a];
console.log("Swaping value without temp variable by destructing: ", a, b);
