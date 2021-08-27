// questão um
const a = 5;
const b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//questão dois
const a = 5;
const b = 15;
if (a>b){
    console.log(a)
}else {
    console.log(b)
}

//questão três
const a = 2;
const b = 7;
const c = 10;
if (a>b && a>c){
    console.log(a)
}else if (b>a && b>c){
    console.log(b)
}else{
    console.log(c)
}

//questão quatro
let number=0;
if (number>0){
    console.log("positive")
}else if(number<0){
    console.log("negative")    
}else{
    console.log("zero")
}

//questão cinco
const anguloUm = 70;
const anguloDois = 30;
const anguloTres = -80;
 if (anguloUm<0 || anguloDois<0 || anguloTres<0){
     console.log("erro")
 }else if(anguloUm+anguloDois+anguloTres==180){
     console.log(true)
 }else{
     console.log(false)
 }

 //questao seis]
 const nomePeça = "Peão"
 nomePeça.toLowerCase()