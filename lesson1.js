//примитивы
// string, number, boolean, null, undefined, symbol, BigInt

//ссылочные типы данных
//сложная структура, есть свойства и методы
// object, array, function/class,  map, set

// const a = {
//   key: "test value",
// }; //номер ячейки памяти 1234
// const b = a; //1234
// console.log("a obj", a);
// console.log("b", b);

// console.log(a === b); //true (1234 === 1234)

// const newObj = {
//   age: 25,
// }; //555

// const newObj2 = newObj; //555
// newObj2.age = 35;
// console.log("newObj first", newObj);
// console.log("newObj second", newObj2);

//мутабельность (плохая практика первый обьект мутировал)
// const a = { test: "test value" };
// const b = a;
// b.test = "2";
// console.log(a);

// иммутабельность (необходимо создавать копию обьекта перед его переприсваиванием)
// const users = [
//   {
//     id: 1,
//     name: "Bob",
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: "Alex",
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: "Ann",
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: "Donald",
//     isStudent: true,
//   },
// ];
//мутабельно удаляем помледнего пользователя
// const result = users.pop();
// console.log(users)
// console.log(result)

//иммутабельно удаляем последнего
// const result = [...users];
// result.pop()
// console.log(result);
// console.log(users);
// console.log(result === users); //false


// const superUser = {
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };
// const result = {...superUser};
// result.address.city = "London"
// console.log(superUser.address.city)
// console.log(result.address.city)
// const newSuperUser2 = {...superUser, address:{...superUser.address, city: "LONDON"}}
//первый параметр спрэда обращение у кого взять, второй параметр (глубокая вложенность) мы изменияем ключ (иммутабельно) adress
// console.log(superUser.address.city); //не мутировал
// console.log(newSuperUser2.address.city); //изменили адрес
// const newSuperUser2 = {...superUser, address:{...superUser.address, city: "LONDON", geo: {...superUser.address.geo, lat: "test value"}}}
// console.log(superUser.address.geo.lat)// не мутировал
// console.log(newSuperUser2.address.geo.lat)//изменили адрес geo
//structuredClone()
// const newObj = structuredClone(superUser);
// newObj.address.geo.lat = "new structure value"
// console.log(superUser.address.geo.lat);// не мутировал
// console.log(newObj.address.geo.lat);//изменили адрес geo через structuredClone()


//aaaaa ЗАПОМНИ!!!
// const a = {
//   test: "value"
// }
// const b = a;
// b.test = "new"
// console.log(a)
//обязательно запомнить что это ссылочный тип дпнных и если мы меняем b, то и а меняется!!!!!!
// const a = [1,2,3];
// const b = [4,5,6];
// const result = [...a, ...b]
// console.log(result) //[ 1, 2, 3, 4, 5, 6 ]
//переписать массив с добавлением



//Деструктуризация
// const employee = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
// }
//1 example
// const {firstName, middleName,} = employee;
// console.log("firstName", firstName);
// console.log("middleName", middleName);
//2 example
// const employee = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
// }
// const middleName = "This is middleName"
// const {lastName, middleName: NewVariable } = employee
// console.log(lastName)//Ivanov
// console.log(middleName)//This is middleName
// console.log(NewVariable)//Ivanov

//Права пользования с backend
// const user = {
//     id: 1234,
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
//     // role : "admin",
// };
// const {middleName, role = "welcome user"} = user;
//задали default для role в обьекте user
// console.log("role:", role);
//"welcome user" знаем что такого ключа нет поэтому пришло default

//Ключ с заглушкой
// const user = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
//     role : "admin",
// };
// const {middleName, role = "welcome user"} = user;
// console.log("role:", role);
//role: admin

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user',
//     },
// };
// const {firstName, permission: {canDelete, canEdit }} = employee
// console.log("canDelete", canDelete)
// canDelete: false
// console.log("canEdit", canEdit)
// canEdit: true

//array
// const colors = ['red', 'blue', 'green', 'white', 'black'];
// const [firstElement, secondElement, greenColor] = colors;
// console.log(firstElement); //'red'
// console.log(secondElement); //'blue'
// console.log(greenColor); //'green'

//строгая привязка
// const [firstElement, secondElement, ,whiteColor] = colors;
// console.log(firstElement); //'red'
// console.log(secondElement); //'blue'
// console.log(''); //'пропуск'
// console.log(whiteColor); //white

//
// const colors = ['red', ['firstValue', "secondValue"], , 'green', 'white', 'black'];
// const [firstValue, [nestedValue1, nestedValue2],testValue = "test", thirdValue] = colors;
// console.log(firstValue); //'red'
// console.log(nestedValue1); //'firstValue'
// console.log(nestedValue2); //'secondValue'
// console.log(thirdValue); //green
// console.log(testValue); //test если пустота то default значение

//rest
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// function Hello([firstValue, ...rest]) {
// console.log(firstValue);
// console.log(rest);
// }
//
// Hello(arr);

function arr2bin(arr){
    let sum = 0;
    arr.forEach(function(num){
        if(typeof num === 'number'){
            sum += num;
        }
    });
    return sum.toString(2);
}

console.log(arr2bin([]))



//примитивы
//string, number, symbol, undefined, null, bigInt

//ссылочные
//object, array, functions

//особенности ссылочныъ типов данныю

//1 более сложная структура
//2 имеют свойства и методы
//3 ссылочный тип данных

// const users1 = {  //#123456 литерал обьекта (его ячейка в памяти)
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = users1; //#123456 (одна и та же ячейка в памяти)
// users2.isStudent = false;
// // console.log('users2: ', users2); //users2:  { id: 1, name: 'Bob', isStudent: true }
// console.log('users1: ', users1); //users1:  { id: 1, name: 'Bob', isStudent: false }
// console.log('users2: ', users2);

// console.log(users1 === users2);//true

// const users1 = { //#123456 литерал обьекта (его ячейка в памяти)
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const copyUsers1 = { // #890--99876 (уже другая ячейка в памяти)
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };
// console.log(users1 === copyUsers1); //false

// const a = { //#111
//   id: '1',
//   name: 'Bob',
// };
// const b = a; //#111
// b.name = 'Alex';
// console.log(a === b); одна и та же ячейка
// console.log(a); //{ id: '1', name: 'Alex' }

// const a = [];//#4444
// const b = a;
// console.log(a === b); //true

// const a = (a, b) => {
//   return a + b;
// };
// console.log(typeof a);
// const b = a;
// console.log(a === b); //true

// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const copyUsers1 = {
//   // #890--99876
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };

//spread operator
// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const copyUsers1 = { ...users1 }; //#44444 возьми все ключ значения у users1 и помести их в новый обьект copyUsers1

// console.log('copyUsers1: ', copyUsers1);//copyUsers1:  { id: 1, name: 'Bob', isStudent: true }
// console.log(users1 === copyUsers1);//false потому что у них разные ячейки памяти

//1) видим ссылочный тип данных -> мы делаем копию -> изменяем копию и работаем с ней
// const users = [ //12345
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ];
// const usersCopy = [...users]; //123456
// const result = usersCopy.pop(); вернётся удалённый последний обьект(элемент) массива
// console.log('users: ', users); 4 обьекта
// console.log('usersCopy: ', usersCopy); 3 обьекта

// 1 случай Spread
// const superUser = {
//   //#123
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     //#4444
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       //#555
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };
// const superUserCopy = { ...superUser };
// superUserCopy.address.city = 'Minsk';
// console.log('initial superUser: ', superUser.address.city); //initial superUser:  Minsk изменили вложенные данные был Lebsackbury
// console.log('copy super user: ', superUserCopy.address.city); //copy super user:  Minsk изменили вложенные данные был Lebsackbury
// что нужно сделать чтобы не менять
// const superCopy2 = {...superUser, address: {...superUser.address, city: 'Minsk'}};
// const superCopy2 = {...superUser, address: { ...superUser.address, city: 'Minsk', geo: { ...superUser.address.geo, lat: 'test value' } },};
// console.log('initial superUser: ', superUser.address.city); //initial superUser:  Lebsackbury
// console.log('copy super user: ', superCopy2.address.city); //copy super user:  Minsk
// console.log('initial geo', superUser.address.geo.lat); //initial geo -38.2386
// console.log('after geo copy', superCopy2.address.geo.lat); //after geo copy test value

// 2 случай structuredClone(superUser)
// const superUser = {
//   //#123
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     //#4444
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       //#555
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };
// const structuredCloneCopy = structuredClone(superUser);
// structuredCloneCopy.address.geo.lat = 'structured clone test value';
// console.log('super user: ', superUser.address.geo.lat); //super user:  -38.2386
// console.log('structured clone copy: ', structuredCloneCopy.address.geo.lat); //structured clone copy:  structured clone test value

//Деструктуризация

// function calc(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// const result = calc(5, 2);
//обычная форма записи через index элемента
// const sum = result[0];
// const sub = result[1];

// const [sum, sub, mult, divide] = result;
//обращение напрямую через деструктуризацию к индексам под sum и sub
//важно что берём по индексам через дуструктуризацию
// console.log(calc(5, 2));
// console.log(sum);
// console.log(sub);
// console.log(mult);
// console.log(divide);

// const person = {
//   name: "Kirill",
//   age: 24,
//   adress: {
//     country: "Poland",
//     city: "warszaw",
//   },
// };
// const name = "Bob";
// const { name: newName, age, car, adress } = person;
//переписали повторку name на newName в деструктуризации
// const newCountry = adress.country; //только так можно обратиться к country
// console.log(name);
// console.log(newName);
// console.log(age);
// console.log(car);
// console.log(adress);
// console.log(newCountry);

// const employee = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
// }

// const firstName = "Nina";

// const {firstName: name, lastName} = employee;
// console.log("firstName", firstName);
//firstName Nina
// console.log("name", name);
//name Ivan

//права пользования с backend
// const user = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
//     // role : "admin",
// };
// const {middleName, role = "welcome user"} = user;
// console.log("role:", role);
//"welcome user"

// const user = {
//     firstName: "Ivan",
//     lastName: "Ivanov",
//     middleName: "Ivanov",
//     role : "admin",
// };
// const {middleName, role = "welcome user"} = user;
// console.log("role:", role);
//role: admin

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user',
//     },
// };
// const {firstName, permission: {canDelete, canEdit }} = employee
// console.log("canDelete", canDelete)
// canDelete: false
// console.log("canEdit", canEdit)
// canEdit: true

//array
// const colors = ['red', 'blue', 'green', 'white', 'black'];
// const [firstElement, secondElement, greenColor] = colors;
// console.log(firstElement); //'red'
// console.log(secondElement); //'blue'
// console.log(greenColor); //'green'

//строгая привязка
// const [firstElement, secondElement, ,whiteColor] = colors;
// console.log(firstElement); //'red'
// console.log(secondElement); //'blue'
// console.log(''); //'пропуск'
// console.log(whiteColor); //white

//
// const colors = ['red', ['firstValue', "secondValue"], , 'green', 'white', 'black'];
// const [firstValue, [nestedValue1, nestedValue2],testValue = "test", thirdValue] = colors;
// console.log(firstValue); //'red'
// console.log(nestedValue1); //'firstValue'
// console.log(nestedValue2); //'secondValue'
// console.log(thirdValue); //green
// console.log(testValue); //test если пустота то default значение

//rest
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// function Hello([firstValue, ...rest]) {
// console.log(firstValue);
// console.log(rest);
// }
//
// Hello(arr);