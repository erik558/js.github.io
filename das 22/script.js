let cont = document.getElementById('cont')
let x = 0
let y = 0

let steps = 1
document.addEventListener('keydown', (e) => {

    if (e.key === 'ArrowLeft') {
        x += -steps
        cont.style.left = x + '%'
    }
    else if (e.key === 'ArrowRight') {
        x += steps
        cont.style.left = x + '%'
    }
    else if (e.key === 'ArrowUp') {
        y += -steps
        cont.style.top = y + '%'
    }
    else if (e.key === 'ArrowDown') {
        y += steps
        cont.style.top = y + '%'
    }
    // console.log(e.key);
    randomDiv()
})

function rNum() {
    return Math.round(Math.random() * 90)
}

function randomDiv() {
    let Rand_x = rNum()
    let Rand_y = rNum()

    if (Rand_x == x && Rand_y == y) {
        cleateDiv()
    }
}
randomDiv()

function cleateDiv(Rand_x) {
    if (Rand_x) {
        let div = document.createElement('div')
        div.className = 'newDiv'
        div.style.left = Rand_x + '%'
        div.style.top = Rand_y + '%'
        document.querySelector('.parent').appendChild(div)
    }
}
cleateDiv()