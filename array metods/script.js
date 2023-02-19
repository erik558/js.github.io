//--------------------------------------deleat----------------------
// let arr = [1,2,3,4,5];

// delete arr[1];// jnjvuma 2y  

// console.log( arr );

// console.log(arr.length);//5

// --------------------------------------splice-------------------------
// let arr1 = ["hello how are you?","were are you from?","how old are you? "];

// arr1.splice(1, 1);
// console.log( arr1 );

// -------------------------------------splice jnjum a u poxum et jnjac tex nshvac barow kam tvov----------------------- 
// let arr = ["Artur", "Mayk", "Hayk", "Narek", "Karen"];

// arr.splice(0, 2,"Poghos","Petros");

// console.log( arr ); 

// let arr = ["Russia", "Spain", "Germany","Armenia", "France",];

// let removed = arr.splice(0, 2);

// console.log(removed);
// ------------------------------ splice text avelacnuma mejtexy--------------------------------------
// let arr = [10000000,614481247,"hello"];

// arr.splice(2, 0, 111, 222);

// console.log(arr); 


// ----- -1 stex 1 tvic heta gnum darnuma 5  u hingic araj dnuma 3,4-------------
// let arr = [12,100, 1200];


// arr.splice(-1, 0, "name","firstname");

// console.log( arr ); 

// --------------------------------- slice--------------------------

// let arr = ["h","e","l","l","o",];

// console.log( arr.slice(0, 2) );// vercnuma el

// console.log( arr.slice(-3)); //vercnuma lo 


//----------------------------------------concat--------------------
// let arr = ["barew", "dez"];


// console.log( arr.concat(["incpes", "eq"], "incov eq", "zbaxvum?") ); // awelacnum e  "incpes", "eq", "incov eq", "zbaxvum?"


// let arr = [56565, 848];

// let arrayLike = {
//     0: "ewdferf",
//     length: 1
//   };

// console.log( arr.concat(arrayLike) ); 

//chem haskace [Symbol.isConcatSpreadable]: true es inja
// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) );

// foreach ow cikla frum arrayi mej
// [222,154156468, 54468464154].forEach(console.log);

//------------------------------------------forecow 3 angam ppptvuma item i wra item stex arrayi mejinna index stex qanakna aysinqn qani angama pttvum 0 ica sksvum arraynel zangcavy miacnuma irar stanuma teqst--------
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//  console.log(`${item} имеет позицию ${index} в ${array}`);
// });

//----------------------------------indexOf----------

// let arr = ["hello ","word", true];

// console.log( arr.indexOf(0)); 
// console.log( arr.indexOf(false)); 
// console.log( arr.indexOf(null)); 

// console.log( arr.includes(0));

// cem haskace
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); 

// ---------------find----
// let users = [
//  {id: 1, num: 1},
//  {id: 2, num: 2},
//  {id: 3, num: 3}
// ];

// let user = users.find(item => item.id == 1);

// console.log(user.num); 
// chem haskace
let users = [
 {id: 1, name: "karen"},
 {id: 2, name: "Armen"},
 {id: 3, name: "Poghos"}
];

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length);