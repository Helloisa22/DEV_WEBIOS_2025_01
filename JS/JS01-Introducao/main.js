var idade
const ano = 2010
// JavaScript
console.log("Hello world") // apresentar uma mensagem
console.clear() // limpar

// Variaveis
var numero1 = 192 // inicializar uma variavel
console.log(numero1)

var num1 = 4
var num2 = 4
var resultado = num1 + num2
console.log(resultado)

idade = 89 // iniciar a variavel em outra parte do codigo
console.log(idade)

//ano = 1936
const PI = 3.14

// Textos - Strings
let nome = 'Matheus Araujo'
const nome2 = "Matheus Vinicius"
var nome3 = "12365.4789" // texto
console.log(nome, nome2, nome3)  // Concatenar

console.log("Olá", "papai") // Concatenar 1
console.log("Aluno " + nome + "e Aluno " + nome2 + 'Tem um total de ' + nome3 + " dinheiros") // Concatenar 2

// Template String
console.log(`Aluno ${nome} e Aluno ${nome2} Tem um total de ${nome3} dinheiros`) // Concatenar 3

//VAR // Flexivel e com menos regras (Posso alterar o valor inicial de uma var e recriar a mesma em outras partes do codigo)

//LET // Você não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial

//CONST // Você não pode recriar a mesma em outras partes do cogido e não pode alterar o valor inicial dela garantindo a confiança do dado que está sendo utilizado no decorrer do seu codigo

console.log(10 / 0)
console.log(-6 / 0)

// Operadores aritméticos
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)
console.log(5 / 2 ** (2 + 3))

// Operadores relacionais
console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23)
console.log('Ana' == 'ana')
console.log(true == false)
console.log(true === 'true') // boolean e o outro e txt > String
console.log(true != 'false') // true

let temCamisa = false
let temCracha = false
console.log(temCamisa)
console.log(temCracha)
console.log(!(temCamisa == true && temCracha == true))  //    false          ==    false = false
console.log(temCamisa == true || temCracha == true)//       false      ou      true = true


