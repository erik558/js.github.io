// // avartel jam rope varkyan
// // unenal setTimeout jamanky kangnacni 1rope heto
// let clock=0
// let sec = 0
// let min = 0

// let setInt = setInterval(() => {
//     if (sec >= 60) {
//         sec = 0
//         min += 1
//     }
//     if (min >= 60) {
//         min = 0
//         clock++
//     }

//     document.body.innerHTML = clock + ':' +  min + ':' + sec
//     sec += 1
// }, 100);

// setTimeout(() => {
//     clearInterval(setInt)
// }, 61000);

// ------------------------------------------------------

//unenq tiv 150000.658464745431 kloracnel depi shaty
//unenq tiv 150000.658464745431 kloracnel depi qichy
//verjum stacvac gumary bazmapatkel irar


// let a =Math.ceil(150000.658464745431)
// let b =Math.floor(150000.658464745431)
// console.log(Math.ceil(150000.658464745431)) 
// console.log(Math.floor(150000.658464745431)) 
// console.log(a*b)

// let string = "barev bolorin es eka"
// let res;
// for (let a = 0; a < string.length; a++) {
//     res = string.charAt(a)
//     console.log(res)
// }


// setTimeout(() => {
// document.write("b")
// }, 0);

// setTimeout(() => {
// document.write("a")
// }, 500);

// setTimeout(() => {
// document.write("r")
// }, 1000);

// setTimeout(() => {
// document.write("e")
// }, 1500);

// setTimeout(() => {
// document.write("v")
// }, 2000);

// hertow grvox tarer

// let x = "Barev bolorin es eka"
// let i = 0
// let j = 0
// let setInt = setInterval(() => {
//   let span = document.createElement('span')
//   document.body.appendChild(span)
//   span.textContent = x[i]
//   span.style.color = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`
//   i++
//   if (x.length == i) {
//     clearInterval(setInt)
//     let allSpan = document.querySelectorAll('span')
//     let int = setInterval(() => {
//       allSpan[j].style.cssText = 'opacity: 0; transition: 2s; color:blue;'
//       j++
//       if (j == i) {
//         clearInterval(int)
//       }
//     }, 100);
//   }
// }, 100)





// let newstring = ""
// let str = "barev"
// for (let i = str.length - 1; i >= 0; i--) {
//  newstring += str[i]
// }
// alert(str)
// alert (newstring)

// let arr = [1, 5, 7, 9, 5, 100, 50, 10, 200, 500, 6000]
// console.log(arr.sort((a, b) => a - b));//ajman kargov
// console.log(arr[i].length-1)
// console.log(arr.sort((a, b) => b - a));//nvazmna kargov
// // console.log(arr[10])

// function func(){
//   console.log("ok")
// }
// func()

// let func1=function(){
//   console.log("ok")
// }
// func1()

// function func2(a,b){
//   console.log(a+b)
// }
// func2(10,20);


// function func2() {
//  return 10 + 20
// }
// console.log(func2());

// let arr = [1 ,5, 7, 8,"hello"]
// arr.forEach(element => {
//   console.log(element)
// });


// let div =document.querySelector("div")
// div.style.backgroundColor="red"
// console.log(div)

// let div = document.querySelector(".color")
// div.addEventListener("click", () => {
// div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
// div.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
// })

// let x = document.querySelector(".color")
// x.addEventListener("click", () => {
//   x.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
// })


// let text ="hello word"
// let i=0

// let seti=setInterval(() => {
//  document.querySelector(".input-text").textContent+=text[i]
//  i++
//  if(text.length===i){
//   clearInterval(seti)
//  }
// }, 100);


const btnclick = document.querySelector('#btn-click');
const input = document.querySelector('#input');

btnclick.addEventListener('click', () =>{
    text.innerText = input.value;
});