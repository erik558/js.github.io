// tnain switch case ov erkxosutyun stexcel
// stexcek slider
// let img = document.querySelector('img')
// img.src = ''

// let x = 10
// alert(`im tariqy = ${x}`)

// console.table([1,2,3,4,5,6])
// console.log([1,2,3,4,5,6])
// console.dir([1,2,3,4,5,6])
// console.error([1,2,3,4,5,6])

// let a = prompt()
// switch (a) {
//     case 'barev':
//         alert('barev');
//         break;
//     case 'barev axper':
//         alert('barev axper');
//         break;
//     case 'barev axper jan':
//         alert('barev axper jan');
//         break;
//     default:
//         alert("hajox");
// }

// -----------tarberak 2-------------
// let browser = 'Edge'
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }

// -----------tarberak 3-------------
// let browser = 'Edge'
// switch (browser) {
//     case 'Edge':
//         foromCase()
//         break;
//     default:
//         foromCase_2()
// }

// function foromCase() {
//     alert("ok");
// }
// function foromCase_2() {
//     alert('no')
// }


// function showMessage(from, text = "текст не добавлен") {
//     alert(from + ": " + text);
// }

// showMessage("Аня",'ok');


// function showMessage(text) {
//     if (text === undefined) {
//         text = 'пустое сообщение';
//     }
//     alert(text);
// }

// showMessage();

// function showCount(count) {
//     alert(count ?? "неизвестно");
// }
// showCount(0);  // 0
// showCount(null); // неизвестно
// showCount(undefined); // неизвестно

// function sum(a, b) {
//    return a + b;
// }

// let result = sum(1, 2);
// alert(result);

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

// let age = prompt('Сколько вам лет?', 18);

// if (checkAge(age)) {
//     alert('Доступ получен');
// } else {
//     alert('Доступ закрыт');
// }

// function showMovie(age) {
//     if (age) {
//         return;
//     }
//     alert("Вам показывается кино");
// }
// showMovie()

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// checkAge(5)

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no();
//     }
// }

// ask(
//     "Вы согласны?",
//     function () { alert("Вы согласились."); },
//     function () { alert("Вы отменили выполнение."); }
// );

// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");

// alert("Посетитель: " + userName)
// alert("Чай: " + isTeaWanted)


// function pow(x, n) {
//     let resalt;
//     for (let i = 0; i < n; i++) {
//         resalt = n * x;
//     }
//     return resalt;
// }
// alert(pow(3, 5))


//bazmapatkman axyusak
// for (let i = 1; i < 10; i++) {
//     console.log(i, 'axyusak')
//     for (let j = 1; j < 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + i * j)
//     }
// }

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}

