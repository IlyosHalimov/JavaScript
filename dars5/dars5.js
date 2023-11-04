// Objects
// Obyektda key:value
let obj = {
    name: "MuhammadIso",
    yosh: 15,
    manzil: "Qoqon",
    level: "Junior",
}
console.log(obj.name);
// Old version
const obj2 = new Object();
console.log(obj2);
// qiymatlarini ozgartirish
obj.name = "Ilyosjon";
console.log(obj);
//yangi obyekt ochilganda Objectlar manzillari farqli boladi
obj = "Salom";
console.log(obj);

let manzil = {
    url: "https://kun.uz",
    user:20000,
    price:15000
}
// seal Obyektni faqat mavjud key larini qiymatini ozgartiradi
Object.seal(manzil);
manzil.price = 10000;
console.log(manzil)
// Obyektni muzlatish (Object.freeze(objectName))
Object.freeze(manzil);
manzil.url = "daryo.uz";
console.log(manzil);
// key ni olishning 2-usuli (Bu usul key bir nechta sozdan iborat bolsa)
let notebook = {
    rang: "Qora",
    brand:"Acer",
    price: 700,
    dyum: 15.6,
    'kimga tegishli': "Abdulloh",
    0: "Bir yil ishlagan",
}
console.log(notebook['kimga tegishli']);
console.log(notebook[0]);
console.log(notebook["0"]);
// 
let aniqla = "Brand";
console.log(notebook[aniqla]);
// 
let aniqla2 = "brand";
console.log(notebook[aniqla2]);
// Obyektni biriktirish
let a = {
    rang: "Qora",
    brand:"Acer",
    price: 700,
    dyum: 15.6,
    'kimga tegishli': "Abdulloh",
    user:[],
}
let b = {
    name: "MuhammadIso",
    yosh: 15,
    manzil: "Qoqon",
    level: "Junior",
}
Object.assign(a["user"] , b);
console.log(a);
console.log(a.user["name"]);
// Obyektni ichidagi key bor yoki yoqligini aniqlash
console.log("name" in a.user);
// Obyektda klon(nusxa) olish
let clone = structuredClone(a);
console.log(a);
// Clone yani nusxa olinsa key va qiymatlar bir xil bo'ladi lekin manzil har xil bo'ladi
console.log(a===clone);
// 
let k = {
    price:100,
    name:"Telefon"
}
let j = {
    price:100,
    name:"Telefon"
}
console.log(k===j);
let son = 12;
let son1 = 12;
console.log(son===son1);
// 
k = j;
console.log(k===j);
// 
for(let i in a){
    console.log(i)
}



