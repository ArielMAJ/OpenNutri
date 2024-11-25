// script.js
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Obtém os dados do formulário
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const genero = document.getElementById("genero").value;
    const atividade = document.getElementById("atividade").value;

    // Verifica se todos os campos estão preenchidos
    if (idade && peso && altura && genero && atividade) {
        // Exibe os dados do usuário
        const resultado = `
            Usuário cadastrado com sucesso! <br>
            <strong>Idade:</strong> ${idade} anos<br>
            <strong>Peso:</strong> ${peso} kg<br>
            <strong>Altura:</strong> ${altura} cm<br>
            <strong>Gênero:</strong> ${genero}<br>
            <strong>Atividade Física:</strong> ${atividade}<br>
        `;
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});
