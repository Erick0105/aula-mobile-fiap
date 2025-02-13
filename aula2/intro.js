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
console.log(s,i, logra)

//concat
const alunos = ["Miguel", "Pablo", "Abner", "Caio"]
const alunas = ["Beatriz", "Pamela"]

//Incluindo na array | Push
alunos.push("Pedro")


// deletando o ultimo item da array | Pop
alunos.pop()

// deletando o primeiro item da array | Shift 
alunos.shift()

// Deletando e adicionando | Splice
alunos.splice(1,2,"João", "Francisco","Erick")

const todos = alunos.concat(alunas)

// Ordernas as informações | Sort
todos.sort()

console.log(todos)

//Percorrendo a Array
todos.forEach((nome,indice)=>{
    console.log(nome,indice)
})