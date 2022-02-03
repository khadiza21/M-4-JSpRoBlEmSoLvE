const cart = [
    {name: 'laptop', price:43523 ,quantity:1},
    {name: 'shirt', price:523 ,quantity:5},
    {name: 'watch', price:3523 ,quantity:2},
    {name: 'phone', price:2523 ,quantity:1},
];

let totalPrice = 0;
for (const product of cart){
    totalPrice += product.price*product.quantity;
}
console.log(totalPrice);