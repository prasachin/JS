// console.log(a);
// console.log(c);
// console.log(z);

// var a = 10;
// let b = 20;
// const c = 30;

// var result = multiply(a, b);
// console.log(result);

// console.log(a);

// function multiply(c, d) {
//   var pro = c * d;
//   function add() {
//     var sum = pro + 100;
//     return sum;
//   }
//   return pro;
// }

// console.log(a);
// console.log(b);

// var result = multiply(a, b);

// console.log(result);

// let a = 10;
// let b = a;
// console.log(b);
// b = 20;

// console.log(a);
// console.log(b);

// console.log(typeof a);

// let obj1 = { x: 10 };

// let obj2 = obj1 ;

// obj2.x = 20;

// console.log(obj1);
// console.log(obj2);
// console.log(typeof obj1);
// let arr = [];

// console.log(typeof arr);
// console.log(Array.isArray(arr));

// let arr = new Array();
// console.log(Array.isArray(arr));

// let arr = [1, 2, 3, 4, 5];
// let arr = new Array(5);
// console.log(arr[110]);

// let arr = [1, 2, 3, 4, 5, "Sachin"];
// console.log(typeof arr[0], typeof arr[5]);

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[arr.length - 1]);

// inserting elements.
// console.log(arr);
// arr.push(0, 6);
// console.log(arr);

// console.log(arr);
// arr.unshift(6);
// console.log(arr);

// deleting elements
// console.log(arr);
// arr.pop();
// console.log(arr);

// console.log(arr);
// arr.shift();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, "string"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], "at index", i);
// }

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i], "at index", i);
//   i++;
// }

// let arr = [1, 2, 3, 4, 5, 6, 8];

// let foreachreturn = arr.forEach((v, i) => {
//   // console.log(v, "at index", i);
//   return v;
// });

// let mapreturn = arr.map((v, i) => {
//   // console.log(v, "at index", i);
//   return 2 * v;
// });

// console.log(foreachreturn);
// console.log(mapreturn);

// let arr = [1, 2, 3, 4, 5, 6, 8];

// let sum = arr.reduce((acc, curr, i) => {
//   // console.log(curr, "at index", i);
//   return acc + curr;
// }, 10);

// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 8];
// // filter();

// let filteredarray = arr.filter((curr, i) => {
//   // console.log(curr, "at index", i);
//   return curr % 2 !== 0;
// });

// console.log(filteredarray);

// let a = [];

// // let b = a;
// let b = structuredClone(a);

// b.push(10);

// console.log(a);
// console.log(b);

// primitivity
// let a = "string";
// let b = a;
// b = "new string";

// console.log(a);
// console.log(b);
// let a = [1];
// a[0] = 2;
// console.log(a[0]);

// let s = "string";
// s[0] = 'R';
// console.log(s[0]);

// let s = "I am a sentence";

// let s = 'fsdkjgbhsd'
// let s = `welcom ${username} to the world of JavaScript`;
// let s = new String("welcome to the world of JavaScript");
// console.log(s.slice(2));
// console.log(s.substring(2));

// console.log(s.includes('c'));
// console.log(s.indexOf('c'));
// console.log(s.split(" ")[3]);

// let separated = s.split(" ");
// console.log(separated);

// let joined = separated.join(" ");
// console.log(joined);

// let w = "word";
// w = 'W' + w.slice(1);
// // console.log(w);

// let s = "I am a sentence";
// console.log(s);
// let separated = s.split(" ");

// for(let i = 0; i<separated.length; i++){
//     separated[i] = separated[i][0].toLocaleUpperCase() +  separated[i].slice(1);
//     // console.log(separated[i]);
// }

// let joined = separated.join(" ");
// console.log(joined);

// let obj = {};
// let obj = new Object();
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// class User {
//   constructor() {}
// }

// // let user1 = new User("Sachin", undefined);
// let user2 = new User();
// user2.profession = "cricketer";
// // console.log(user1["age"]);
// // console.log(user1?.age);

// // console.log(user2.profession);
// console.log(user2);

// // delete user2.profession;
// user2.profession = "not cricketer";
// console.log(user2);

// let obj = { name: "Sachin", age: 50, profession: "cricketer" };
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// console.log(Object.keys(obj));

// Object.defineProperty(obj, "password", {
//   value: "12343",
//   writable: false, // if false: it prevents us from changing the value of password, if true: it allows us to change the value of password
//   enumerable: true, // if false: it prevents the password property from being listed in loops and Object.keys(), if true: it allows the password property to be listed in loops and Object.keys()
//   configurable: false, // if false: it prevents us from deleting the password property or changing its attributes, if true: it allows us to delete the password property and change its attributes
// });
// console.log(obj.password);
// // obj.password = "New password";
// delete obj.password;
// console.log(obj.password);
// obj.password = "12345";
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(obj.password);

// let obj = { name: "Sachin", age: 50, profession: "cricketer" };

// console.log(obj);

// // Object.freeze(obj); // it prevents us from changing the value of properties, adding new properties, or deleting existing properties. It makes the object immutable.

// Object.seal(obj); // it prevents us from adding new properties or deleting existing properties, but it allows us to change the value of existing properties. It makes the object mutable but not extensible.

// obj.name = "Rahul";
// delete obj.age;
// obj.password = "12345";

// console.log(obj);

// let car = {
//   NoOfWheels: 4,
//   Brand: "Mahindra",
// };

// //protoyping: it is a mechanism by which an object can inherit properties and methods from another object. The object that inherits is called the child object, and the object from which it inherits is called the parent object. In JavaScript, every object has a hidden property called __proto__ that points to its parent object. When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype (the parent object). This process continues up the prototype chain until it finds the property or method or reaches the end of the chain (null).
// let thar = Object.create(car);
// thar.model = "Thar ROXX";
// thar.Brand = "Toyota";

// console.log(thar);
// console.log(thar.Brand);

// let user = {};
// user.name = "name";
// user.age = 50;
// user.password = "12345";
// console.log(user);
// user = JSON.stringify(user); serialization: it is the process of converting a JavaScript object into a string. This is useful when we want to store the object in a file or send it over a network. The JSON.stringify() method is used for serialization. It takes a JavaScript object and returns a JSON string representation of that object. The JSON.parse() method is used for deserialization. It takes a JSON string and returns a JavaScript object.
// user = JSON.parse(user);
// console.log(user.name);

// let user = { name: "Sachin", age: undefined, profession: "cricketer" };
// let user = {
//   name: "Sachin",
//   greet: function welcome() {
//     console.log("Welcome to the world of JavaScript");
//   },
//   profession: "cricketer",
// };
// console.log(user);
// user = JSON.stringify(user);

// console.log(user);

// user = JSON.parse(user);

// console.log(user);

// let car = {
//   NoOfWheels: 4,
//   Brand: "Mahindra",
// };

// let thar = Object.create(car);
// thar.model = "Thar ROXX";

// console.log(thar.Brand, thar.NoOfWheels, thar.model);
// thar = JSON.stringify(thar);

// console.log(thar);

// thar = JSON.parse(thar);

// console.log(thar.Brand, thar.NoOfWheels, thar.model);

// let obj = {};

// obj.self = obj;

// obj = JSON.stringify(obj);

// console.log(obj);

// obj = JSON.parse(obj);

// console.log(obj);

// let el = document.getElementById("title");
// console.log(el);

// let el = document.getElementsByClassName("para");
// console.log(el);

// let el = document.getElementsByTagName("p");
// console.log(el);

// let el = document.querySelector(".para");
// console.log(el);

// let el1 = document.querySelector("#title");
// console.log(el1);

// let el1 = document.querySelectorAll(".para");
// console.log(el1);

// let btn = document.getElementById("btn");
// // console.log(btn);

// btn.addEventListener("click", function (e) {
//     console.log(e);
//   console.log("Button clicked");
// }, true);

// console.log("Start");

// function X() {
//   console.log("Hey I am an outer function, please invoke me.");
// }

// setTimeout(X, 5000);

// function dummy() {
//   let start = Date.now();
//   while (Date.now() - start < 5000) {
//     //
//   }
//   console.log("from dummy");
// }

// dummy();

// console.log("end");

// let users = GetUsers();

// let orders = GetOrders(userId);

// let amount = GetAmount(orders);

// GetUsers(function X(userId) {
//   GetOrders(userId, function Y(orders) {
//     GetAmount(orders, function Z(amount) {
//       console.log(users, orders, amount);
//     });
//   });
// });

// let users  = fetch("https://jsonplaceholder.typicode.com/users")

// console.log(users);

// console.log("End");
// let users = GetUsers();

// let orders = GetOrders(userId);

// let amount = GetAmount(orders);

// let promise = new Promise((resolve, reject) => {
//   // resolve("Promise resolved successfully");
//   reject("Promise rejected");
// });

// console.log(promise);

// promise
//   .then((res) => {
//     console.log("Hello", res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     console.log("Promise is settled");
//   });
