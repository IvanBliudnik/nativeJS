//Задачки
//1
// const a = {};
// const b = {};
// const c = a;
// const d = c;

// console.log(a === b); //false
// console.log(a === c); //true
// console.log(c === d); //true
// console.log(a === c); //true

//2
// const a = {};
// const b = a;
// b["test"] = "test value";

// console.log(b === a);
// console.log(a);
// смутриурет ли объект a?
//true

//3
// const user = {
//   name: "John",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };
// const updatedUser = { ...user };
// updatedUser.address.city = "Toronto";
// console.log(updatedUser);

//4
// const arr = [1, 2, 3, 4, 5];
// function addElementToArray(arr, el) {
//   const newArray = arr.push(el);
//   return newArray;
// }
// addElementToArray(6);
// console.log(arr);
//не работает разобраться

//5
// const user = { name: "John", age: 25, city: "New York" };
// console.log(user.name);
// console.log(user.age);
// console.log(user.city);

//6
// const fruits = ["apple", "banana", "orange"];
// const [, secondFruit, thirdFruit] = fruits;
// console.log(secondFruit); //banana
// console.log(thirdFruit); //orange

//7
// const person = { name: "Alice", age: 30 };
// // Деструктуризация в параметрах функции
// function printPersonDetails({ name, age } = person) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// printPersonDetails(person); // Вывод: Name: Alice, Age: 30
//good

//8
const students = [
  { name: "Alex", grade: "A" },
  { name: "Emma", grade: "B" },
  { name: "Chris", grade: "C" },
];
