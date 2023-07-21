import PromptSync from "prompt-sync";
let prompt = PromptSync()

export function exercicio2() {
    let recebiveis = prompt("Qual é o seu salario?")

    if(recebiveis < 500){
    console.log('O seu salario sera reajustado para ', recebiveis * 1.3);
    }else{
    console.log("Infelizmente voce nao tera direito ao reajuste salarial")
}
}