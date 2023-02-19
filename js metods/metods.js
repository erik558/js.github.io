// arr.push(...items)// – добавляет элементы в конец,
// arr.pop()// – извлекает элемент из конца,
// arr.shift()// – извлекает элемент из начала,
// arr.unshift(...items)// – добавляет элементы в начало.

// ______________________________delete__________________________________
// let arr = ["I", "go", "home"];
// console.log(arr);

// delete arr[1]; // удалить "go"

// console.log(arr); // undefined

// // ______________________________splice__________________________________
// let arr1 = ["Я", "изучаю", "JavaScript"];
// console.log(arr1);

// arr1.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// console.log(arr1); // осталось ["Я", "JavaScript"]

// // ----------------
// let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr2.splice(0, 3, "Давай", "танцевать"); // удалить 3 первых элемента и заменить их другими

// console.log(arr2) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// // ----------------
// let arr3 = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr3.splice(-1, 0, 3, 4);

// console.log(arr3); // 1,2,3,4,5

// // ________________________________concat_________________________________
// let arr4 = [1, 2],
//     arr4_1 = [3, 4, 5];

// // создать массив из: arr4 и arr4_1
// console.log(arr4.concat(arr4_1)); // 1,2,3,4,5

// // _______________________________forEach_________________________________
// let arr5 = [1, 2, 5];
// arr5.forEach(function (item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// });

// // _______________________________indexOf________________________________
// let arr6 = [1, 0, false];

// console.log(arr6.indexOf(0)); // 1
// console.log(arr6.indexOf(false)); // 2
// console.log(arr6.indexOf(null)); // -1

// // ______________________________includes_______________________________
// // Метод includes()определяет, содержит ли массив определенное значение среди своих записей,
// // возвращая true или false при необходимости.
// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));

// // ________________________________find_________________________________
// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// let user = users.find(item => item.id == 2);

// console.log(user.name); // Вася

// // _______________________________filter________________________________
// let users1 = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users1.filter(item => item.id == 2);

// console.log(someUsers); // 2

// // _______________________________filter________________________________
// let filterr = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(filterr); // 5,7,6
// // ----------------

// let filter2 = ["Bilbo", "Gandalf", "Nazgul"].map(item => item === "Nazgul");
// console.log(filter2);[false, false, true]

// // ________________________________sort_________________________________
// let arrSort = [1, -2, 15, 30, 2, 0, 8]
// arrSort.sort(function (a, b) {
//     return a - b;
// });

// console.log(arrSort);// [-2, 0, 1, 2, 8, 15, 30]

// // -------------
// let arrSort2 = [1, -2, 15, 30, 2, 0, 8]
// arrSort.sort((a, b) => a - b);
// console.log(arrSort2);// [-2, 0, 1, 2, 8, 15, 30]

// // _______________________________reverse________________________________

// let arr7 = [1, 2, 3, 4, 5];
// arr7.reverse();

// console.log(arr7); // 5,4,3,2,1

// // ________________________________split_________________________________
// let names = 'hellow';

// console.log(names.split('')); // ["h", "e", "l", "l", "o", "w"]

// // ________________________________join__________________________________
// let str1 = ['Вася', 'Петя', 'Маша'];

// let joinn = str1.join('+'); // объединить массив в строку через ;

// console.log(joinn); // Вася+Петя+Маша
// // _______________________________reduce_________________________________
// let arr8 = [1, 2, 3, 4, 5];

// let result = arr8.reduce((sum, current) => sum + current, 0);

// console.log(result); // 15
// // ______________________________________________________________________