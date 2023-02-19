// let str = 'barev barev arev gago valod'
// str.match('barev')//mana galis toxi mej nshvac arjeqy ev veardarcnuma zangvaci mej 

// __________________________________________________________regexp_____________________________________________________________
// match() //varadarcnuma nshvac arjeqy zangvaci tesqov
let str = `+3740959595956 20 200 A 2 Barev barev arev gago valod llll aaaa !?+-%$#@&*()_=`
let newStr = '11114444'
// console.log(str.match(/barev/g))         // mana galis bolory - g
// console.log(str.match(/barev/gi))        // mana galis bolory anteselov mecatarerov ev poqratarov - gi
// console.log(str.match(/^barev/gi))       // mana galis tvyal toxy sksvuma nshvac elementov te voch
// console.log(str.match(/barev$/gi))       // mana galis tvyal toxy verjanuma nshvac elementov te voch
// console.log(newStr.match(/4{4}/gi))      // mana galis tvyal toxy verjanuma nshvac elementov ev qani anqam petqa grvi
// console.log(str.match(/L{1,10}/gi))      // mana galis tvyal L ov sksvox, nshvac minjev qanis veradarcni
// console.log(str.match(/a|l/gi))          // mana galis kam a kam l 
// console.log(str.match(/[A-D]/g))         // mana galis A-D ( mecatar ) ynkac mijakayqum nshvac tarery 
// console.log(str.match(/[1-6]/g))         // mana galis 1-6 ynkac mijakayqy
// console.log(str.match(/.{3}/g))          // mana galis bolor sinvolnery verdarcnuma bajanvac iraric nshvac qanakov
// console.log(str.match(/\w/g))            // veradarcnuma bolory bacarutyuamb sinvolneri u datark toxeri
// console.log(str.match(/\d/g))            // veradarcnuma bolor tvery
// console.log(str.match(/\D/g))            // veradarcnuma bolory@ baci tveric
// console.log(str.match(/\s/g))            // veradarcnuma bolory@ probelnery
// console.log(str.match(/\S/g))            // veradarcnuma ameninj baci probelneric
// console.log(str.match(/od\b/g))          // veradarcnuma nshvac bari tarery verjic
// console.log(str.match(/\bar/g))          // veradarcnuma nshvac tarery skzbic
// console.log(str.match(/a+/g))            // veradarcnuma bolor tarery kam barery nshvac arjecqi
// console.log(str.match(/b*/g))            // veradarcnuma bolor sinvolnery ev irnac hajortox probelnery
// console.log(str.match(/\+374?\d{7}/g))   // veradarcnuma +374 ic heto 7 tah tvain arjeq
// console.log(str.match(/arev(?= gago)/g))// veradarcnuma naxord bary
// console.log(str.match(/llll(?! valod)/g))// veradarcnuma hajord bary

// console.log(str.replace(/a/g,'i'))       // pixuma arajin argumenty erkrordov

// let regexp = /ll/
// console.log(regexp.test(str))       // veradarcnuma tru kam false




// u unenanl mi hat input vori mej patradir petqa lini
// mecatar A
// poqratarer
// lini 12 nishic avel 
// unena sinvol (.#$^*)

// unenal btn sexmelis inputi meji texty veacvi astxanshneri



let input = document.getElementById('input')

input.addEventListener('input', () => {

})