// 0 vercnenq domic ayn popoxakannery voronq petqen
// 1 vandaki mej click aneluc petqa stanal kam poxel meji arjeqy
// 2 vandaki mej drvi (x) hajart angam (0)
// 3 vandaknery hamarakalel id ov
// 3 hashvel kombincianery

let square = document.querySelectorAll('.square')
let x_o = 'x'
let gamer_x = ''
let gamer_0 = ''

square.forEach(el => {
    el.addEventListener('click', () => {
        if (x_o === 'x' && el.innerHTML === '') {
            el.innerHTML = 'x'
            x_o = '0'
            gamer_x += el.id

            if (gamer_x.match(`n0`) && gamer_x.match(`n1`) && gamer_x.match(`n2`)) {
                console.log('win x');
            }

        } else if (x_o === '0' && el.innerHTML === '') {
            el.innerHTML = '0'
            x_o = 'x'
        }

    })
})

