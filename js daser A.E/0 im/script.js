// // debugger                           cuycatalis dnadax gorcoxutyuny 
// // break                              kangnacnuma gorcoxutyuny;
// // continue                           hasnuma nshvac ketin et kety baca toxnum u sharunakuma gorcoxutyuny;
// // repeat                             veradarcnuma arjeqy
// // console.log(Math.round(5.45))      tovy kloracnuma 
// // console.log(Math.ceil(5.10))       tivy kloracnuma depi shat 
// // console.log(Math.fioor(5.10))      tivy kloracnuma depi qich
// // null                               vojmiban chka datark
// // undefined                          chgtnvac 
// // !=                                 kataruma hakarak gorcoxutyunya
// // <                                  poqr
// // >                                  mec
// // <==                                poqr kam havasar  
// // >==                                mec kam havasar
// // ==                                 stuguma
// // ===                                stuguma
// // &&                                 erkusnel
// // ||                                 kam sa kam na
// // /                                  bajanuma
// // -                                  hanuma
// // +                                  gumaruma
// // *                                  bazmapatkuma


// let tiv = 30;                                gorcoxutyun erpvor hasnuma 10 i kangnacnuma gorcoxutyuny
//  for(let i = 1; i < tiv; i++) {       
//      if (i==10  || i==25) {
//           break;
//      }
//      console.log(i)
//  }


//  let tiv = 30;                               gorcoxutyun erpvor hasnuma 10 i ancnuma 10y chi tpum 
// for(let i = 1; i < tiv; i++) {
//  if (i==10  || i==25) {
//      continue
//  }
//  console.log(i)
// }    


// let a = prompt("arjeq")                      gorcoxutyun vory barcracnuma qarakusi
// for (let i = 2 ; i < 10; i++) {
//  if (a**i<1000) {
//      console.log(a**i)
//  }
//  else break
// }


// let a = prompt("arjeq")
// for (let i = 2 ; i < 100; i++) {
//  if (a**i) {
//      console.log(a**i)
//  }
//  else break
// }

// let a=prompt("tiv");
// let res=2;

// for (let i = 1; i <= a; i++) {
//  res*=i
//  console.log(res)
// }


// let a=prompt("tiv");
// let i=2;
// let res=1;
// do{
//  res=a**i
//  console.log} while (i<10);


// if(10<==5) {
//  console.log("chishta")
//  if () {
//      console
//  }else{

//  }
// }

// <<if-2>>
// let a=true;
// let b=(a==true) ? 10 : 20;
// console.log(b)


// if gorcoxutyun ete sa chlini urem myusy klini ...
// let=10;
// let=20;
// if(20<10){
//  console.log("chishta")
// }else{
//  console.log("scala")
// }


// amenahasarak for gorcoxutyun vory asauma qani anqam katarvi es gorcoxutyuny
// for(let i=0; i<10; i++){
//  console.log(i)
// }

// for (let i=0;i<=10;i++){
//  console.log(i)
// }

// for(let i=0;i<=10;i++){
//  if(i==5){
//      continue;         // es depqum 5 tivy  aranqic helnuma
//  }
//  document.write(i)
// }

// for(let i=0;i<10;i++){
//  if(i==5){
//      break              // es depqum inqy kangnacnuma gorcoxutyuny 5 ic heto
//  }
//  document.write(i)
// }

// let i=0;
// while (i<10) {
//  i++;                    // nuyn fori gorcoxutyuni karch tesakna
//  console.log(i);
// }

// ----------------------------funkcia
// sum(10,50);
// function sum(ayo,voch){
//  console.log(ayo + voch);
// }

// function menifunct(x,y){           //urahatkutyuny mi kodov 0shat gorcoxutyunner anelu meja 
//  return x+y;
// }

// console.log(menifunct(10,10))
// console.log(menifunct(30,30))
// console.log(menifunct(50,50))


//-----------------------------------------
// for (let i = 2; i < 10 ; i++) {
//  if (i %2!=1) {
//      document.write(i)

//      for (let f = 1; f < 10 ; f++) {
//          if (f %2!=1) {
//          document.write(f)
//      }
//  }
//  document.write(",")
// }
// }


//-----------------------------------------------------------------charAt    hashvuma tareri qanaky ev cuyca talis 
// let  tarer="barev dzez" 
// let  res = tarer.charAt(0)

// for (let i = 0; i < tarer.length; i++) {
//  console.log(tarer.charAt(i))
//  document.write(tarer.charAt(i))

// let age = prompt('barev');
// function math(par) {
// switch(par){
//  case "barev"  : return "barev"
//  case "vonces" : return "lav du?"
//  case "lav"    : return "inj ka chka"
//  default       : return "miban sxales grel...(^_^)"
// }
// }
// alert(age);


//---------------------------------------------------------------- tarva amisner;
// let a = prompt();
// function math(){
// switch(a){
//  case"1" :return"hunvar"
//  case"2" :return"petrvar"
//  case"3" :return"mart"
//  case"4" :return"april"
//  case"5" :return"mais"
//  case"6" :return"hunis"
//  case"7" :return"hulis"
//  case"8" :return"ogostos"
//  case"9" :return"september"
//  case"10":return"hoktember"
//  case"11":return"noyember"
//  case"12":return"dektember"
//  default :return"miban sxales grel"
// }
// }
// let b = math();
// alert(b);


// -----------------------------------------stuguma tara te tiv jxtuma vor nan chta 
// let a =+prompt();
// if (!isNaN(a)) {
//  alert("ok!")
// }else{
//  alert("chgtnvac")
// }



// let x = prompt("es lavnem ?");
// if (x==="ha") {
//  alert("utem rojt")
// }else if (x==="shatem sirum") {
//  alert("ba es voncem sirum qezz !")
// }else if (x==="che"){
//  alert("nexaca")
// }else{
//  alert("chem haskanum injes grel teche kpatasxanei (^_^) !!!")
// }


// function f(a){ //a = 5000
//  let r = a.toString() // r = 5000 = srt
//  let l = r.toString().length; //4
//  let sum=0 //
// for (let i = 0; i < l; i++){
//  sum += +r.charAt(i);
//  }
//  let g=Math.pow(sum,l)

// if (g==a) {
//  alert("true")

// }else{
//  alert("error")
// }
// }
// f(5000)



// // -----------arr i mejninnerry shura talis hakaraky------------
// let a = ["hakob", "poxos", "petros", "aramis", "nika" ];

// alert(a)

// let i = 0;
//  i2= a.length - 1;

// while(i < a.length/2) {

// let d = a[i];
//  a[i] = a[i2];
//  a[i2] = d;

//  i = i + 1;
//  i2 = i2 - 1;
//  }
// alert(a) 

// // ---------bolor arjeqnery bazmapatkuma 2 ov----------------
// let x = [5,2,20,33,11,8];

// let y = [];

// let i = 0;
// while(i < x.length){
//  y[i] = x[i] * 2;
//  i = i + 1;
// }
// alert(x);
// alert(y);

// let x = [1,8,5,3];
// console.log(x.sort(function (a,b) {return b - a}));


// let i = 1;
// while(i < 10){
//     i++
//     console.log(i);
// }

//---------------------------------------------gri anun azganunt ev nka kkpcni irar ev kveradarcni----------

// let name = prompt("injpes e dzer anuny");
// let lastname = prompt("injpes e dzer azganuny");

// alert("bari galust " + name +" "+ lastname);

//----------------------------------------------------stuguma mec u poqry----------

// let x = 6;
// let y = 7;

// let  g = x < y;
// console.log(g)

//----------------------------------------------------ete x === 1 i asuma ok ete voch asuma no--------------

// let x = prompt();

// if (+x === 1){
// alert("ok")
// }else{
//     x !== 1 
//     alert("no")
// }

//------------------------------------------------------xax 3 harc verchum patasxan ev miavorneri qanak--------

// let points = 0;

// let harc1 = prompt("vorne hayastani mayraqaxaqy");
// let harc2 = prompt("vorne rusastani mayraqaxaqy");
// let harc3 = prompt("vorne fransiai mayraqaxaqy");

// if(harc1 === "erevan"){
//     points = points + 1;
// }

// if(harc2 === "moskva"){
//     points = points + 1;
// }

// if(harc3 === "pariz"){
//     points = points + 1;
// }

// alert("duq vastakeciq " + points + " miavor ");

//-------------------------------------------------------ete anuny brnuma barevuma---------------------

// let x = prompt("injne dszer nuny");

// if(x === "hakob"){
//     alert ("barev hakob")

// }else if(x === "anush"){
//     alert ("barev anush")

// }else if(x === "vazgen"){
//     alert("barev vazgen")
// }else{
//     alert("dzer tvyalnery cucakum chka ")
// }

//------------------------------------------------------ tariqai sahmanapakman kod------------

// let user_Response = +prompt("greq dzer tariqy");

// if (user_Response >= 18 && user_Response <= 60) {
//     alert("ok");
// }else{
//     alert("dzer tariqy chi hamapatasxanum");
// }

//-----------------------------------------------------------minjev ches patasxanum exit kody anverch ashxatuma------------
// while(true){
//     let user = prompt();
//     if (user === "exit"){
//         break;
//     }
// }

//-------------------------------------------------------------funqcia---------------------

// function ret (n){
//     console.log(n);
//     if (n < 10){
//         ret(++n)
//     }
// }
// ret(1)

//----------------------------------------------functiayov havaqac kalkulatr-------------
// let tiv1 = +prompt("tiv1");
// let str = prompt("str");
// let tiv3 = +prompt("tiv3");


// let numbers = function(x,z,y){
//     if (z==="+") {
//         alert(x + y)
//     }else if(z==="-"){
//         alert(x - y)
//     }
//     else if(z==="*"){
//         alert(x - y)
//     }
//     else if(z==="/"){
//         alert(x - y)
//     }
// }
// numbers(tiv1,str,tiv3);

//------------------------------------------ete tivy bajanvuma 2 i talisa tru ete che folse----------

// let zuyq_tver = function(x){
//     return x % 2 === 0
// };
// alert(zuyq_tver(prompt()))

//------------------------------------------mejy elementnera pahvum erpvor petqa heta veradarcnum----------
// let sam = function(numbers){
//     res = 0;
//     i = 0;
//     while(i < numbers.length){
//     res = res + numbers[i];
//     i = i + 1;
//     }
//     return res;
// };
// sam(prompt([]))
// alert(res)

//-----------------------------------------cuyca talis meji elementneri qanaky----------------------

// let sam = function(tver){
//     let rez = 0;
//     let i = 0;
//     for (i = 0; i < tver.length+1; i++){
//     rez = i;
//     }
//     return rez;
// }
// alert(sam(prompt()));

//------------------------------------------ete greq exit kody kavartvi ete voch anverj kharcni minjev chgreq exit ev kveradarcni te qani ancameq porcel 

// let res = 0;
// while(true){
//     let user = prompt("greq exit");

//     if (user === "exit"){
//         alert("duq areciq da > "+ res +" anqamic");
//         break;

//     }else if(user !== "exit") {
//         res = res + 1;
//         continue
//     }
//     console.log(res);
// }

//-------------------------------------------------------------erankyan makeresy hashvark----------------tur erku arjeq-------

// let arjeq_1 = +prompt("arjeq 1");
// let arjeq_2 = +prompt("arjeq 2");

// arjeqner = function(base, height){
//     return(base * height) / 2;
// }
// alert(arjeqner(arjeq_1,arjeq_2));

//----------------------------------------------------------------- ete x = vochmiban cuyc kta < ??? > ete voch cuyc kta < ok >

// let x = prompt("gri");
// if (x == 0 ){
//     alert("???");
// }else{
//     alert("ok")
// }

//-------------------------------------------------------------------dom------------------

// let x = document.getElementsByClassName(a55) = " background-color: red";


//--------------------------------------------------------------------------------------
// alert(2**5) //astichani barcracman operator
// alert(100%3)//moduli operator,veradzrcnum e mnacord@
// let a= '10'
// let b =5
// let c= a+b
// console.log(c);


// let guestList=`Gest:
// *Mari
// *Lility
// *Suren` 
// console.log(guestList);


// let a = "hyurer\nMari\nDavit\nsona"
// console.log(a);

// let a= prompt("qani tarekan es?")
// alert(`es${a}tarekan em`)

// let vortex = prompt("vortexes ashxatum");
// let avart = prompt("gorci avart")

// if (vortex == "grasenyakum" && avart == "gorcs avartvuma 5 in"){
//     alert("ari gnanq surch xmelu")
// }else if(vortex == "xanutum" && avart == "gorcy verjacela 9 in"){
//     alert( "gnanq kino")
// }else{
//     alert("chem ashxatum")
// }

// let a=confirm("du es glxavor@?")
// alert(a)

// let user = prompt('oveq duq?')
// if (user = "admin"){
//     let parol = prompt('greq paroly')
//     if(parol === 'es'){
//         alert('barev')
//     }else if(parol === null || parol === ""){
//         alert('close')
//     }else{
//         alert('hajox')
//     }
// }

// let arr=["t","e","s","t"]
// let a=["j","k","l"]
// let arr= ['tandz', 'xndzor','kivi','ananas']
// alert(arr.length)//-----------------cuyca talis toxi erkarutyuny
// arr[1]= 'banan'////-----------------poxuma elementy
// arr.push("banan") //----------------avelacnua arjeq zangvaci verjum
// arr.pop()//-------------------------jujuma zangvaci verjin elementy
// arr.shift()//-----------------------jnjuma arajin elementy
// arr.unshift('ananas')//-------------avelacnuma zangvaci skzbum arjeq
// let x = arr.join("*") //------------poxume storaketnery urish arjeqov
// arr.fill('barev') //----------------zangvaci bolor elementrney poxuma meji gracov
// delete arr[1]//---------------------jnjuma
// arr.splice(1,1)//-------------------jnjuma arajin elementy
// arr.splice(2,0,'mandarin','dexc')//--avelacnuma nshvac toxic heto
// let x=arr.concat(a)
// alert(x)
// alert(arr.concat(["j","k"], [1,3,4]))-zangvacnery miacnuma irar
// alert(arr.slice(1,3))



// forEach(); reduce(), filter(), map()

// callBack function

// function ask(harc, yes, no){
//     if(confirm(harc)) yes()
//     else no()
// }
// function showOk() {
//     alert("duq hamadzaynel eq")
    
// }
// function showCancel() {
//     alert("duq chexarkel eq")
    
// }
// ask("hamadzayn ewq mutqi het?",showOk,showCancel)

// math.Object;    //math function.
// Math.random();  //patahakan skzbunqov gorcoxutyuna katarum
// Math.round();   //tivy kloracnuma verev kan nerqev yst trvac arjeqi orinak 6.4 - 6.6;
// Math.floor();   //tivy kloracnuma depi nerqev;
// Math.ceil();    //tivy kloracnuma depi verev;
// Math.sqrt();    //hashvuma qarakusi armat; 
// Math.pow();     //barcracnuma astichan;
// Math.abs();     //-minusi gorcoxutyuny sarquma +;
// Math.min();     //cuyca talis arjeqneric amena poqrin;
// Math.max();     //cuyca talis arjeqneri amenamecy;
// \n              //toxadarca anum;
// \t              prabela anum erkar;

// let x =  Math.round(Math.random()*10);
// alert(x);

// let x = Math.floor(3.9);
// alert(x)

// let x = Math.ceil(3.1);
// alert(x)

// let x = Math.sqrt(64);
// alert(x)

// let x = Math.pow(7,3); 7*7*7
// alert(x)

// let x = Math.abs(-7);  7
// alert(x)

// let x = -20;
// let y = 18;
// let b = Math.min(x,y);                          //cuyca talis arjeqneric poqraguyny
// alert(b)

// let x = -20;
// let y = 18;
// let b = Math.max(x,y);                          // -----------------------------cuyca talis arjeqneric mecaguyny
// alert(b)

// let r = Math.round(Math.random() * 255 );       //------------------------------------vercnuma patahakanutyan skzbunqov gyner
// let g = Math.round(Math.random() * 255 );
// let b = Math.round(Math.random() * 255 );
// for( i=0; i<1; i++ ){
//     document.write(`<div style="width:200px;height:200px; border:1px solid; background-color:rgb(${r},${g},${b})"></div>`);
// }


// ---------------------------veradarcnuma tvery hakarak----------------------------
// let x = prompt();   
//         let y = x % 10;//3
//         let u = (x - y)/10;//27
//         let v = u % 10;//7
//         let r = (u - v)/10//2
//     alert(""+y+v+r);


// tnain
// ogtagorcel stringi metodnery
// lini prompt mejy grvi mecattar hayeren mecatar a ic f inqy ekrani vra cuys ta karmir guynov ete
// grvi angleren mecatar a ic z cuyc ta kapuyt guynov ete grvi ruseren aic-ya beri oranj
// guynov ete grenq tiv beri sevov



// let str = prompt();//------------------------------stuguma te vor sahmani meja gtnvum es tary kam tivy-------------------------
// document.write(str.charCodeAt(str));


//tnain------------------------grel tarer ev tver vor beri tarber  guynerov--------------------------
// let str = prompt();
// let arm;
// let rus;
// let en;
// let num;
        
//         if (str.charCodeAt(str) >= 1329 && str.charCodeAt(str) <= 1366){
//             //hayeren---------------------------------------------------
//             arm = str;
//             document.write(`<p style = "font-size: 40px; color: red; text-align: center;"> ${arm} </p>`);

//         }else if(str.charCodeAt(str) >= 1040 && str.charCodeAt(str) <= 1071){
//             //ruseren--------------------------------------------------------
//             rus = str;
//             document.write(`<p style = "font-size: 40px; color: orange; text-align: center;"> ${rus} </p>`);
        
//         }else if(str.charCodeAt(str) >= 97 && str.charCodeAt(str) <= 122){
//             //angleren----------------------------------------------------
//             en = str;
//             document.write(`<p style = "font-size: 40px; color: blue; text-align: center;"> ${en} </p>`);
        
//         }else{
//             //tver-------------------------------------------------------
//             num = str;
//             document.write(`<p style = "font-size: 40px; color: black; text-align: center;"> ${num} </p>`);
//         }
        

// TARERY GRUMA TARBER GYNI 
// let tarer = prompt();
//     for(i=0;i<tarer.length;i++){
//         if(tarer[i].charCodeAt()>=1329 && tarer[i].charCodeAt()<=1366){
//             document.write(`<span style = "color: red;"> ${tarer[i]} </span>`);
        
//         }else if(tarer[i].charCodeAt()>=1040 && tarer[i].charCodeAt()<=1071){
//             document.write(`<span style = "color: blue;"> ${tarer[i]} </span>`);

//         }else if(tarer[i].charCodeAt() >= 65 && tarer[i].charCodeAt() <= 90){
//             document.write(`<span style = "color: yellow;"> ${tarer[i]} </span>`);
//         }else{
//             document.write(`<span style = "color: black;"> ${tarer[i]} </span>`);
//         }
//     }


// ------------dom------------
// document.querySelector(".a55").classList.add("dur");