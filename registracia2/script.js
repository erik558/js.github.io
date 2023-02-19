// vreecnel bolor inputnery ev formy
let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

username.addEventListener('input', () => {
    vormValadation()
})
email.addEventListener('input', () => {
    vormValadation()
})
password.addEventListener('input', () => {
    vormValadation()
})
password2.addEventListener('input', () => {
    vormValadation()
})

// erb vor sxmum enq btn-i vra vojmiban chkatarvi
form.addEventListener('submit', e => {
    e.preventDefault();

    vormValadation();
});

// stexecic func inputner stugelu hamar
function vormValadation() {
    // vercrecinq bolor ptickeqy ev x-y
    let circles = document.querySelectorAll('.fa-check-circle');
    let err_x = document.querySelectorAll('.fa-exclamation-circle');
    let small_Err_text = document.querySelectorAll('.small-Err-text');
    // erb vor inputi mejy teqst chlini katarvi gorcoxutyun
    // 1
    if (username.value !== "" && username.value.length >= 10) {
        // erpvor inputi value datark chi
        username.setAttribute('style', 'border-color: lime');
        circles[0].setAttribute('style', 'visibility:inherit');
        err_x[0].setAttribute('style', 'visibility:hidden');
        small_Err_text[0].setAttribute('style', 'visibility:hidden')
    } else {
        // erpvor inputi value datark e
        username.setAttribute('style', 'border-color: red');
        circles[0].setAttribute('style', 'visibility:hidden');
        err_x[0].setAttribute('style', 'visibility:inherit');
        small_Err_text[0].setAttribute('style', 'visibility:inherit')
        small_Err_text[0].textContent = "This username must not be empty"
    };
    // email
    if (email.value !== "" && email.value.length >= 10) {
        // erpvor inputi value datark chi
        email.setAttribute('style', 'border-color: lime');
        circles[1].setAttribute('style', 'visibility:inherit');
        err_x[1].setAttribute('style', 'visibility:hidden');
        small_Err_text[1].setAttribute('style', 'visibility:hidden')
    } else {
        // erpvor inputi value datark e
        email.setAttribute('style', 'border-color: red');
        circles[1].setAttribute('style', 'visibility:hidden');
        err_x[1].setAttribute('style', 'visibility:inherit');
        small_Err_text[1].setAttribute('style', 'visibility:inherit')
        small_Err_text[1].textContent = "This email must not be empty"
    };
    // password
    if (password.value !== "" && password.value.length >= 10) {
        // erpvor inputi value datark chi
        password.setAttribute('style', 'border-color: lime');
        circles[2].setAttribute('style', 'visibility:inherit');
        err_x[2].setAttribute('style', 'visibility:hidden');
        small_Err_text[2].setAttribute('style', 'visibility:hidden')
    } else {
        // erpvor inputi value datark e
        password.setAttribute('style', 'border-color: red');
        circles[2].setAttribute('style', 'visibility:hidden');
        err_x[2].setAttribute('style', 'visibility:inherit');
        small_Err_text[2].setAttribute('style', 'visibility:inherit')
        small_Err_text[2].textContent = "This password must not be empty"
    };
    // password2
    if (password2.value !== "" && password2.value.length >= 10 && password.value === password2.value) {
        // erpvor inputi value datark chi
        password2.setAttribute('style', 'border-color: lime');
        circles[3].setAttribute('style', 'visibility:inherit');
        err_x[3].setAttribute('style', 'visibility:hidden');
        small_Err_text[3].setAttribute('style', 'visibility:hidden')
    } else {
        // erpvor inputi value datark e
        password2.setAttribute('style', 'border-color: red');
        circles[3].setAttribute('style', 'visibility:hidden');
        err_x[3].setAttribute('style', 'visibility:inherit');
        small_Err_text[3].setAttribute('style', 'visibility:inherit')
        small_Err_text[3].textContent = "This password must not be empty"
    };
};




// tanin 
// u unenanl mi hat input vori mej patradir petqa lini
// mecatar A
// poqratarer
// lini 12 nishic avel 
// unena sinvol (.#$^*)

// unenal btn sexmelis inputi meji texty veacvi astxanshneri

