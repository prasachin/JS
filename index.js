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

let a = [];

// let b = a;
let b = structuredClone(a);

b.push(10);

console.log(a);
console.log(b);