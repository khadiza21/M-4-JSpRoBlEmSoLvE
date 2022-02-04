let arr = [12, 9, 10, 23, 15, 234, 45, 987, 23];

let small = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (small > arr[i]) {
    small = arr[i];
  }
}
console.log("Smallest Number of Array ", small);
