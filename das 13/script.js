let div = document.querySelector('div');

let arrObj = [
    {
        firstName: 'Valod',
        lastName: 'Vardanyan',
        age: 30,
        img: './img/user1.png',
        bgColor: 'red',
        married: true
    },
    {
        firstName: 'Gago',
        lastName: 'Grigoryan',
        age: 35,
        img: './img/user2.png',
        bgColor: 'blue',
        married: false
    },
    {
        firstName: 'Gurgen',
        lastName: 'Galstyan',
        age: 30,
        img: './img/user3.jpg',
        bgColor: 'greenyellow',
        married: true
    },
    {
        firstName: 'Ani',
        lastName: 'Araqelyan',
        age: 35,
        img: './img/user4.jpg',
        bgColor: 'yellow',
        married: false
    },
    {
        firstName: 'Karine',
        lastName: 'Kirakosyan',
        age: 35,
        img: './img/user5.png',
        bgColor: 'aqua',
        married: false
    }
]

function fnClick() {
    for (let i = 0; i < arrObj.length; i++) {
        let ul = document.createElement('ul')
        ul.classList = "AllUsersCont"
        let LN_AND_FN = arrObj[i].firstName + ' ' + arrObj[i].lastName;

        let marriedstyle = 'none'

        if (arrObj[i].married == true) {
            marriedstyle = 'lawngreen'
        } else {
            marriedstyle = 'red'
        }

        ul.innerHTML = `
            <span style='background-color:${marriedstyle}'></span>
            <img src = ${arrObj[i].img}>
            <li class="FLname"; style='background-color:${arrObj[i].bgColor}'>${LN_AND_FN}</li>
            <li>${arrObj[i].age}</li>`

        div.appendChild(ul)
    }
}

fnClick()

let AllUsersCont = document.querySelectorAll('.AllUsersCont')
let FLname = document.querySelectorAll(".FLname")
let input = document.querySelector(".inp")
let btn = document.querySelector('button')

// input.addEventListener("input", () => {
//     serch_logic()
// })

btn.addEventListener("click", () => {
    serch_logic()
})

function serch_logic() {
    for (let i = 0; i < FLname.length; i++) {
        if (FLname[i].textContent.match(input.value)) {
            AllUsersCont[i].classList.remove('hide')
        } else {
            AllUsersCont[i].classList.add('hide')
        }
    }
}