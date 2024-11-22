/*

Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega.
*/
var codigo = [];

var menu  = [
    {codigo: 1, nome: "Hamburger", preco: 10},
    {codigo: 2, nome: "X-Salada", preco: 15},
    {codigo: 3, nome: "X-Bacon", preco: 20},
];

console.log("Código | Nome             | Valor");
for (var i = 0; i < menu.length; i++ ){
    console.log( menu[i].codigo, "  |", menu[i].nome, "   |", menu[i].preco,  "  |", menu[i].quantidade );
}
var condicao = 'sim';
while (condicao == 'sim'){
var codigo = parseInt(prompt("Escolha o código de um lanche:"));
var quantidade = parseInt(prompt("Quantos lanches deseja pedir?"))

condicao = prompt("Deseja adicionar outro lanche? Se desejar digite sim:")

}



var achou = false;
for(var i = 0; i < menu.length; i++){
if (codigo == menu[i].codigo){
console.log("\n\n ==== Escolhido foi: ====");
console.log(menu[i].codigo, "   |", menu[i].nome, "    |", menu[i].preco, "  | ", menu[i].quantidade  );
achou = true
}

}

if(achou == false){
    console.error("\n\n ==== Produto não encontrado!!! ====");
}







var menubebidas  = [
    {codigo: 1, nome: "Agua ",preco: 10},
    {codigo: 2, nome: "Coca",preco: 13},
    {codigo: 3, nome: "Fanta",preco: 9},
];

console.log("Código | Nome             |valor");
for (var i = 0; i < menubebidas.length; i++ ){
    console.log( menubebidas[i].codigo, "  |", menubebidas[i].nome, "   |", menubebidas[i].preco );
}






var condicao1 = 'sim';
while (condicao1 == 'sim'){
    var codigo = parseInt(prompt("Deseja adicionar alguma bebida? caso o queira digite o código da bebida:"));

    var quantidade = parseInt(prompt("Quantos bebidas deseja pedir?"))

condicao1 = prompt("Deseja adicionar outro bebida? Se desejar digite sim:")

}


var achou = false;
for(var i = 0; i < menubebidas.length; i++){
if (codigo == menubebidas[i].codigo){
console.log("\n\n ==== Escolhido foi: ====");
console.log(menubebidas[i].codigo, "   |", menubebidas[i].nome, "    |",menubebidas[i].preco );
achou = true
}

}

if(achou == false){
    console.error("\n\n ==== Produto não encontrado!!! ====");
}


var i = 0

console.log("==== Total de Lanches ====")
while (i < codigo.length) {
    console.log(codigo[i].nome );  // Imprime o valor do array no índice i
    i++;  

}