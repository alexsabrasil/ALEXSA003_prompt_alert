// Função da calculadora
function calcularValorPorCliente() {
    var valorConta = parseFloat(document.getElementById("valorConta").value);
    var quantidadeClientes = parseFloat(document.getElementById("quantidadeClientes").value);
    
    if (isNaN(valorConta) || isNaN(quantidadeClientes) || valorConta < 0 || quantidadeClientes < 1) {
        alert("Por favor, insira um valor válido para a conta e a quantidade de clientes.");
        return;
    }

    var taxaGarcom = (valorConta * 0.10); // Calcula a taxa do garçom (10%)
    var totalComTaxa = valorConta + taxaGarcom;
    var valorPorCliente = totalComTaxa / quantidadeClientes;

    document.getElementById("resultado").innerText = "Cada cliente deve pagar: R$" + valorPorCliente.toFixed(2);
}


function limparCampos() {
    // Função para limpar os campos
    document.getElementById("valorConta").value = "";
    document.getElementById("quantidadeClientes").value = "";
    document.getElementById("resultado").innerText = "";
}