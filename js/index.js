document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.getElementById('welcomeSection');
    const startButton = document.getElementById('startButton');
    const nameInputSection = document.getElementById('nameInputSection');
    const nameInput = document.getElementById('nameInput');
    const nameSubmitButton = document.getElementById('nameSubmitButton');
    const gameSection = document.getElementById('gameSection');
    const gameMessage = document.getElementById('gameMessage');

    startButton.addEventListener('click', () => {
        welcomeSection.classList.add('hidden');
        nameInputSection.classList.remove('hidden');
    });

    nameSubmitButton.addEventListener('click', () => {
        const username = nameInput.value.trim();
        if (username === '') {
            return;
        }
        sessionStorage.setItem('username', username);
        nameInputSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
        gameMessage.textContent = `muy bien ${username}, toca el sigt boton para jugar`;
    });      
});
