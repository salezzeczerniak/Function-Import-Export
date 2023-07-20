import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio1() {
    console.log("Função Exercicio 1 - For");
    
    for(let numero = 0; numero < 11; numero ++ ) {
        console.log("O número é: " + numero);
    }
}

export function exercicio2(){
    console.log("Função Exercicio 2 - For");
    
    for(let par = 0; par < 11; par +=2){
        console.log("Números pares :" + par)
    }
}

export function exercicio3(){
    console.log("Função Exercicio 3 - For");
    
    for(let sequencia = 1; sequencia <=50; sequencia +=2){
        console.log("A sequencia impar é: " + sequencia)
    }
}

export function exercicio4(){
    console.log("Função Exercicio 4 - For"); 
    
    let numero = parseInt(prompt("Digite a tabuada desejada: "));

    for(let tabuada = 1; tabuada <= 10; tabuada ++){
    console.log("A tabuada é: " + numero + "x" + tabuada + "=" + numero*tabuada)
    }
}

export function exercicio5(){
    console.log("Função Exercicio 5 - For"); 
    
    let n1 = 0
    let n2 = 1
    let  soma;

    for(let i = 0; i < 10; i ++){
    console.log(n1)
    soma = n1 + n2;
    n1 = n2;
    n2 = soma;
    }
}

export function exercicio6(){
    console.log("Função Exercicio 6 - While"); 
    
    let par = 0

    while(par <= 20) {
    par += 2;
    console.log("O número é " + par)
    }
}

export function exercicio7(){
    console.log("Função Exercicio 7 - While"); 
    
    let contador = 0;
    let soma = 0; 
    
    while (contador <= 100) {
    soma = soma + contador
    contador ++ 
    console.log(soma)
    }

}

export function exercicio8(){
    console.log("Função Exercicio 8 - While");
    
    let idade = parseInt(prompt("Digite a sua idade: "));

    while(idade < 18){
    idade = parseInt(prompt("Digite a sua idade: "));
    }

    console.log("Sua idade é  " + idade)
}

export function exercicio9(){
    console.log("Função Exercicio 9 - While");
    
    let numero = parseInt(prompt("Digite qualquer número: "));

    while(numero > 0){
    numero = numero - 1
    console.log(numero);
    }
}

export function exercicio10(){
    console.log("Função Exercicio 10 - While");
    
    let numero = parseInt(prompt("Digite um número: "))

    while(numero != 0){
    numero = parseInt(prompt("Digite um número: "))
    }
}