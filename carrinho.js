// Inicializa carrinho no localStorage
if (!localStorage.getItem("carrinho")) {
    localStorage.setItem("carrinho", JSON.stringify([]));
}

// Adicionar item ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));

    let itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${nome} foi adicionado ao carrinho!`);
}

// Listar itens do carrinho
function listarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    let container = document.getElementById("listaCarrinho");
    container.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {
        let subtotal = item.preco * item.quantidade;
        total += subtotal;

        container.innerHTML += `
            <p>${item.nome} - R$${item.preco.toFixed(2)} x ${item.quantidade} = R$${subtotal.toFixed(2)}
            <button onclick="removerItem(${item.id})">Remover</button></p>
        `;
    });

    document.getElementById("totalCarrinho").innerText = "Total: R$ " + total.toFixed(2);
}

// Remover item
function removerItem(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    carrinho = carrinho.filter(item => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    listarCarrinho();
}
