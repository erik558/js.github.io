let cont = document.getElementById('cont'),
    steps = 40, // qayli erkarutyuny es depqym ( 40 px )
    x = 0, // keydown ( left ) -i arjeqy 
    y = 0, // keydown ( top )  -i arjeqy 
    Rand_x = 0, // random uteliqi texy ( left )
    Rand_y = 0, // random uteliqi texy ( top )
    size = 40

document.addEventListener('keydown', (e) => {

    if (e.key === 'ArrowLeft' && x > 0) {
        x += -steps
        cont.style.left = x + 'px'
    }
    else if (e.key === 'ArrowRight' && x < 360) {
        x += steps
        cont.style.left = x + 'px'
    }
    else if (e.key === 'ArrowUp' && y > 0) {
        y += -steps
        cont.style.top = y + 'px'
    }
    else if (e.key === 'ArrowDown' && y < 360) {
        y += steps
        cont.style.top = y + 'px'
    }
    logic()
})

function rNum() {
    let y = Math.floor(Math.random() * 10);//10
    let x = steps;
    return (x * y)
}

function rColor() {
    let arr = ['#9c27b0', '#f44336', '#4caf50', '#3f51b5', '#ffeb3b']
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
}

function createDiv() {
    Rand_x = rNum()
    Rand_y = rNum()

    let div = document.createElement('div')
    div.style.cssText = `background-color:${rColor()}`
    div.className = 'newDiv'
    div.style.left = Rand_x + 'px'
    div.style.top = Rand_y + 'px'
    document.querySelector('.parent').appendChild(div)
}
createDiv()

function logic() {
    if (Rand_x == x && Rand_y == y) {
        cont.style.cssText = `width:${size += 10}px; height:${size += 10}px;`
        createDiv()
    }
}

// ------ tnain ------
// shat manramasn usumnasirel kody !!!

// 1) nenc kody grel vor amen anqam tarber guyni stexven divery - karmiri poxaren
// 2) nenc kody grel vor karmir divin kpneluc kapuyt - divy mecana
// 3) nenc kody grel vor kapyud divy chkaroxana sahmanneric durs gal
// 4) nenc kody grel karmir guyny uti poqrana mnacacac guyny ute mecana