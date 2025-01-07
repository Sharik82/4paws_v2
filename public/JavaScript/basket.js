const checkoutBtn = document.querySelector('.checkout-btn');
const modal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const paymentSelect = document.getElementById('payment');
const savedCards = document.getElementById('savedCards');
const newCard = document.getElementById('newCard');
const successMessage = document.getElementById('successMessage');

// Відкрити модальне вікно при натисканні на кнопку "Оформити замовлення"
checkoutBtn.onclick = function() {
    modal.style.display = 'block';
}

// Закрити модальне вікно при натисканні на 'x'
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Закрити модальне вікно при натисканні поза його контентом
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Показати меню для збережених карток або нову картку
paymentSelect.onchange = function() {
    if (paymentSelect.value === 'card') {
        savedCards.style.display = 'block';
        newCard.style.display = 'none';
    } else {
        savedCards.style.display = 'none';
        newCard.style.display = 'none';
    }
}

// Додати нову картку
document.getElementById('addNewCard').onclick = function() {
    newCard.style.display = 'block';
}

// Обробка форми
document.getElementById('checkoutForm').onsubmit = function(event) {
    event.preventDefault(); // Запобігти перезавантаженню сторінки
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    
    // Тут може бути логіка для верифікації картки

    // Відобразити повідомлення про успішне замовлення
    successMessage.style.display = 'block';
    modal.style.display = 'none'; // Закрити модальне вікно
}
