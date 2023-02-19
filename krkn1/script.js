
// for (let i = 1; i <= 9; i++) {
//  for (let j = 1; j <= 9; j++) {
//   console.log(`${i} * ${j} = `, i * j);
//   // console.log(i + ' * ' + j + ' = ', i * j);
//  }
// }
// --------------terberak 1 
// let parent_div = document.querySelectorAll('.parent>div')

// parent_div.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(window.getComputedStyle(el).getPropertyValue('background-color'))
//         if (window.getComputedStyle(el).getPropertyValue('background-color') == 'rgb(255, 0, 0)') {
//             el.style.cssText = 'background-color:green;'
//         }
//         else {
//             el.style.cssText = 'background-color:red;'
//         }
//     })
// });

// --------------tareberak 2 
// let parent_div = document.querySelectorAll('.parent>div')

// parent_div.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('ColGreen')
//     })
// });

// ------------------ tarberak 1
// let parent = document.querySelector('.parent')
// let divs = document.querySelectorAll('.divs')

// parent.addEventListener('click', () => {
//     divs.forEach(el => {
//         el.style.cssText = 'background-color: blue;'
//     })
// })

// ------------------ tarberak 2
// let divs = document.querySelectorAll('.divs')

// divs.forEach(el => {
//     el.addEventListener('click', () => {
//         divs.forEach(el2 => {
//             el2.style.cssText = 'background-color: blue;'
//         })
//     })
// })

// ------------------

// let divs = document.querySelectorAll('.divs')
// divs.forEach((el,i) => {
//     el.addEventListener('click', () => {
//         if (i==0) {
//             divs[3].style.cssText = 'background-color: blue;'
//             divs[0].style.cssText = 'background-color: red;'
//         }
//         if (i==3) {
//             divs[0].style.cssText = 'background-color: blue;'
//             divs[3].style.cssText = 'background-color: red;'
//         }
//     })
// });
// ----------------------------
// let divs = document.querySelectorAll('.divs')
// for (let i = 0; i < divs.length; i++) {
//     if (i % 2 == 0) {
//         divs[i].style.backgroundColor='red'
//         console.log('red',i % 2);
//     }else{
//         divs[i].style.backgroundColor='blue'
//         console.log('blue',i % 2);
//     }
// }
// ----------------------------
// 1 stexcumenq div 
// 2 50px chapov , guyn vor ereva
// 3 petqa verevic ijni nerqev dandax

// let div = document.createElement('div')
// div.className = "cont"
// document.body.appendChild(div)

// let cont = document.querySelector('.cont')
// let count = 0

// setInterval(() => {
//     cont.style.cssText = `width:50px;height: 50px; background-color: red; position:relative;top:${count}px`
//     count++
//     if (count > 500) {
//         count=0
//     }
// }, 0);

// ----------------------------
// class 
// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();
// ----------------------------

function makeClass(name, lastname, age) {
    return class {
        allUsers = {
            name,
            lastname,
            age
        }

        sayHi() {
            alert(name + ' ' + lastname + ' ' + age);
        };

    };
}

let User = makeClass('Gor', 'grigoryan', 25);
let User2 = makeClass('Vartan', 'Virabyan', 30);

new User().sayHi();
new User2().sayHi();
console.log(new User2().allUsers);

