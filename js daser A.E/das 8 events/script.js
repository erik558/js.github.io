let events = document.querySelector('.events')
// console.log(events.innerHTML='<h1>hii</h1>')
// console.log(events.textContent='<h1>hii</h1>')
// _______________________click_1_____________________________
// events.onclick = function () {
//     events.style.backgroundColor = 'red'
// }
// _______________________click_2_____________________________
// events.addEventListener('click', () => {
//     events.style.backgroundColor = 'red'
// })
// _______________________click_3_____________________________
// events.addEventListener('click',fn1)
// function fn1() {
//     events.style.backgroundColor = 'red'
// }
// _______________________mouseover___________________________
// events.addEventListener('mouseover', () => {
//     events.style.backgroundColor = 'red'
// })
// _______________________mouseout___________________________
// events.addEventListener('mouseout', () => {
//     events.style.backgroundColor = 'red'
// })
// _______________________mousedown___________________________
// events.addEventListener('mousedown', () => {
//     events.style.backgroundColor = 'red'
// })
// _______________________mouseup___________________________
// events.addEventListener('mouseup', () => {
//     events.style.backgroundColor = 'red'
// })
// _______________________mouseup___________________________
// events.addEventListener('mousemove', (event) => {
//     console.log(event)
// })
// _______________________onchange___________________________
// let input = document.querySelector('input').onchange = function () {
//     console.log(document.querySelector('input').value)
// }
// ________________________change____________________________
// let input = document.querySelector('input')
// input.addEventListener('change', (e) => {
//     console.log(input.value)
// })
// _______________________mouseup___________________________
// spasuma erpvor kayqy zagrusken verjacnuma nor ashxatuma
// window.addEventListener('load', () => {
//     console.log('loaded')
// })
// _______________________resize____________________________
// vercnumenq ekrani chapsery
window.addEventListener('resize', () => {
    console.log(window.innerHeight,window.innerWidth)
})