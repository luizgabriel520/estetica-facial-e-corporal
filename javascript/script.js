// Abre o modal Bem Vindo quando a página carrega
window.onload = function() {
    document.getElementById('welcomeModal').style.display = 'block';
};

// Fecha o modal Bem Vindo
function closeWelcomeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}
