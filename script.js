// Função que exibe uma mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert('Bem-vindo ao COFFEE SHOPS TIA ROSA!');
};

// Adiciona um efeito de hover para os botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ffb8b1';
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#993441';
        });

        button.addEventListener('click', function() {
            alert('Você clicou em ' + this.textContent);
        });
    });
});
