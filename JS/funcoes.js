//function bissexto() {
    //let ano = parseInt(document.getElementById ('ano').value);
   // localStorage.setItem('ano', ano);
   // if (ano %4 == 0) {
    //    console.log(ano + " é um ano bissexto!");
   // }
   // else{
   //     console.log(ano + " NÃO é um ano bissexto!");
  //  }
//}

//function 100&200(){
 //   let num1 = parseFloat(document.getElementById('num1').value);
 //   localStorage.setItem('num1');

   // if (num1 >= 100 && num1 <= 200) {
  //      console.log(num1 + " está entre 100 e 200!");
   // }else{
    //    console.log(num1 + " NÃO está entre 100 e 200");
   // }

//}

//function Votar(){
 //   let idade = parseInt(document.getElementById('idade').value);
   // localStorage.setItem('idade');

   // if(idade < 18){
      //  console.log("Você não tem idade o suficiente para votar ainda!");
   // } else{
      //  console.log("Você já pode votar, seja consciente!")
//    }
//} 

function bissexto() {
    let ano = parseInt(document.getElementById('ano').value);
    let resultado = "";

    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        resultado = ano + " é um ano bissexto!";
    } else {
        resultado = ano + " NÃO é um ano bissexto!";
    }

    console.log(resultado);
    localStorage.setItem('resultadoAnalisado', resultado);
}

function verificarIntervalo() {
    let num1 = parseFloat(document.getElementById('num1').value);
    
    localStorage.setItem('num1', num1); 

    if (num1 >= 100 && num1 <= 200) {
        console.log(num1 + " está entre 100 e 200!");
    } else {
        console.log(num1 + " NÃO está entre 100 e 200!");
    }
}

function Votar() {
    let idade = parseInt(document.getElementById('idade').value);
    
    // Salva a idade digitada no localStorage
    localStorage.setItem('idade', idade); 

    if (idade < 16) {
        console.log("Você não tem idade o suficiente para votar ainda!");
    } else if (idade >= 16 && idade < 18) {
        console.log("O seu voto já é facultativo (opcional)!");
    } else {
        console.log("Você já é obrigado a votar, seja consciente!");
    }
}
