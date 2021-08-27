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
 
 //questao dez
 const custo = 5;
 const valor = 10;
 let quantidade = 1000;
 let custoTotal = custo +(custo*0.2);
if (custo<0 || valor<0 || quantidade <1000){
    console.log(erro)
}else{
    console.log(1000*(valor-custoTotal))
}

//questao onze
const salarioBruto = 3000;
let descontoInss ="";
let descontoIr="";

if (salarioBruto<=1556.94){
    descontoInss = salarioBruto*0.08;
}else if(salarioBruto<=2594.92){
    descontoInss = salarioBruto*0.09;
}else if(salarioBruto<=5189.82){
    descontoInss = salarioBruto*0,11;
}else{
    descontoInss = 570.88;
}

let salarioBase = salarioBruto-descontoInss;

if (salarioBase<=1903.98){
    descontoIr = 0;
}else if(salarioBase<=2826.65){
    descontoIr = (salarioBase*0.075)-142.8;
}else if(salarioBase<=3751.05){
    descontoIr = (salarioBase*0.15)-354.8;
}else if(salarioBase<=4664.68){
    descontoIr = (salarioBase*0.225)-636.13;
}else {
    descontoIr = (salarioBase*0.275)-869.36;
}
 
let salarioLiquido = salarioBase-descontoIr;
console.log(salarioLiquido)
