const phones = [
  { name: "samsung 3", price: 34343, camera: 12, storage: 23 },
  { name: "walton", price: 30343, camera: 10, storage: 8 },
  { name: "shaomi", price: 34343, camera: 8, storage: 16 },
  { name: "oppo", price: 24343, camera: 12, storage: 32 },
  { name: "nokia", price: 4343, camera: 10, storage: 4 },
  { name: "htc", price: 14343, camera: 8, storage: 36 }
];

let cheapest = phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone; 
    }

}
 console.log("Price:  "+ cheapest.price);

