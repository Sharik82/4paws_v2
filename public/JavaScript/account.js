function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        greetingElement.textContent = 'Доброго ранку!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.textContent = 'Доброго дня!';
    } else if (currentHour >= 18 && currentHour < 24) {
        greetingElement.textContent = 'Доброго вечора!';
    } else {
        greetingElement.textContent = 'Доброї ночі!';
    }
}

// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    displayGreeting();
};
// Знаходимо кнопку "Налаштування" та панель
const settingsLink = document.getElementById('settings-link');
const settingsPanel = document.getElementById('settings-panel');

// Функція для відкриття/закриття панелі
function openSettingsPanel() {
    // Якщо панель вже відкрита, закриваємо її
    if (settingsPanel.classList.contains('visible')) {
        settingsPanel.classList.remove('visible');
        settingsPanel.classList.add('hidden');
    } else {
        // Якщо панель закрита, відкриваємо її
        settingsPanel.classList.remove('hidden');
        settingsPanel.classList.add('visible');
    }
}

// Додаємо подію до кнопки
settingsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Запобігаємо стандартній дії кнопки
    openSettingsPanel();    // Відкриваємо панель
});
