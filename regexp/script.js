// document.querySelector('input').addEventListener('input', regExpInp);

// function regExpInp() {
//     let testspan = document.querySelector('pre')
//     let input = document.querySelector('input').value

//     testspan.innerHTML = input.match(/[A-Z][a-z]+[\W]+\S/);// partadir mecatarov 
//     // testspan.innerHTML = input.match(/[A-Z][a-z][a*]+/);// +            1 ic avel vor ashxati // Hellow
//     // testspan.innerHTML = input.match(/[A-Z][a-z]*/);// *            0 kam avel vor ashxati // Hellow
//     // testspan.innerHTML = input.match(/[A-Z][a-z]+\s/);// \s         probel 
//     // testspan.innerHTML = input.match(/[A-Z][a-z]+\s+/);// \s+       probel mekic avel probel
//     // testspan.innerHTML = input.match(/[A-Za-z0-9]/);//              mecatar A-Z poqratar a-z ev 0-9 amen inj veradarcnuma tar
//     // testspan.innerHTML = input.match(/[A-Za-z0-9]+/);//+            mecatar A-Z poqratar a-z ev 0-9 amen inj veradarcnuma bar
//     // testspan.innerHTML = input.match(/[(0-9)]+[0-9]+-[0-9]+-[0-9]+/);//     (098)20-30-50
//     // testspan.innerHTML = input.match(/[(0-9)]+\d+\d+-\d+-\d+/);// \d        (098)20-30-50
//     // testspan.innerHTML = input.match(/(\+[374]+)/g);//                       +374    
//     // testspan.innerHTML = input.match(/[(0-9)]{5}\d{2}-\d{2}-\d{2}/);// {2}  (098)20-30-50 nshumenq konkret sinvolneri qanak
//     // testspan.innerHTML = input.match(/[(0-9)]{2,}\d{1,}-\d{1,}-\d{1,}/);// {min,}       (098)20-30-50 nshumenq minimum sinvolneri qanak
//     // testspan.innerHTML = input.match(/[(0-9)]{2,5}\d{1,3}-\d{1,3}-\d{1,3}/);// {min,max}    (098)20-30-50 nshumenq minimum sinvolneri qanak
//     // testspan.innerHTML = input.match(/[A-Za-z0-9]{3,10}/);//        [A-Za-z0-9]{3,10} meatar A-Z | poq a-z | 0-9 | (gtnel min 3)(max 10)
//     // testspan.innerHTML = input.match(/[A-Z]+|[a-z]+/);// |          kam nshan
//     // testspan.innerHTML = input.match(/H(ellow)+/g);// H(a-z)+       partadir petqa dimacy lini H tary
//     // testspan.innerHTML = input.match(/H?(ellow|number)+/g);// H?    ete (H)tary dimacic chlini vojinj ete chlini eli kveradarcni
//     // testspan.innerHTML = input.match(/^[A-Z]+[a-z]+/g); // ^        texty partadir petqa sksvi mecataruv vor ashxati         
//     // testspan.innerHTML = input.match(/[0-9]+$/); // $               texty partadir petqa avartvi tverov
//     // testspan.innerHTML = input.match(/[0-9]+$/); // $
// }

// regExpInp()