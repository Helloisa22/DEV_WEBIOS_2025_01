// "A" // Caracter
// "Ola" // Texto - String

var texto1 = "Olá IOS"
//            0 1 2 3 4 5 6

var resultado1 = texto1.charAt(4) // Acessar caracter
console.log(resultado1)
var resultado2 = texto1[1] // Acessar caracter
console.log(resultado2)

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

console.log(lorem.length)
// console.log(lorem.length >= 245)

var texto2 = "OLÁ TEC DE TECNOLOGIA"
var texto3 = "olá, meu nome e ia, seu amigo"

//Formato 1
var resultado3 = texto2.toLowerCase()
console.log(resultado3)
//Formato 2
console.log(texto3.toUpperCase())




var texto4 = 'Mozilla'
// oz         0 1 2 3 4 5 6
console.log(texto4.substring(1, 3))

console.log(texto4.substring(1))


var texto5 = 'Bem vindo a Microsoft'
let novaMensagem = texto5.replace('Microsoft', 'IOS')
console.log(novaMensagem)
