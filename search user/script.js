let searching_input = document.querySelector(".searching-input"),
    found_files = document.querySelector(".found_files"),
    ul_list = document.querySelector(".ul-list");
// sstexcumenq objektner

Create_obj_and_appen()
function Create_obj_and_appen() {
    let arrobj = [
        {
            img: "img/img1.jpg",
            firstName: "Terry",
            lastName: "Medhurst",
            University: "Capitol University",
            Email: "Atuny0@gmail.com",
            Phone: "+63 791 675 8914",
            Age: 50,
            Address: "1745 T Street Southeast",
            BirthDate: '2000 - 12 - 25',
            City: "Washington",
        },
        {
            img: "img/img2.jpg",
            firstName: "Sheldon",
            lastName: "Quigley",
            University: " Stavropol State Technical University",
            Email: "Hbingley1@Plala.Or.Jp",
            Phone: "+7 813 117 7139",
            Age: 28,
            Address: "6007 Applegate Lane",
            BirthDate: '2003 - 08 - 02',
            City: "Louisville",
        },

    ];
    // ciklenq frum arrobj i vra ev tpumenq ul_list i mej
    for (let i = 0; i < arrobj.length; i++) {
        let li = document.createElement('li')
        li.className = 'hide'

        li.textContent = `${arrobj[i].firstName} ${arrobj[i].lastName}`

        ul_list.appendChild(li)
    }
    // ciklenq frum arrobj i vra ev tpumenq found_files i mej
    for (let i = 0; i < arrobj.length; i++) {

        let div = document.createElement('div')
        div.className = "fount-cont hide"
        div.innerHTML = `
	<div class="found-files-top-cont">
		<img class="user-img" src="${arrobj[i].img}" alt="user-img">
		<h2 class="title-names">${arrobj[i].firstName} ${arrobj[i].lastName}</h2>
		<button class='btn-info'>View info</button>
	</div>
	<ul class='all-info hide'>
		<li>university: <span>${arrobj[i].University}</span></li>
		<li>email: <span>${arrobj[i].Email}</span></li>
		<li>phone: <span>${arrobj[i].Phone}</span></li>
		<li>age: <span>${arrobj[i].Age}</span></li>
		<li>address: <span>${arrobj[i].Address}</span></li>
		<li>birthDate: <span>${arrobj[i].BirthDate}</span></li>
		<li>city: <span>${arrobj[i].City}</span></li>
	</ul>`
        found_files.appendChild(div)
    }
}
//
btn_info_click_open()
function btn_info_click_open() {
    document.querySelectorAll('.btn-info').forEach((el, i) => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.all-info')[i].classList.toggle("hide")
        })
    });
}
//
serchNames_logic()
function serchNames_logic() {

    let li = document.querySelectorAll('.ul-list>li')
    let fount_cont = document.querySelectorAll('.fount-cont')
    searching_input.addEventListener('input', () => {

        for (let i = 0; i < li.length; i++) {
            if (searching_input.value !== '') {
                if (li[i].textContent.toLocaleLowerCase().match(searching_input.value.toLocaleLowerCase()) !== null) {
                    li[i].classList.remove('hide')
                    fount_cont[i].classList.remove('hide')
                } else {
                    li[i].classList.add('hide')
                    fount_cont[i].classList.add('hide')
                }
            } else {
                li[i].classList.add('hide')
                fount_cont[i].classList.add('hide')
            }
        }
    })
}

