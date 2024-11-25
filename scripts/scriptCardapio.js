document.addEventListener('DOMContentLoaded', () => {
    const alergiasContainer = document.getElementById('alergias-container');
    const radioButtons = document.querySelectorAll('input[name="temAlergia"]');
    let alergiaCount = 1;

    // Exibir ou ocultar o container com base na escolha do usuário
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'sim') {
                alergiasContainer.classList.remove('hidden');
            } else if (radio.value === 'nao') {
                alergiasContainer.classList.add('hidden');
                alergiasContainer.innerHTML = ''; // Remove todos os campos de alergias
                addAlergiaField(); // Adiciona o campo inicial
            }
        });
    });

    // Função para adicionar um novo campo de alergia
    const addAlergiaField = () => {
        alergiaCount++;
        const alergiaItem = document.createElement('div');
        alergiaItem.classList.add('alergia-item');
        alergiaItem.innerHTML = `
            <label for="alergias-${alergiaCount}">Descreva:</label>
            <input type="text" id="alergias-${alergiaCount}" name="alergias[]" placeholder="Digite aqui..." />
            <button type="button" class="add-alergia">Adicionar</button>
        `;
        alergiasContainer.appendChild(alergiaItem);

        // Adiciona funcionalidade ao botão "Adicionar"
        alergiaItem.querySelector('.add-alergia').addEventListener('click', addAlergiaField);
    };

    // Adiciona o campo inicial de alergia

});


// Seleciona o container onde os campos serão gerados
const listaAlimentos = document.getElementById("listaAlimentos");

// Gera dinamicamente os campos de entrada
for (let i = 0; i < 10; i++) {
    // Cria um rótulo
    const label = document.createElement("label");
    label.setAttribute("for", `alimento${i}`);
    label.textContent = `Alimento ${i + 1}:`;
    label.classList.add("hidden"); // Esconde inicialmente

    // Cria o campo de entrada
    const input = document.createElement("input");
    input.type = "text";
    input.id = `alimento${i}`;
    input.name = "alimento";
    input.placeholder = "Digite aqui o nome do alimento";
    input.required = i < 5; // Apenas os 5 primeiros são obrigatórios
    input.classList.add("hidden"); // Esconde inicialmente

    // Adiciona o evento para exibir o próximo campo
    input.addEventListener("input", () => {
        if (input.value.trim() !== "" && i < 9) {
            const nextLabel = listaAlimentos.children[(i + 1) * 2];  // Próximo label
            const nextInput = listaAlimentos.children[(i + 1) * 2 + 1];  // Próximo input
            
            if (nextLabel && nextInput) {
                nextLabel.classList.remove("hidden"); // Mostra o próximo título
                nextInput.classList.remove("hidden"); // Mostra o próximo campo de entrada
            }
        }
    });

    // Adiciona os elementos ao container
    listaAlimentos.appendChild(label);
    listaAlimentos.appendChild(input);

    // Exibe o primeiro campo imediatamente
    if (i === 0) {
        label.classList.remove("hidden");
        input.classList.remove("hidden");
    }
}
