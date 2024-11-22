/*
	Elabore um progra de cadastro de bebidas com código, nome epreco;
	Ao final, percorra a lista e exiba os dados.
*/
var menu  = [
    {codigo: 1, nome: "Agua ",preco: 10},
    {codigo: 2, nome: "Coca",preco: 13},
    {codigo: 3, nome: "Fanta",preco: 9},
];

console.log("Código | Nome             |valor");
for (var i = 0; i < menu.length; i++ ){
    console.log( menu[i].codigo, "  |", menu[i].nome, "   |", menu[i].preco );
}
var codigo = parseInt(prompt("Escolha o código de uma bebida:"));
var achou = false;
for(var i = 0; i < menu.length; i++){
if (codigo == menu[i].codigo){
console.log("\n\n ==== Escolhido foi: ====");
console.log(menu[i].codigo, "   |", menu[i].nome, "    |",menu[i].preco );
achou = true
}

}

if(achou == false){
    console.error("\n\n ==== Produto não encontrado!!! ====");
}