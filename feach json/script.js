let parent = document.querySelector('.parent')
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(respons => {
        console.log(respons.users);

        respons.users.forEach(el => {
            let div = document.createElement('div')
            div.innerHTML = `
                        
                        <div class='img-name-cont'>
                            <img src='${el.image}'>
                <ul>
                            <li class='li'>${el.firstName + "  " + el.lastName}</li>
                            <button class='btn'>click</button>
                        </div>
                            <div class='third-lists hide'>
                            <li class='li'>${el.age}</li>
                            <li class='li'>${el.address.city}</li>
                            <li class='li'>${el.company.address.city}</li>
                        </div>
                </ul>`
            parent.appendChild(div)
        })
        
        clickBtn()
    })
    .catch(err => console.error(err))

// let li=
// nkarel mardkanc
// click anes btnin baci tvyalnery
// search aneluc aneluc gtni mardkanc isk woronc mej chlni et tary displey none ani



function clickBtn() {
    let btn = document.querySelectorAll('.btn')
    let third_lists = document.querySelectorAll('.third-lists')
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            third_lists[i].classList.toggle('hide')
        })
    }
}



