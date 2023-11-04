// Js da DataTypes = 8 ta 
// 1.Number - sonli qiymatlar(integer=10 , float=12.5)
// 2.String  - "salom barchaga"
// 3.Boolean - True , False
// 4.Undefined - 
// 5. Null
// 6. BigInt > 9007199254740992 belgisi n
// 7. Symbols
// 8. Objects - Array , Object , Function
let nomalum = null;
console.log(isNaN(null+1));
nomalum = nomalum+"salom";
console.log(typeof(undefined));
console.log(undefined+1);
console.log(null+1);
console.log(9007199254740992n+1n);
let simbol = Symbol('simbol');
console.log(typeof(simbol));
// let , var , const
let son = 100;
son = son+10;
// const raqam = 60;
// raqam = raqam+5;
// console.log(raqam);
// Massiv array = index  orqali chaqiriladi
let muhammadiso = [15 , "Muhammadiso" , "Js" , {} , function(){} , true];
console.log(muhammadiso);
console.log(muhammadiso[0]);
// Object key orqali chaqiriladi
let abdumumin = {
    key: "value",
    ism: "Abdumo'min",
    yosh: 15,
    tex:{
        js:"JS , Nodejs , React"
    }
};
console.log(abdumumin);
console.log(abdumumin.ism);
console.log(abdumumin.tex.js);
// Function - funksiya
let f = function(){
    console.log("f");
};
function salom(){
    console.log("salom")
}
f();
salom();
//  '' , "" , ``
console.log('Salom "Toshkent"');
console.log("Salom G'ulomjon");
console.log(`Mening ismim ${abdumumin.ism}`);
