let inp = document.querySelector(".input-cont > input"),
    btn = document.querySelector(".input-cont > button"),
    list_cont = document.querySelector(".list-cont"),
    pending = document.querySelector(".pending"),
    clearAll = document.querySelector(".bottom-btn");

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.innerHTML = `<span class='textEdit' contenteditable="false">${inp.value}</span>
                    <div>
                        <button class='redact-btn'>|</button>
                        <button class='removv'>X</button>    
                    </div>`

    list_cont.appendChild(li)
    removEl()
    pending_count()
    redact_logic()
})

function removEl() {
    let list_cont_lists = document.querySelectorAll('.list-cont > li')
    let btn_remov = document.querySelectorAll('.removv')
    btn_remov.forEach((el, i) => {
        btn_remov[i].addEventListener("click", () => {
            list_cont_lists[i].remove()
            pending_count()
            redact_logic()
        })
    })
}

clearAll.addEventListener("click", () => {
    let list_cont_lists = document.querySelectorAll('.list-cont > li')
    list_cont_lists.forEach((el, i) => {
        list_cont_lists[i].remove()
    });
    pending_count()
    redact_logic()
})

function pending_count() {
    let list_cont_lists = document.querySelectorAll('.list-cont > li')
    pending.innerHTML = list_cont_lists.length;
}


function redact_logic() {
    let textEdit = document.querySelectorAll('.textEdit')
    let redact_btn = document.querySelectorAll('.redact-btn')
    
    redact_btn.forEach((el, i) => {
        el.addEventListener('click', () => {
            if (textEdit[i].isContentEditable) {
                textEdit[i].setAttribute('contenteditable', false)
            } else {
                textEdit[i].setAttribute('contenteditable', true)
            }
        })
    });
}
