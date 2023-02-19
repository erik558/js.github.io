// let input = document.querySelector(".searching-input"),
//     search_lists_cont = document.querySelector(".search_lists_cont"),
//     found_files = document.querySelector(".found_files"),
//     workingArr = []

// const request = fetch("https://dummyjson.com/users")
//     .then(res => res.json())
//     .then(allElements => {
//         workingArr = allElements.users;
//     })

// input.addEventListener('input', () => {
//     let newText = [];

//     if (input.value) {
//         newText = workingArr.filter(a => (`${a.firstName} ${a.lastName}`).toLowerCase().match(input.value));

//         newText.sort((a, b) => {
//             let nameFnameA = `${a.firstName} ${a.lastName}`
//             let indOfA = nameFnameA.toLowerCase().indexOf(input.value.toLowerCase())

//             let nameFnameB = `${b.firstName} ${b.lastName}`
//             let indOfB = nameFnameB.toLowerCase().indexOf(input.value.toLowerCase())

//             return indOfA - indOfB;
//         })
//     }

//     search_lists_cont.innerHTML = newText.map(a => `<li>${a.firstName} ${a.lastName}</li>`).join(' ');
// })



let input = document.querySelector(".searching-input"),
    search_lists_cont = document.querySelector(".search_lists_cont"),
    found_files = document.querySelector(".found_files"),
    workingArr = []

const request = fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(allElements => {
        workingArr = allElements.users;
    })

input.addEventListener('input', () => {
    let newText = [];

    if (input.value) {
        newText = workingArr.filter(a => (`${a.firstName} ${a.lastName}`).toLowerCase().match(input.value));

        newText.sort((a, b) => {
            let nameFnameA = `${a.firstName} ${a.lastName}`
            let indOfA = nameFnameA.toLowerCase().indexOf(input.value.toLowerCase())

            let nameFnameB = `${b.firstName} ${b.lastName}`
            let indOfB = nameFnameB.toLowerCase().indexOf(input.value.toLowerCase())

            return indOfA - indOfB;
        })
    }

    search_lists_cont.innerHTML = newText.map(a => `<li>${a.firstName} ${a.lastName}</li>`).join(' ');
})