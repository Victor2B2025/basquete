
// Função para alternar os detalhes dos times
function toggleDetails(team) {
    const details = document.getElementById(team);
    details.style.display = details.style.display === "block" ? "none" : "block";
}

// Função para abrir as abas interativas de detalhes históricos
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
