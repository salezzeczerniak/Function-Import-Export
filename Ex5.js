import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio5() {
    let cinco_01 = parseInt(prompt("Digite o primeiro numero: "))
    let cinco_02 = parseInt(prompt("Digite o segundo número: "))

    if(cinco_01 > cinco_02){
    console.log("O " + cinco_01 + " é maior que " + cinco_02)
    }else if(cinco_02 > cinco_01){
    console.log("O " + cinco_02 + " é maior que " + cinco_01)
    }
}