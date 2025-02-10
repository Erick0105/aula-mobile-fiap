function soma(num1, num2){
    return num1 + num2
}

console.log("soma ", soma(3,4))

// Função anonima
// (function(a,b) {
//     console.log(a-b);
// })
// (10,5)

// Function Expression
const multi = function(f,g){
    return f * g
}

let resultado = multi(3,3)
console.log("multiplicação ", resultado)

const teste = function(){
    console.log("ola")
}
teste()

//arrow function
let triplo = (a)=>{
    return a *3
}
console.log("triplo ", triplo(7))

// Função em uma linha
let dobro = (a) => a*2
console.log("dobro " , dobro(8))

//rest 
const somando = (...numeros) => {
    let aux = 0;
    for (i of numeros){
        aux +=1
    }
    return aux
}
console.log("Rest", somando(3,4,5,7,11,12,14))


//sintax de espalhamento/SPREAD
const numeros = [1,2,3,4,5,6]
console.log("Espalhamento/Spread", somando(...numeros))

//Mini desafio - Construa 4 funções para cada operação matematica com apenas 1 linha cada

let opSoma = (a,b) => a + b
let opSubtracao = (a,b) => a - b
let opMultiplicacao = (a,b) => a * b
let opDivisao = (a,b) => a / b

console.log("Soma: ", opSoma(2,3))
console.log("Subtração: ", opSubtracao(10,7))
console.log("Multiplicação: ", opMultiplicacao(4,5))
console.log("Divisão: ", opDivisao(10,2))

