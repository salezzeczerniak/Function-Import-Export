import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio6() {
    let nota_1 = parseInt(prompt("Digite a primeira nota: "))
    let nota_2 = parseInt(prompt("Digite a segunda nota: "))
    let nota_3 = parseInt(prompt("Digite a terceira nota: "))
    let nota_4 = parseInt(prompt("Digite a quarta nota: "))

    if(nota_1 + nota_2 + nota_3 + nota_4 / 4 >= 7){
    console.log("Aprovado")
    }else if(nota_1 + nota_2 + nota_3 + nota_4 / 4 <= 6){
    console.log("Recuperação")
    }else if(nota_1 + nota_2 + nota_3 + nota_4 / 4 <= 5){
    console.log("Reprovado")
    }
}