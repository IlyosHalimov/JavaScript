// Sikl operator = while
// let son = 1;
// while(son<=50){
//     console.log(son);
//     son++;
// }

// Function declaration
man();
function man(){
    console.log("Mening ismim Nodir");
}

// console.log(raqam);
// let raqam = 20;

//Function Expression (funksiyadan keyin uni chaqirish zarur)

// salomlashish();
// const salomlashish = function(){
//     console.log("Assalomu alaykum");
// }


// Arrow function
const alik = ()=>{
    console.log("Alik")
}
alik();
// 
function lokal(){
    let ism = "Abdulloh";
    console.log(ism);
}
lokal();

// 
let manzil = "Qoqon shahar";
function manzilim(){
    console.log(manzil);
}
manzilim();
console.log(manzil);

// shadow variables - ozgaruvchilarni akslantirish
let degree = "Middle";
const daraja = ()=>{
    let degree = "Senior";
    console.log(degree);
}
daraja();
console.log(degree);
// 
let degree1 = "Middle";
const daraja1 = ()=>{
    degree1 = "Senior";
    console.log(degree1);
}
daraja1();
console.log(degree1);

// Parametor
let talaba = (ism , guruh , yosh , manzili)=>{
    console.log(`Mening ismim ${ism}. guruhim: ${guruh}. Yoshim: ${yosh} da. ${manzili} da yashayman`);
}
talaba("Aziz" , "212-15" , 18 , "Qoqon shahar");
talaba("MuhammadIso" , "207" , 15 , "Qo'qon shahar");

// Default parametor

let kirish = (login , parol , pochta)=>{
    // if(pochta){
    //     console.log(`Login: ${login} , Parol: ${parol} , Pochta: ${pochta}`);
    // }
    // else{
    //     console.log(`Login: ${login} , Parol: ${parol} , Pochta: `);
    // }
    pochta ?  console.log(`Login: ${login} , Parol: ${parol} , Pochta: ${pochta}`) : console.log(`Login: ${login} , Parol: ${parol} , Pochta:`)
        
}
kirish("admin" , 12345 , "username@gmail.com");
kirish("admin" , 12345);
// Vazifa : Dasturchi habarnomasi funksiyasini tayyorlaysiz
// texnologiya(majburiy) , tajriba , daraja(majburiy) , horijiy_til , soft_skills(majburiy)


