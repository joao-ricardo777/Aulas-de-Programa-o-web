// 1. Capturando o formulário pelo ID
const formulario = document.getElementById("cadastro");

// 2. Capturando o elemento onde os dados serão exibidos
const resultado = document.getElementById("elementos");

// 3. Criando o evento de envio do formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturando os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const nascimento = document.getElementById("nascimento").value;
  const telefone = document.getElementById("telefone").value;

  // Exibindo os dados na página
  resultado.innerHTML = `
    <h3>Dados do cadastro:</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Data de nascimento:</strong> ${nascimento}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
  `;
});
