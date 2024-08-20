  //  nomeDoEstudanteMatriz=[];

   function submit()
      {
     displayEstudanteMatriz=[];

     for(j=1; j<=6; j++)
      {
    nomeEstudante=document.getElementById("nameOfTheStudent"+j).value;
    nomeDoEstudanteMatriz.push(nomeEstudante);
      }
    tamanhoDaMatriz=nomeDoEstudanteMatriz.length;
    console.log (tamanhoDaMatriz)
    console.log (nomeDoEstudanteMatriz)

    document.getElementById("displayNameWithCommas").innerHTML= nomeDoEstudanteMatriz;
    document.getElementById("submitButton").style.display="nome";
    document.getElementById("sortButton").style.display="inline-block";
    
      }


   function sorting()
    {
      nomeDoEstudanteMatriz.sort();
      document.getElementById("displayNameWithoutCommas").innerHTML= nomeDoEstudanteMatriz;
    }


  let num= parseInt(prompt("digite um numero"));

while(num>=0) {
  console.log(num);
  num--  
}

// Desenvolva um programa que solicita ao usuário que insira suas notas de uma série de disciplinas. 
// o usuário pode continuar adicionando notas até decidir parar.
// O programa deve calcular e imprimir a média das notas, 

// let media=0;
// while (true){
//   const notas= parseFloat(prompt("digite uma nota ou -1 para parar"));
//   let soma=0;
//   let contador= 0;



//   if (notas=== -1){
//     break;
//   }
//   else {
//    soma=(soma+notas);
//    contador++
//   }
//   media= (soma/contador);
//   }
//   console.log(media);


//  Atividade 03
// Peça ao usuário para inserir números continuamente e imprima o somatório dos números inseridos. 
// O programa deve continuar executando até que o usuário insira zero.

// let soma=0
// while (true){
//   const num= parseInt(prompt("digite um numero ou zero para parar"));

//   if (num===0){
//     break;
//   }

//   else{
//     soma=(soma+num);
//   }
// }
// console.log(soma)





//Atividade 04
//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
//mostrando uma mensagem de erro e voltando a pedir as informações.

// while(true){
//   const nome=prompt("nome")
//   const senha=prompt("senha")

//   if(senha==nome){
//   alert("erro")
//   }

//   else{
//     alert("login")
//   }
  
// }

// Faça um programa que peça para 5 pessoas a sua idade, 
// ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25, 26 e 60 e maior que 60; e então, 
// dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

let soma=0;
let contador=1;

while(contador<=5){
const idade=parseInt(prompt("idade"));
soma=(soma+idade);
contador++

}
const media=(soma/5);

if(media>=0 && media<=25){
  console.log("a turma é jovem");
}
else if (media>=26 && media<=60){
  console.log("a turma é adulta");
}
else{
  console.log("a turma é idosa");
}



// Atividade 06
// Calcule a soma dos números de 1 a 50












