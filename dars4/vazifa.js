// let talaba = (ism , guruh , yosh , manzili)=>{
//     console.log(`Mening ismim ${ism}. guruhim: ${guruh}. Yoshim: ${yosh} da. ${manzili} da yashayman`);
// }
// talaba("Aziz" , "212-15" , 18 , "Qoqon shahar");
// talaba("MuhammadIso" , "207" , 15 , "Qo'qon shahar");
// Vazifa : Dasturchi habarnomasi funksiyasini tayyorlaysiz
// texnologiya(majburiy) , tajriba , daraja(majburiy) , horijiy_til , soft_skills(majburiy)


// let WebDeveloper = (name , technology , age , location , experience , level , ForeignLanguages , SoftSkills )=>{
//     console.log(`Mening ismim ${!name}. Men hozirda ${!technology}bilaman. Mening yoshim salkam ${age}da. Men ${location}da yashayman. Mening hozirda tajribam ${experience}. Mening darajam hozirda ${!level}. Men hozirda ${ForeignLanguages}ni bilaman. Mening yaxshi tomonlarim ${!SoftSkills}`);
// }
// WebDeveloper("Ilyos" , "HTML , CSS , JS , PHP , OOP , BOOTSTRAP" , "16" , "Farg'ona viloyati: Qo'qon shahri" , "1.5yillik" , "Senior" , "Ingliz va rus tili" , "Xotira va nutq yaxshi rivojlanmoqda");

let WebDeveloper = (texnology , tajriba, daraja , horijiy_til , soft_skills)=>{
    tajriba && horijiy_til ? console.log(`Texnologiyam: ${texnology} , Tajribam:${tajriba} , Darajam: ${daraja} , Horijiy tili: ${horijiy_til} , soft_skills: ${soft_skills}`)
    : console.log(`Texnologiyam: ${texnology} , Tajribam :${tajriba} , Darajam: ${daraja} , Horijiy tili: ${horijiy_til} , soft_skills: ${soft_skills}`);
}
WebDeveloper("Web" , "1.5yil" , "senior" , "deyarli ingliz tili" , "nutq yaxshi rivojlanmoqda")