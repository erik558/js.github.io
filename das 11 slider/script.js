let btn_prev = document.querySelector('.btn_prev'),
    btn_next = document.querySelector('.btn_next'),
    img = document.querySelector('.img_cont>img');

let imgSorche = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg']
let newArr = []
btn_next.addEventListener('click', () => {
    newArr = imgSorche.shift() // jujuma skzbic jnjac arjeqy talisa
    imgSorche.push(newArr)     // avelacnuma verjic

    img.src = imgSorche[0]
    console.table(imgSorche);
})

btn_prev.addEventListener('click', () => {

    newArr = imgSorche.pop()    // jnjuma verjic jnjac arjeqy talisa
    imgSorche.unshift(newArr)   // avelacnuma skzbic

    img.src = imgSorche[0]
    console.table(imgSorche);
})

// let del = h.shift()                // jujuma skzbic jnjac arjeqy talisa
// let del = h.pop()                  // jnjuma verjic jnjac arjeqy talisa

// h.unshift('0')           // avelacnuma skzbic
// h.push('4')              // avelacnuma verjic


