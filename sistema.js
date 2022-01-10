let numeroDeAlunos = 10;
let contador = 0;

while(contador <= numeroDeAlunos){
    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 != 0){
        console.log("O número " + contador + " é PAR");
    }else{
        console.log(`O número ${contador} é IMPAR`);
    }
    contador++;
}



//for (let contador = 0; contador <= numeroDeAlunos; contador++){
//  if(contador==0){
//    console.log("O número atual é zero");
//}else if(contador % 2 == 0){
//  console.log("O número" + contador + " é PAR");
//}else{
//   console.log(`O número ${contador} é IMPAR`)
//}
//}