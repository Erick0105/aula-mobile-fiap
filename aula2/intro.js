var x = 3 

// ternary Operator
//  condicao ? valor se verdadeiro : valor se falso

const resultado = x%2==0 ? "Número é par" : "Número é impar"
console.log(resultado)


// num>0 Positivo
// num<0 Negativo
// num==0 Zero

var num = 15

const estado = num==0?"Zero": num>0 ? "Positivo":"Negativo"
console.log(estado)

// Destructuring
const pessoa={
    nome:"Felipe",
    sobrenome:"Souza",
    idade:25,
    peso:78,
    endereco:{
        logradouro:"Aven. Paulista",
        numero: 5000
    }
}
// identifiers
const {sobrenome : s, idade: i, endereco:{logradouro:logra}}=pessoa
console.log(s,i, logradouro)

