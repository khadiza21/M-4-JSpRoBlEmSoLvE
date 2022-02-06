let products = [
  { name: "dell laptop", price: 50000 },
  { name: "lenovo yoga", price: 55000 },
  { name: "Asus afsus 14", price: 35000 },
  { name: "smart watch samsung", price: 7000 },
  { name: "apple watch", price: 20000 },
  { name: "plus one phone 4", price: 27000 },
];

function searchProducts(products, searchText) {
  const result = [];
  for (const product of products) {
    if (product.name.includes(searchText)) {
      result.push(product);
      // console.log(product);
    }
  }
  return result;
}
console.log(searchProducts(products, "watch"));
