//push(), pop(), shift(), unshift() и остальное

//push()
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const total = names.push('Nina')
// console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Nina' ]
// console.log('total', total) //5

//pop()
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const popped = names.pop()
// console.log('names', names) // [ 'Alex', 'Bob', 'Ivan' ]
// console.log('poppedArr', popped) //”Sasha” удалённый элемент сконца
// const names = []
// const result = names.pop()
// console.log('names', names) // []
// console.log('result', result) //undefined

//shift
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const shifted = names.shift()
// console.log('names', names) //[ 'Bob', 'Ivan', 'Sasha' ]
// console.log('shiftedArr', shifted) //”Alex”
// const arr = [];
// const result = arr.shift()
// console.log('names', arr) //[]
// console.log('result', result) //undefined

//unshift добавляет вначало элементы
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const unshifted = names.unshift('Nina')
// console.log('names', names) //[ 'Nina', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('unshiftedARR', unshifted) //5

//reverse() - мутирующий рабоатет для чисел, не для строк
// const numbers = [1, 2, 3, 4]
// const reversed = numbers.reverse()
// console.log('numbers', numbers) // reverse мутировал исходный массив и мы
// // получили: [1, 2, 3, 4]
// console.log('reversedArr', reversed) //[ 4, 3, 2, 1 ]

//split() - метод для работы со строками
//1
// const str = 'ab-cd-ef';
// const result = str.split("-")
// console.log("result", result) //result [ 'ab', 'cd', 'ef' ]

//2
// const str = 'ab-cd-ef';
// const result = str.split("-",2)
// console.log("result", result)

//3 для переворота  супер
// const str = 'ab-cd-ef';
// const result = str.split("")
// console.log("result", result)
// result [
// 'a', 'b', '-',
//     'c', 'd', '-',
//     'e', 'f'
// ]

//4
// const str = 'ab-cd-ef';
// const result = str.split()
//
// console.log("result", result) //result [ 'ab-cd-ef' ]

//join() - метод массива
//1
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join("-")
// console.log("joinResult:", joinResult) //joinResult: Alex-Bob-Ivan-Sasha

//2
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join()
// console.log("joinResult:", joinResult) //joinResult: Alex,Bob,Ivan,Sasha

//3
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join("")
// console.log("joinResult:", joinResult) //joinResult: AlexBobIvanSasha

//4
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join(" ,")
// console.log("joinResult:", joinResult) //joinResult: Alex ,Bob ,Ivan ,Sasha

//Task перевернуть строку telephoneNumber

//1
// const telephoneNumber = '123456789';
// const splitValue = telephoneNumber.split("")
// console.log(splitValue)
// const resultNumbers = splitValue.reverse().join("");
// console.log(resultNumbers)

//2 краткое в одну строку
// const telephoneNumber = '123456789';
// const splitValue = telephoneNumber.split("").reverse().join("")
// console.log(splitValue)

//concat()

//1
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const result = arr1.concat(arr2, arr3)
// console.log("result:", result) //result: [ 1, 2, 3, 4, 5, 6 ]
// console.log("arr1", arr1) //arr1 [ 1, 2 ] - не мутирует

//2
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const nestedArray = [ [5,6], [7,8] ]
// const result = arr1.concat(arr2,nestedArray)
// console.log("result:", result) //result: [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ] ]
// console.log("arr1", arr1) //arr1 [ 1, 2 ]

//flat() не понял!!!
// const nestedArray = [ 1,2 ], [5,6,], [ 7,8 ]]
// const flatResult = nestedArray.flat(Infinity)
// console.log(flatResult)

//forEach
//arr.forEach(function(el, index, arr) => {})
// const arr = [1,2,3,4,5,7]
// let sum = 0;
// arr.forEach(function (el) {
//     sum += el; //sum = sum + el
//     }
// )
// console.log("sum", sum) //22

//indexOf()
//1
// const arr = [1,2,3,4,5,7];
// const res = arr.indexOf(3);
// console.log("res", res) //2

//2 для проверки есть ли элемент в массиве вернут "-1" если индекс нет в массиве
// const arr = [1,2,3,4,5,7];
// const res = arr.indexOf(8);
// console.log("res", res) //-1

//lastIndexOf() вернёт индекс элемента последнего по поиску
// const arr = [1,2,4,3,4,5];
// const res = arr.lastIndexOf(4);
// console.log("res", res)

//find()
//1
// const strArr = ["adsasda","sdfsd", "sre"];
// const res = strArr.find((el)=> {
//     return el.length === 3;
// })
// console.log(res) //sre поиск в массиве по заданному заданию

//2
// const arr = [1,2,3,4,5];
// const res = arr.find((num)=> {
//     return num % 2 === 0;
// })
// console.log(res) //2

//3
// const arr = [1,2,3,4,5];
// const res = arr.find((num)=> {
//     return num === 0;
// })
// console.log(res) //undefined не нашли заданный элемент

//includes()
//1
// const num = [1,2,3,4,5];
// const result = num.includes(5);
// console.log(result) //true

//2
// const num = [1,2,3,4,5];
// const result = num.includes(7);
// console.log(result) //false нету в массиве

//filter()

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((str) => {
//     return str.length > 5
// })
// console.log(result) //[ 'exuberant', 'destruction', 'present' ] создаёт новый массив который подходит по условию что те слова в которых количество букв будет больше 5

//sort() - мутирующий метод массива

//1 может сортировать без доп параметров по табличке unicode
// const names = ['Alex', '!alex', 'alex', 'Виктор', 'Dymych', 'Valera', 'Igor', 'Ignat'];
// console.log(names.sort())
    // [
    // '!alex',  'Alex',
    //     'Dymych', 'Ignat',
    //     'Igor',   'Valera',
    //     'alex',   'Виктор'
    // ]

// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// console.log(numbers.sort()) //[ -3, -3525523, 1, 15215, 2, 366643 ]
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.sort()) //[ 1, 2, 3, 4, 5, 6 ]

//2
// const names = ["Alex", "alex"]
// console.log(names.sort() === names) //true

//compare function for sort
//по возрастанию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a,b) => {
//    return a - b //a - b < 0, а ставят влево
// })
// console.log(result) //[ -3525523, -3, 1, 2, 15215, 366643 ]

//по убыванию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
//  const result = numbers.sort((a,b) => {
//    return b - a //a - b > 0, b ставят влево
//  })
// console.log(result) //[ 366643, 15215, 2, 1, -3, -3525523 ]

//по string
const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'alex',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Виктор',
        isStudent: true,
    },
    {
        id: 5,
        name: 'виктор',
        isStudent: true,
    },
];
console.log(users.sort((a, b)=> a.name.localeCompare(b.name)))
//[
// { id: 5, name: 'виктор', isStudent: true },
// { id: 4, name: 'Виктор', isStudent: true },
// { id: 3, name: 'alex', isStudent: true },
// { id: 2, name: 'Alex', isStudent: true },
// { id: 1, name: 'Bob', isStudent: true }
// ] по своей логике по маленькой букве к заглавной, рф потом англ
console.log(users.sort((a, b)=> b.name.localeCompare(a.name)))
//[
//   { id: 1, name: 'Bob', isStudent: true },
//   { id: 2, name: 'Alex', isStudent: true },
//   { id: 3, name: 'alex', isStudent: true },
//   { id: 4, name: 'Виктор', isStudent: true },
//   { id: 5, name: 'виктор', isStudent: true }
// ] наоборот поменяли a и b местами.