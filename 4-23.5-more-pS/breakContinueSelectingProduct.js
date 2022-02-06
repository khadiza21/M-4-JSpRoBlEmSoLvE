let products = [
  { name: "dell laptop", price: 50000 },
  { name: "lenovo yoga", price: 55000 },
  { name: "Asus afsus 14", price: 5000 },
  { name: "smart watch samsung", price: 7000 },
  { name: "apple watch", price: 4000 },
  { name: "plus one phone 4", price: 2000 },
];
console.log(" break explore ");
for (const product of products) {
  if (product.price < 5000) {
    break;
  }
  console.log(product);
}

console.log(" continue explore ");
for (const product of products) {
  if (product.price < 10000) {
    continue;
  }
  console.log(product);
}
