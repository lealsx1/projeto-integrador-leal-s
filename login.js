document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // procura usuário
  const usuario = usuarios.find(user => user.email === email && user.senha === senha);

  if (usuario) {
    alert("Login realizado com sucesso!");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario)); // guarda quem está logado
    window.location.href = "index.html"; // redireciona para página principal
  } else {
    alert("Email ou senha incorretos!");
  }
});
