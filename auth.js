// auth.js
document.addEventListener("DOMContentLoaded", () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar esta página!");
    window.location.href = "login.html";
  } else {
    // Se quiser mostrar o nome do usuário em todas as páginas
    const userInfo = document.createElement("div");
    userInfo.innerHTML = `<p>Bem-vindo, <strong>${usuarioLogado.nome}</strong>!</p>`;
    userInfo.style.position = "fixed";
    userInfo.style.top = "10px";
    userInfo.style.right = "10px";
    userInfo.style.background = "#f1f1f1";
    userInfo.style.padding = "8px 12px";
    userInfo.style.borderRadius = "8px";
    userInfo.style.fontFamily = "Arial, sans-serif";
    document.body.appendChild(userInfo);
  }
});
