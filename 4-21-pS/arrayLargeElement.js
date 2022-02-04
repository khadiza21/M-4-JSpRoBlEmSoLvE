let arr = [12, 9, 0, 23, 5, 234, 45, 987, 23];

let large = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (large < arr[i]) {
    large = arr[i];
  }
}
console.log("Large Number of Array ", large);
