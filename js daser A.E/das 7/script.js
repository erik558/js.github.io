// function tertovGtarer() {
//     let x = "Barev bolorines es ka"
//     let i = 0

//     let setInt = setInterval(() => {
//         document.write(x[i])
//         i++
//         if(i===x.length){
//             clearInterval(setInt)
//         }
//     }, 100)
// }
// setTimeout(() => {
//     tertovGtarer()
// }, 1000);


// function Color_rgb() {
//     return Math.round(Math.random() * 255)
// }
// let srtingsAnim = document.querySelector('.srtingsAnim')
// let x = "Barev bolorines es ka"
// let i = 0

// let setInt = setInterval(() => {
//     let u = document.createElement('u')
//     srtingsAnim.appendChild(u)
//     u.textContent = x[i]
//     u.setAttribute('style',`color:rgb(${Color_rgb()},
//                                       ${Color_rgb()},
//                                       ${Color_rgb()})`)
//     setTimeout(()=>{
//         u.style.transform = "translate(0,20px)"
//     },200)
//     if(x[i]===' '){
//         u.style.marginLeft='30px'
//     }
//     i++
//     if (x.length == i) {
//         clearInterval(setInt)
//     }
// }, 100)