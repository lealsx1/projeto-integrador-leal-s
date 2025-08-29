document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // pega usuários já cadastrados (se não houver, cria array vazio)
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // verifica se já existe usuário com o mesmo email
  const existe = usuarios.find(user => user.email === email);
  if (existe) {
    alert("Já existe um usuário com esse email!");
    return;
  }

  // adiciona novo usuário
  usuarios.push({ nome, email, senha });

  // salva no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html"; // redireciona para o login
});
