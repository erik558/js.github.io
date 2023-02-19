let square = document.querySelectorAll(".square"),
    player = 'x',
    gamer_x = '',
    gamer_0 = '';

square.forEach((el, i) => {

    el.addEventListener('click', () => {
        if (el.innerText === "") {
            if (player === 'x') {
                el.innerText = 'x'
                player = '0'
                gamer_x += i + 1
                x_logic()
            }
            else {
                el.innerText = '0'
                player = 'x'
                gamer_0 += i + 1
                
                O_logic()
            }
        }

        if ((gamer_x + gamer_0).length == 9) {
            alert('nichya')
        }
    })
})

function x_logic() {
    if (gamer_x.match('1') && gamer_x.match('2') && gamer_x.match('3')) {
        alert('x win')
    }
    else if (gamer_x.match('4') && gamer_x.match('5') && gamer_x.match('6')) {
        alert('x win')
    }
    else if (gamer_x.match('7') && gamer_x.match('8') && gamer_x.match('9')) {
        alert('x win')
    }
    else if (gamer_x.match('1') && gamer_x.match('4') && gamer_x.match('7')) {
        alert('x win')
    }
    else if (gamer_x.match('2') && gamer_x.match('5') && gamer_x.match('8')) {
        alert('x win')
    }
    else if (gamer_x.match('3') && gamer_x.match('6') && gamer_x.match('9')) {
        alert('x win')
    }
    else if (gamer_x.match('1') && gamer_x.match('5') && gamer_x.match('9')) {
        alert('x win')
    }
    else if (gamer_x.match('3') && gamer_x.match('5') && gamer_x.match('9')) {
        alert('x win')
    }
}

function O_logic() {
    if (gamer_0.match('1') && gamer_0.match('2') && gamer_0.match('3')) {
        alert('x win')
    }
    else if (gamer_0.match('4') && gamer_0.match('5') && gamer_0.match('6')) {
        alert('0 win')
    }
    else if (gamer_0.match('7') && gamer_0.match('8') && gamer_0.match('9')) {
        alert('0 win')
    }
    else if (gamer_0.match('1') && gamer_0.match('4') && gamer_0.match('7')) {
        alert('0 win')
    }
    else if (gamer_0.match('2') && gamer_0.match('5') && gamer_0.match('8')) {
        alert('0 win')
    }
    else if (gamer_0.match('3') && gamer_0.match('6') && gamer_0.match('9')) {
        alert('0 win')
    }
    else if (gamer_0.match('1') && gamer_0.match('5') && gamer_0.match('9')) {
        alert('0 win')
    }
    else if (gamer_0.match('3') && gamer_0.match('5') && gamer_0.match('9')) {
        alert('0 win')
    }
}













// -----------------------------------------------------------------------------------------
// let square = document.querySelectorAll(".square"),
//     player = 'x',
//     gamer_x = '',
//     gamer_0 = '';

// square.forEach((el, i) => {
//     el.addEventListener('click', () => {
//         if (el.innerText === "") {
//             if (player === 'x') {
//                 el.innerText = 'x'
//                 player = '0'
//                 gamer_x += i + 1
//                 logic(gamer_x, 'X')
//             }
//             else {
//                 el.innerText = '0'
//                 player = 'x'
//                 gamer_0 += i + 1
//                 logic(gamer_0, '0')
//             }
//         }
//         if ((gamer_x + gamer_0).length == 9) {
//             logic(false, 'nichya')
//         }
//     })
// })

// function logic(gamerLogic, playerWin) {
//     if (gamerLogic.match('1') && gamerLogic.match('2') && gamerLogic.match('3')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('4') && gamerLogic.match('5') && gamerLogic.match('6')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('7') && gamerLogic.match('8') && gamerLogic.match('9')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('1') && gamerLogic.match('4') && gamerLogic.match('7')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('2') && gamerLogic.match('5') && gamerLogic.match('8')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('3') && gamerLogic.match('6') && gamerLogic.match('9')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('1') && gamerLogic.match('5') && gamerLogic.match('9')) {
//         win(`player ${playerWin} win`)
//     }
//     else if (gamerLogic.match('3') && gamerLogic.match('5') && gamerLogic.match('9')) {
//         win(`player ${playerWin} win`)
//     }

//     if(gamerLogic==false){
//         win(playerWin)
//     }
// }

// function win(text) {
//     let popap = document.querySelector('.popap'),
//         winText = document.querySelector('.winText'),
//         btn = document.querySelector('.btn');

//     popap.setAttribute('style', 'display: flex;')
//     winText.textContent = text

//     btn.addEventListener('click', () => {
//         popap.setAttribute('style', 'display: none;');
//         player = 'x';
//         gamer_x = '';
//         gamer_0 = '';
//         square.forEach(el => {
//             el.textContent = ''
//         })
//     })
// }