let allInputs = document.querySelectorAll(".allInputs")
let Alists = document.querySelector(".Alists")
let checkbox = document.querySelector('#checkbox')

button.addEventListener("click", () => {
    let userObj = {
        name: allInputs[0].value,
        surname: allInputs[1].value,
        city: allInputs[2].value,
        email: allInputs[3].value,
        possword: allInputs[4].value,
        repeat: allInputs[5].value,
        checkBox: false
    }

    if (checkbox.checked) {
        userObj.checkBox = true
    } else {
        userObj.checkBox = false
    }

    Alists.innerHTML = `
        <li>${userObj.name}</li>
        <li>${userObj.surname}</li>
        <li>${userObj.city}</li>
        <li>${userObj.email}</li>
        <li>${userObj.possword}</li>
        <li>${userObj.repeat}</li>
        <li>${userObj.checkBox}</li>`
})