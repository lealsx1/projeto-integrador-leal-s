function calcularFrete(cep) {
    // Simulação simples: CEPs mais "distantes" custam mais
    if (cep.startsWith("0")) return 10;  
    if (cep.startsWith("2")) return 20;  
    return 30;
}

function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (!carrinho || carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let cep = document.getElementById("cep").value;
    let frete = calcularFrete(cep);

    let totalProdutos = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    let totalFinal = totalProdutos + frete;

    document.getElementById("resumoPagamento").innerHTML = `
        <p>Total dos produtos: R$${totalProdutos.toFixed(2)}</p>
        <p>Frete: R$${frete.toFixed(2)}</p>
        <h3>Total a pagar: R$${totalFinal.toFixed(2)}</h3>
        <button onclick="confirmarPagamento()">Confirmar Pagamento</button>
    `;
}

function confirmarPagamento() {
    alert("✅ Pagamento confirmado! Obrigado pela compra.");
    localStorage.setItem("carrinho", JSON.stringify([])); // limpa carrinho
    window.location.href = "index.html"; // volta para home
}