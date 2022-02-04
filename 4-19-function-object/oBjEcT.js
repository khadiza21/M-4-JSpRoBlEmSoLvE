// object declearation
var student1 = {
  id: 223, //property = (key:value)
  name: "KA",
  marks: 34,
  phone: 2323,
};

console.log(student1);
console.log(student1.id);

var mobile1 = {
  Name: "oppo",
  color: "black",
  price: 13999,
  screenSize: 3,
  Storage: "28gb",
};

//get object value
let stuName = student1.name;
console.log(stuName);

//set object value
//type 1
mobile1.color = "Red";
//type 2
mobile1["price"] = 23000;
//typwe 3
let newName = mobile1.Name;
mobile1[newName] = "Shawmi MI";

console.log(mobile1);
