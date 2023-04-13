var numeroAlunos = 10

for (let contador = 0; contador <= numeroAlunos;contador++) {
    //console.log(contador)

    if(contador == 0)
    {
        console.log("O número" +contador+  "atual é ZERO")
    }else if (contador % 2 == 0)
    {
        console.log("O número" +contador+ "atual é PAR") 
    }else{
        console.log(`O número ${contador} atual é IMPAR`)
    }
    
}


contador = 0;
classificacaoAlunos = 10;


while (contador < classificacaoAlunos) {
    console.log(contador)

    if(contador == 0)
    {
        console.log("O número" +contador+  "atual é ZERO")
    }else if (contador % 2 != 0)
    {
        console.log("O número" +contador+ "atual é IMPAR") 
    }else{
        console.log(`O número ${contador} atual é PAR`)

    } 
    contador++;
    
}



let nomeAlunos = ["Jessica", "Caique", "Odirlei","Thiago"]

for (let nome of nomeAlunos) {
    console.log(`O nome desse aluno é $(nome)`)
}