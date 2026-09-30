const form = document.querySelector("form");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.getElementById("nome").value;
  mensagem.textContent = "Obrigado, " + nome + "! Recebemos o seu cadastro.";
  mensagem.focus();
  form.reset();
});
