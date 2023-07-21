import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio4() {
    let quatro = parseInt(prompt("Digite um número: "))

    if(quatro % 2 ===0){
    console.log("O numero " + quatro + " é par!")
    }else{
    console.log("O numero " + quatro + " é impar")
    }
}