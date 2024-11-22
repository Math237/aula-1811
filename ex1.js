/*
Elabore um programa que contenha uma lista de produtos:
	1 - Hamburguer - R$ 10
	2 - X-Salada - R$ 15
	3 - X-Bacon - R$ 20
	
	Solicite um código de produto, percorra a lista e exiba seus dados
*/

var menu  = [
    {codigo: 1, nome: "Hamburger", preco: 10},
    {codigo: 2, nome: "X-Salada", preco: 15},
    {codigo: 3, nome: "X-Bacon", preco: 20},
];

console.log("Código | Nome             | Valor");
for (var i = 0; i < menu.length; i++ ){
    console.log( menu[i].codigo, "  |", menu[i].nome, "   |", menu[i].preco );
}
var codigo = parseInt(prompt("Escolha o código de um lanche:"));
var achou = false;
for(var i = 0; i < menu.length; i++){
if (codigo == menu[i].codigo){
console.log("\n\n ==== Escolhido foi: ====");
console.log(menu[i].codigo, "   |", menu[i].nome, "    |", menu[i].preco );
achou = true
}

}

if(achou == false){
    console.error("\n\n ==== Produto não encontrado!!! ====");
}