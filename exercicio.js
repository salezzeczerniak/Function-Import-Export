import PromptSync from "prompt-sync";
let prompt = PromptSync()

import { exercicio1 } from "./Ex1.js";
import { exercicio2 } from "./Ex2.js";
import { exercicio3 } from "./Ex3.js";
import { exercicio4 } from "./Ex4.js";
import { exercicio5 } from "./Ex5.js";
import { exercicio6 } from "./Ex6.js";

//Fazer um menu de exercícios utilizando exemplos dado em aula 
//(6 exercícios dentro de funções, e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)


//para declarar a variavel da condição do while é preciso ser criado fora 

let resposta;

do {
    console.log("Bem vindo ao menu de exercicios!");
    resposta = prompt("Digite um numero de 1 à 6, para escolher um exercicio : ");
    switch (resposta) {
        case "1":
            //Chamar o exercicio 1
            console.log("Voce escolheu o exercicio 1");
            exercicio1()
            break;
        case "2":
            //Chamar o exercicio 2
            console.log("Voce escolheu o exercicio 2");
            exercicio2()
            break;
        case "3":
            //Chamar o exercicio 3
            console.log("Voce escolheu o exercicio 3");
            exercicio3()
            break;
        case "4":
            //Chamar o exercicio 4
            console.log("Voce escolheu o exercicio 4");
            exercicio4()
            break;
        case "5":
            //Chamar o exercicio 5
            console.log("Voce escolheu o exercicio 5");
            exercicio5()
            break;
        case "6":
            //Chamar o exercicio 6
            console.log("Voce escolheu o exercicio 6");
            exercicio6()
            break;
        default:
            console.log("Voce não escolheu nenhum exercicio!")
            break;
    }

} while (resposta != "sair");