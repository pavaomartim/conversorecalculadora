var mensagem1 = "";
var mensagem2 = "";
var msgerro = "";

var escolha = prompt("você quer usar o conversor ou a calculadora?")

if (escolha == "conversor") {
  var dinheiro = prompt("digite um valor em reais: ");
  var moeda = prompt("digite uma moeda para converter: dólar, euro ou libras");
  var resultdolar = (dinheiro / 5.49).toFixed(2);
  var resulteuro = (dinheiro / 6.02).toFixed(2);
  var resultlibras = (dinheiro / 7.05).toFixed(2);

  switch (moeda) {
    case "dólar":
    case "dolar":
      mensagem1 = "o valor R$" + dinheiro + " na cotação atual, em dólares é " + resultdolar + "\n obs: cotação do dia 15/08/24 às 17:22";
    break;
    
    case "euro":
      mensagem1 = "o valor R$" + dinheiro + " na cotação atual, em euros é " + resulteuro + "\n obs: cotação do dia 15/08/24 às 17:22";
    break;
    
    case "libras":
      mensagem1 = "o valor R$" + dinheiro + " na cotação atual, em libras é " + resultlibras + "\n obs: cotação do dia 15/08/24 às 17:22";
    break;
    
    default:
      mensagem1 = "você não selecionou nenhuma das moedas";
    break;
  }
} else if (escolha == "calculadora") {
  var n1 = parseFloat(prompt("digite um valor"));
  var n2 = parseFloat(prompt("digite outro valor"));
  var op = prompt("escolha uma operação:  soma, subtração, multiplicação, divisão");
  
  switch (op) {
    case "soma":
      mensagem2 = "o resultado é " + (parseFloat(n1) + parseFloat(n2));
      break;
    
    case "subtração":
    case "subtraçao":
    case "subtracao":
      mensagem2 = "o resultado é " + (parseFloat(n1) - parseFloat(n2));
      break;

    case "multiplicação":
    case "multiplicaçao":
    case "multiplicacao":
      mensagem2 = "o resultado é " + (parseFloat(n1) * parseFloat(n2));
      break;

    case "divisão":
    case "divisao":
      mensagem2 = "o resultado é " + (parseFloat(n1) / parseFloat(n2));
      break;

    default:
      mensagem2 = "operação inválida"
      break;
  }
} else {
  msgerro = ("erro! selecione o conversor ou a calculadora e recarregue a página.")
}

document.getElementById("result1").innerHTML = mensagem1;
document.getElementById("result2").innerHTML = mensagem2;
document.getElementById("msgerro").innerHTML = msgerro;

if (mensagem1) {
    document.getElementById("result1").classList.add("mostrar-borda1");
  } else if (mensagem2) {
    document.getElementById("result2").classList.add("mostrar-borda1");
  } else {
    document.getElementById("msgerro").setAttribute("id", "mostrar-borda2");
  }