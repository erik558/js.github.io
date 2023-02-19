// function fn(...args) {
//  let res = 0

//  for (let i = 0; i < args.length; i++) {
//   res += args[i]
//  }

//  return res
// }

// console.log(fn(10, 20, 6)); // 36

// -------------------------------------
// alert( Math.max(3, 5, 1) ); // 5 varadarcnuma amenamec tivy
// alert( Math.min(3, 5, 1) ); // 1 varadarcnuma amenapoqr tivy
// pow(2, 4) // 16   2 * 2 = 4 * 2 = 8 * 2 = 16

// let str = "Привет";
// alert( [...str] ); // П,р,и,в,е,т
// -------------------------------------
// function pow(x, n) {
//  let result = 1;

//  // умножаем result на x n раз в цикле
//  for (let i = 0; i < n; i++) {
//    result *= x;
//  }

//  return result;
// }

// alert( pow(2, 3) ); // 8
// -------------------------------------
// function recursia

// let interval = 0
// function recursion() {
//  interval++
//  if (interval < 30) {
//   console.log(interval);
//   recursion()
//  }
//  return interval
// }
// console.log(recursion());
// -------------------------------------
// arr concat
// let arr = [1, 2]
// let arr2 = [3, 4]

// let x = arr.concat(arr2)

// console.log(x);
// -------------------------------------
// Array.isArray([]) // stuguma array i iroq arrya te boekt ture kam false
// -------------------------------------
// const = { log } = console
// log(10)
// -------------------------------------
// let axves = {
//  walk() {
//    alert("axves");
//  }
// }

// let napastak = {
//  __proto__: axves
// }

// napastak.walk()

// ----------------try catch---------------------
// try {
//  console.log(('block 1'))
//  console.log(('block 2'))
//  // lalal
//  console.log(('block 3'))
// } catch (err) {
//  console.error('Error');
// }

// try {
//  //... пробуем выполнить код...
// } catch(e) {
//  //... обрабатываем ошибки ...
// } finally {
//  //... выполняем всегда ...
// }
// -------------------------------------
// Promise.all([
// 	new Promise((resolve, reject) => {
// 		if(resolve){
// 			setTimeout(() => resolve(1), 1000)
// 		}else{
// 			reject
// 		}
// 	}),
// ])
// 	.then(alert)
// 	.catch('Error')
// ------------async function-------------------------
// async function f() {
// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("готово!"), 1000)
// 	});

// 	let result = await promise;

// 	console.log(result);
// }

// f();