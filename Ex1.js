import PromptSync from "prompt-sync";
let prompt = PromptSync()
export function exercicio1() {
    let nome = prompt("Qual é o seu nome? ");
    let cargo = prompt("Qual o seu cargo dentro da empresa? ");
    let salario = prompt("Quanto voce ganha? ");
    
    if(salario < 1000){
        console.log(salario * 1.1);
    }else{
        console.log("Voce nao tera um acrescimo de 10% no salario");
    }
    
    console.log(nome)
    console.log(cargo)
    console.log(salario)}
