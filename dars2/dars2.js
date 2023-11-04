let son = 10;
let string = "10";
// + belgisi string number
console.log(son+ +string);
let float = 45.25;
let float2 = 16.98
// parseInt butun qismini olib beradi
console.log(Number.parseInt(float+float2));
console.log(Number.parseFloat(float+float2)-Number.parseInt(float+float2));
console.log(typeof(undefined));
console.log(false == 0);
console.log(false == 1);
console.log(Boolean(false == 1));
// = , == , ===
console.log(Boolean(son == string));
console.log(Boolean(son === string));
// '' , "" , ``
let qiymat1 = 5;
let qiymat2 = 17;
// - + / *
console.log(qiymat1+qiymat2);
// % qoldiq
console.log(qiymat2%qiymat1);
//  ** daraja
let d = 5;
let d2 = 4;
console.log(d**d2); //5*5*5*5 = 625
//   ()
console.log(5+7*3-11);
console.log((12+5)*3);
// inrement ++  1 ga oshirish
console.log(d++);//5
//6
console.log(++d);//7
// decrement -- 1 ga kamaytirish

console.log(d--);//7
//6
console.log(--d);//5
// Taqqoslash (Comprision)
// > , < , >= , <= , == , === , !
console.log(!true);
console.log(10>=10);
console.log(10<=10);
// Mantiqiy operatorlar = Logical operators
// OR  || (Yoki)
// AND && (Va)
// NOT ! 
let login = true;
let parol = false;
console.log(login && parol);
// true || false = true
//  false || false = false
// false || true = true
//  false && true = false
// true && true = true
let id = true;
let faceid = false;
console.log(id || faceid);
let svet = false;
let svet_pul = true;
let panel = true;
console.log(svet && svet_pul || panel);
// let svet_holati = svet && svet_pul || panel;

// if(svet == true && svet_pul == true || panel == true){console.log("Svet bor")}
// else{console.log("Svet yo'q")}
if(svet == true){
    svet_pul == true ? console.log("Svet tarmoqda bor va puli ham mavjud") : console.log("Pulingiz yo'q")
    panel == true ? console.log("Panel ishladi") : console.log("Panel ham ishlamadi")
    //  shart ? True : False
}
else{
    panel == true ? console.log("Panel ishga tushdi") : console.log("Panelda ham tok yo'q. Tarmoqda ham tok yo'q")
}