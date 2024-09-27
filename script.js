function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todas as abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "active" de todas as abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar o conteúdo da aba atual e marcar a aba como ativa
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}