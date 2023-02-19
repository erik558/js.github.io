// 360 astichan ptuyt
// varkyan 0 - 60
// rope 0 - 60
// 6

let hour = document.querySelector('.hour-cont'),
    min = document.querySelector('.min-cont'),
    sec = document.querySelector('.sec-cont');

setInterval(() => {
    let date = new Date()
    getHours = date.getHours() * 30
    getMinutes = date.getMinutes() * 6
    getSeconds = date.getSeconds() * 6

    hour.setAttribute('style', `transform: rotate(${getHours + getMinutes / 12}deg);`)
    sec.setAttribute('style', `transform: rotate(${getSeconds}deg);`)
    min.setAttribute('style', `transform: rotate(${getMinutes}deg);`)
}, 100);