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

 //questao seis
 const nomePeca = "BOLA";
 
 if(nomePeca.toLowerCase() == "peão"){
     console.log("Anda para frente e come em diagonal")
 }else if (nomePeca.toLowerCase() == "torre"){
     console.log("Anda em linha reta para frente e para os lados quantas casas quiser")
 }else if (nomePeca.toLowerCase() == "cavalo"){
     console.log("Anda em L e pula sobre as peças")
 }else if (nomePeca.toLowerCase() == "bispo"){
     console.log("Anda na diagonal e pode andar quantas casas quiser")
 }else if (nomePeca.toLowerCase() == "rainha"){
     console.log("Anda para todas as direções quantas casas quiser")
 }else if (nomePeca.toLowerCase() == "rei"){
     console.log("Anda em todas as direções apenas uma casa")
 }else{
     console.log("Não é um nome de peça válido")
 }

 //questao sete
 let porcentagem = -60;

 if(porcentagem>=90 && porcentagem<=100){
     console.log("A")
 }else if (porcentagem>=80){
     console.log("B")
 }else if(porcentagem>=70){
     console.log("C")
 }else if(porcentagem>=60){
     console.log("D")
 }else if(porcentagem>=50){
     console.log("E")
 }else if(porcentagem<50 && porcentagem>=0){
     console.log("F")
 }else{
     console.log("erro")
 }

 //questão oito
 const um = 10;
 const dois = 12;
 const tres = 8;

 if((um%2)==0 || (dois%2)==0 || (tres%2)==0 ){
     console.log(true)
 }else{
     console.log(false)
 }

 //questao nove
 const um = 10;
 const dois = 12;
 const tres = 8;

 if((um%2)!=0 || (dois%2)!=0 || (tres%2)!=0 ){
     console.log(true)
 }else{
     console.log(false)
 }
 