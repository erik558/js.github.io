let srtingsAnim = document.querySelector('.srtingsAnim')

let x = "Barev bolorines es ka"
let i = 0

let setInt = setInterval(() => {
    let u = document.createElement('u')
    srtingsAnim.appendChild(u)
    u.textContent = x[i]
    u.setAttribute('style',`color:rgb(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)});`)
    setTimeout(()=>{
        u.style.transform = "translate(0,20px)"
    },200)
    if(x[i]===' '){
        u.style.marginLeft='15px'
    }
    i++
    if (x.length == i) {
        clearInterval(setInt)
    }
}, 100)