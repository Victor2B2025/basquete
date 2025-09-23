// Função para exibir detalhes de cada time
function exibirDetalhes(time) {
    const detalhes = document.getElementById(time);
    detalhes.innerHTML = `<p>Essas são informações adicionais sobre o ${time.charAt(0).toUpperCase() + time.slice(1)}.</p>`;
    detalhes.style.display = detalhes.style.display === "none" || detalhes.style.display === "" ? "block" : "none";
}

// Função para abrir as abas de detalhes do pódio
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    const tabLinks = document.querySelectorAll('.tablink');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
