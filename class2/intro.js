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


//Filtrar as informações
const carros = [
    {modelo:"Corolla", preco:120000, ano:2024,flex:true},
    {modelo:"Civic", preco:170000, ano:2023,flex:false},
    {modelo:"Tiguan", preco:80000, ano:2022,flex:true},
    {modelo:"Fusca", preco:45000, ano:1890,flex:false},
]

//Filtrando 
console.log(carros.filter((l)=>{
    return l.flex && l.preco>100000
}))

//Criando uma arrow function que recebe dois número como parametros e retorne o produto desse número
const multi = (num1,num2)=> {return num1*num2}
console.log(multi(4,5))

//Crie uma função que recebe 2 número e retorne a soma, subtração, multiplicação e divisão em um objeto
function resultados(num1,num2){
    return {
        Soma: num1 + num2,
        Subtracao: num1 - num2,
        Multiplicaco: num1 * num2,
        Divisao: num1 / num2
    }
}
console.log(resultados(4,2))

const pessoas = [
{nome:"João",idade:25,profissao:"Desenvolvedor(a)"},
{nome:"Maria",idade:17,profissao:"Designer"},
{nome:"Carlos",idade:17,profissao:"Desenvolvedor(a)"},
{nome:"Ana",idade:22,profissao:"Desenvolvedor(a)"}
]



function verificarDev(lista){
    return pessoas.filter(({idade,profissao}) =>{
        return idade >= 18 && profissao == "Desenvolvedor(a)"
    })
}

console.log(verificarDev(pessoas))