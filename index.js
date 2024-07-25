//Data Types
//number
// const x = 90;
// console.log(x);
// console.log(typeof x);

//float
// const result = 5.78;
// console.log(result);
// console.log(typeof result);
//string
// const output = "Ram Thapa";
// console.log(output);
// console.log(typeof output);

//Boolean
// const isMarried = false;
// console.log(isMarried);
// console.log(typeof isMarried);
//undefined
// let a;
// console.log(a);
// console.log(typeof a);

//null
// const x = null;
// console.log(x);
// console.log(typeof x);

//BigInt
// const x = 6576894536768n;
// console.log(x)
// console.log(typeof x)

//symbol
// const result = Symbol("Who are you");
// console.log(result);
// console.log(typeof result);

//Object types

// const obj = {
//   fName: "Ram Thapa",
//   age: 23,
//   isMarried: true,
//   occupation: "IOS Developer",
//   salary: 45000,
// };
// console.log(obj);
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

//Type Conversion
// const x = "123";
// const val = Number(x);
// console.log(val);
// console.log(typeof val);

// const result = "8.98";
// const output = parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const result = 1 + "1";
// console.log(result);
// console.log(typeof result);

// const output = 8 - "4";
// console.log(output);
// console.log(typeof output);

// const result = 123;
// const output = result.toString();
// console.log(output);
// console.log(typeof output);

// let x = true + 1;
// console.log(x);

// let y = false + 1;
// console.log(y);

// const result = true;
// const output = String(result);
// console.log(output);
// console.log(typeof output);

// const result = "true";
// const output = Boolean(result);
// console.log(output);
// console.log(typeof output);

// let result = "";
// const output = Boolean(result);
// console.log(output);
// console.log(typeof output);

// const date = new Date();
// const output = date.toString();
// console.log(output);
// console.log(typeof output);

// const x = 123;
// const result = x.toString();
// console.log(result);
// console.log(typeof result);

// const x = 123;
// const result = String(x);
// console.log(result);
// console.log(typeof result);

// let x = 2;
// console.log(false+x)

// let x = "";
// let result = Boolean(x);
// console.log(result);
// console.log(typeof result);

// let result = true;
// let output = String(result);
// console.log(output);
// console.log(typeof output);

// let date = new Date();
// let result = date.toString();
// console.log(result);
// console.log(typeof result);

//String Method

// const result = "Hello World";
// //length
// console.log(result.length);

// //charAt
// console.log(result.charAt(2));

// //indexof
// console.log(result.indexOf("o"));

// //lastIndexOf
// console.log(result.lastIndexOf("o"));

// //lowerCase
// console.log(result.toLowerCase());

// //upperCase
// console.log(result.toUpperCase());

// //split
// console.log(result.split(" "));
// //includes
// console.log(result.includes("Worlds"));
// //replace
// console.log(result.replace("World", "EveryOne"));

// //slice
// console.log(result.slice(1, 6));

// //subString
// console.log(result.substring(1, 6));

// //trim

// const output = "        Haina k ho esto yo.Chhaka parchu";
// console.log(output.trim());

// //concatination
// console.log(result.concat(" I am JavaScript!"));

//Operators
//AssignMent Operators

// let y = 90;
// y += 120;
// console.log(y);

// //comparison Operators
// let a = 10;
// let b = 5;
// let c = "10";

// //
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== c);

// const str1 = "Hello";
// const str2 = "World";

// console.log(str1 + " " + str2);

// let ageVote = 18;
// let result = ageVote >= 18 ? "Vote Halna Payeu" : "Payenau";
// console.log(result);

// const x = "123";
// const result = +x;
// console.log(result);
// console.log(typeof result);

// const x = "123";
// const result = -x;
// console.log(result);
// console.log(typeof result);

// const obj = {
//   name: "Ram Thapa",
//   age: 23,
// };

// delete obj.name;
// console.log(obj);

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(`${i} is odd Number`);
//   }
// }

//
// const result = "Hello World";
// const output = "I Love JavaScript";
// const Str3 = "sabai Jana Garumna hai";

// console.log(`${result} ${output} ${Str3}`);

// const a = 90;
// const b = 80;
// const c = 40;
// const ans = a + b + c;
// console.log(`The sum of  number is: ${ans}`);

//Unary Operators
// let ans = "234";
// let output = +ans;
// console.log(output);
// console.log(typeof output);

// let ans = "234";
// let output = -ans;
// console.log(output);
// console.log(typeof output);

// const obj = {
//       name:"Ram Thapa",
//       age:24
// }

// delete obj.age

// console.log(obj)

// If Else

// let x = 85;
// if (x >= 90) {
//   console.log("Grade A+");
// } else if (x >= 80) {
//   console.log("Grade A");
// } else if (x >= 70) {
//   console.log("Grade B+");
// } else if (x >= 60) {
//   console.log("Grade B+");
// } else if (x >= 50) {
//   console.log("Grade B");
// } else if (x >= 40) {
//   console.log("Grade B");
// } else {
//   console.log("Failed");
// }

// let email = "ramthapa@gmail.com";
// let password = "99999999";

// if (email === "ramthapa@gmail.com" && password === "888888") {
//   console.log("Login Successfull");
// } else {
//   console.log("Invald Password");
// }

//

// let x = 10;
// if (x >= 5) {
//   console.log("x is greater or equal to 5!");
// } else {
//   console.log("x is not greater or equal to 5!");
// }

//Switch (Control Statement)
// let role = "super admin";
// switch (role) {
//   case "seller":
//     console.log("seller can add product");
//     break;
//   case "buyer":
//     console.log("buyer can buy their products");
//     break;

//   case "admin":
//     console.log("admin can access to add seller role");
//     break;

//   case "super admin":
//     console.log("Super admin can control everything in Web App");
//     break;

//   default:
//     console.log("Invalid role");
// }

// let shipping = "Delivered";
// switch (shipping) {
//   case "Processing":
//     console.log("Timro saman Processin hudae Cha");

//     break;
//   case "Shipped":
//     console.log("Timro saman Bato ma audae cha");

//     break;

//   case "Delivered":
//     console.log("Location ma Aunusna saman leraye");

//     break;

//   default:
//     console.log("Invalid Shipping Process");
//     break;
// }

//statusCode
// let statusCode = 200;
// switch (statusCode) {
//   case 201:
//     console.log("Created!");
//     break;
//   case 400:
//     console.log("Bad Request!");
//     break;
//   case 401:
//     console.log("UnAuthorized!");
//     break;

//   case 403:
//     console.log("Forbidden!");
//     break;

//   case 500:
//     console.log("Internal Server Error!");
//     break;

//   case 200:
//     console.log("Ok!");
//     break;

//   default:
//     console.log("Invalid StatusCode");
//     break;
// }

//Loop
//for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`I Love JavaScript: ${i}`);
// }

// for (let i = 1; i < 10; i++) {
//   console.log(`3*${i} = ${3 * i}`);
// }

//even number
// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`The Even Number is: ${i}`);
//   }
// }

// for (let i = 1; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(`The Odd Number is: ${i}`);
//   }
// }
//while loop
// let i = 0;
// while (i <= 10) {
//   console.log("Hello World" + i);
//   i++;
// }

//do while
// let i = 1;
// do {
//   console.log("Hello World" + i);
//   i++;
// } while (i <= 10);

//Array
// let result = [3, 4, 5, 6, 7, 8];
// let sum = 0;

// for (let i = 0; i < result.length; i++) {
//   sum += result[i];
// }

// console.log(`The Sum of Arr is : ${sum}`);

//Array Methods

// let arr = [4, 5, 6, 7, 8, 2, 3, 4];
//length;
// console.log(arr.length);

//push
// arr.push(12);
// console.log(arr);

//pop

// arr.pop();
// console.log(arr);

//shift
// arr.shift();
// console.log(arr);

// arr.unshift(15);
// console.log(arr);

//splice
// arr.splice(1, 3);
// console.log(arr);

// let result = ["JavaScript", "is", "Funny", "Language"];
// console.log(result.join("-"));

//slice
// let result = arr.slice(1, 4);
// console.log(result);//includes

//includes
// let result = arr.includes(4);
// console.log(result);

//indexOF
// let result = arr.indexOf(4);
// console.log(result);

// let result = arr.lastIndexOf(4);
// console.log(result);

//concat
// console.log(arr.concat("Hello"));

// let arr = [];
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// let result = sum * 2;

// console.log(`The SUm of arr is: ${sum}`);
// console.log(`The ans is: ${result}`);

//Object

// const person = {
//   name: "Ram Thapa",
//   age: 23,
//   occupation: "Agriculture",
//   isMarried: false,
//   address: {
//     street: "Dillibazar",
//     city: "Kathmandu",
//     country: "Nepal",
//   },

//   greet: function () {
//     console.log(
//       `Hello My Name is:${this.name}.And I am : ${this.age} years old`
//     );
//   },
// };

// //Destructue

// const {
//   name,
//   age,
//   occupation,
//   isMarried,
//   address: { street, city, country },
// } = person;

// console.log(name, age, occupation, isMarried, street, city, country);
// person.greet();

//function

// function myFunc(a, b) {
//   return a + b;
// }

// let result = myFunc(8, 9);
// console.log(result);

// function Circle(radius) {
//   return Math.PI * radius * radius;
// }

// let result = Circle(5);
// console.log(`The area of circle is: ${result}`);

// function Greet(name, age, education) {
//   console.log(
//     `Hello my name is:${name}.I am : ${age} years old. And I have completed my bachelors in : ${education} from Softwarica college of It & E-commerce`
//   );
// }

// Greet("Ram Thapa", 23, "Bsc (hons) Computing");

//JavaScript ma three ways print message
//console.log()
//alert
//prompt

// function myFunc() {
//   let a = prompt("Enter your number");
//   let b = prompt("Enter your number");
//   let result = Number(a) + Number(b);
//   if (result) {
//     alert(`The Sum of two number is : ${result}`);
//   }
// }

// myFunc();

//CalculatingCartValue

// function CalculateTotal(cartItems, taxRate) {
//   let total = 0;
//   for (let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;
//   }
//   total += total * taxRate;
//   return total;
// }

// let cart = [
//   { name: "Dr Martin", price: 8000, quantity: 1 },
//   { name: "Air Force 1", price: 6000, quantity: 2 },
// ];

// let ans = CalculateTotal(cart, 0.02);
// console.log(`Your full and final payment is: ${ans}`);

//Scoping;

// function myFunc() {
//   if (true) {
//     var x = 90;
//     let y = 80;
//     const z = 60;
//     console.log(y);
//   }
//   console.log(x);
// }
// myFunc();
//DOM Manipulation

// let result = document.getElementById("hello");
// result.innerText = " I have many Proof";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.textAlign = "center";

// result.setAttribute("class", "newClass");
// console.log(result.getAttribute("class"));

// let ans = document.getElementsByClassName("myDiv")[0];
// ans.innerHTML = "Haina k ho yesto yo Chhaka parchu";
// ans.style.backgroundColor = "blue";
// ans.style.color = "white";
// ans.style.textAlign = "center";
// ans.style.padding = "10px";

// let output = document.getElementsByClassName("myDiv");
// output[1].innerHTML = "Kinaki Nepal ma opportunities nai kaam cha";
// output[1].style.backgroundColor = "purple";
// output[1].style.color = "white";
// output[1].style.textAlign = "center";
// output[1].style.padding = "10px";

// let display = document.getElementsByTagName("span")[0];
// display.innerText = "Nepalma yiniharkukai raj chha";
// display.style.backgroundColor = "yellow";
// display.style.color = "black";

// let show = document.getElementsByTagName("span")[1];
// show.innerText = "Bichar lekhchas computer ma gadi kholama ani";
// show.style.backgroundColor = "gray";
// show.style.color = "white";

// function AddTask() {
//   let h1 = document.createElement("h1");
//   h1.innerHTML = "Task1";
//   document.body.prepend(h1);
// }

// function RemoveTask() {
//   let div = document.querySelector("h1");
//   div.remove();
// }

// let btnAdd = document.querySelector("#btnAdd");
// btnAdd.style.backgroundColor = "blue";
// btnAdd.style.color = "#fff";
// btnAdd.style.padding = "20px";
// btnAdd.style.border = "none";
// btnAdd.style.cursor = "pointer";

// btnAdd.onclick = AddTask;

// let btnRemove = document.querySelectorAll("button")[1];
// btnRemove.style.backgroundColor = "red";
// btnRemove.style.color = "#fff";
// btnRemove.style.padding = "20px";
// btnRemove.style.border = "none";
// btnRemove.style.cursor = "pointer";

// btnRemove.onclick = RemoveTask;

//Advance Array Method

let arr = [4, 5, 2, 3, 7, 8, 9];
//find

// let ans = arr.find((value) => value > 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.find((value) => value.inStock);
// console.log(output);

//filter
// let ans = arr.filter((value) => value > 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.filter((value) => !value.inStock);
// console.log(output);

//some
// let ans = arr.some((value) => value > 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.some((value) => !value.inStock);
// console.log(output);

//every
// let ans = arr.every((value) => value > 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.every((value) => !value.inStock);
// console.log(output);

//forEach
// let ans = arr.forEach((value) => value * 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.forEach((value) => value.name);
// console.log(output);

// //map
// let ans = arr.map((value) => value * 7);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.map((value) => value.name);
// console.log(output);
// let h1 = document.createElement("h1");
// h1.innerHTML = output;
// document.body.append(h1);

//reduce
// let ans = arr.reduce((accum, curValue) => accum + curValue);
// console.log(ans);

// const products = [
//   { id: 1, name: "Dr Martin", price: 8000, inStock: true },
//   { id: 2, name: "Air Force 1", price: 5000, inStock: false },
//   { id: 3, name: "SB Dunk", price: 4500, inStock: false },
//   { id: 4, name: "Travis Cott", price: 6500, inStock: true },
// ];

// let output = products.reduce((total, curValue) => total + curValue.price, 0);
// console.log(output);

//addEventListneres
// const heading = document.getElementById("heading");
// const box1 = document.getElementById("box1");
// const addBtn = document.getElementById("btnAdd");
// let input = document.getElementById("newInput");

// addBtn.addEventListener("click", () => {
//   console.log("Clicked");
//   heading.innerText = "Who are you";
//   heading.style.backgroundColor = "red";
//   heading.style.color = "white";
//   heading.style.padding = "20px";
// });

// addBtn.addEventListener("dblclick", () => {
//   addBtn.style.backgroundColor = "purple";
//   addBtn.style.color = "white";
//   addBtn.style.padding = "20px";
//   addBtn.style.border = "none";
// });

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

const input = document.getElementById("myInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

const myFunc = () => {
  localStorage.setItem("key1", JSON.stringify({ name: "Shyam Giri", age: 23 }));
};
addBtn.addEventListener("click", myFunc);

removeBtn.addEventListener("click", () => {
  localStorage.clear();
});
if (localStorage.getItem("key1")) {
  console.log(JSON.parse(localStorage.getItem("key1")));
}
