import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio3() {
    let numero = prompt("Digite um numero: ")

    if(numero > 0){
    console.log("O numero escolhido é positivo")
    }else if(numero <0){
    console.log("O numero escolhido é negativo")
    }else{
    console.log("O numero zero é Neutro")
    }
}