document.addEventListener("DOMContentLoaded", function() {
  // Função para mostrar conteúdo das abas
  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("main section");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // Pega o id do destino
      sections.forEach(section => {
        section.style.display = "none"; // Esconde todas as seções
      });
      document.getElementById(targetId).style.display = "block"; // Exibe a seção clicada
    });
  });

  // Torna a primeira seção visível
  sections[0].style.display = "block";
});
