document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o envio padrão do formulário [3]

        let isValid = true;

        // Validação do nome de usuário
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'O nome de usuário é obrigatório.');
            isValid = false;
        } else {
            clearError(usernameInput);
        }

        // Validação da senha
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'A senha é obrigatória.');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, 'A senha deve ter pelo menos 6 caracteres.');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (isValid) {
            // Se tudo estiver correto, você pode enviar os dados para um servidor aqui
            // ou redirecionar o usuário.
            alert('Login realizado com sucesso!');
            form.reset();
        }
    });

    function showError(input, message) {
        const inputGroup = input.parentElement;
        // Remove a mensagem de erro antiga, se houver
        const oldError = inputGroup.querySelector('.error-message');
        if (oldError) {
            oldError.remove();
        }

        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.style.fontSize = '0.8rem';
        error.style.marginTop = '5px';
        error.innerText = message;
        inputGroup.appendChild(error);
    }

    function clearError(input) {
        const inputGroup = input.parentElement;
        const error = inputGroup.querySelector('.error-message');
        if (error) {
            error.remove();
        }
    }
});