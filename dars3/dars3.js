// Switch
let tex = "css";
switch(tex){
    case "html" : console.log("Bu HTML texnologiyasi");
    break;
    case "css" : console.log("Bu CSS texnologiyasi");
    break;
    default: console.log("Bu boshqa texnologiya");
}

// If va Switch nima farqi bor? If da bir nechta o'zgaruvchilarni turli oraliqlarda tekshirish mumkin. Switch da aniq qiymatlar taqqoslanadi.

//Baxolanish jarayonini Switch orqali ifodalang

// Sikl operatorlari
// for
// for(i=1;i<=100;i++){
//     console.log("salom talabalar");
// }

// for(i=100;i>=1;i-=2){
//     console.log(i);
// }

for(i=1;i<=20;i++){
    if(i%5 === 0){
        console.log(`Bu son :${i} | 5 ga bo'linadi`)
    }
}

for(i=1;i<=100;i++){
    if(i%2 ==0 && i%3 ==0){
        console.log(`2 va 3 ga bo'linuvchi sonlar: ${i}`);
    }
}

// Vazifa 1 dan 100 gacha toq sonlarni topish zarur
