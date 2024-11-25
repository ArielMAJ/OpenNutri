document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem.";
        event.preventDefault(); // Impede o envio do formulário
    } else {
        errorMessage.textContent = ""; // Limpa a mensagem de erro
    }
});