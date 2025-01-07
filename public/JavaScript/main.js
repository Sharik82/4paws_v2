// Отримуємо елементи кнопок
const buyButtons = document.querySelectorAll('.buy-btn');
const detailsButtons = document.querySelectorAll('.details-btn');

// Функція для обробки натисків кнопок "Купити"
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар додано до кошика!'); // Тут можна реалізувати логіку додавання в кошик
    });
});

// Функція для обробки натисків кнопок "Детальніше"
detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Перехід на сторінку з деталями товару'); // Тут можна реалізувати логіку переходу на деталі товару
    });
});

// Логіка для каруселі
const prevButtons = document.querySelectorAll('.prev-btn');
const nextButtons = document.querySelectorAll('.next-btn');

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.nextElementSibling;
        const firstProduct = carousel.firstElementChild;
        carousel.appendChild(firstProduct); // Переміщуємо перший елемент в кінець
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.previousElementSibling;
        const lastProduct = carousel.lastElementChild;
        carousel.insertBefore(lastProduct, carousel.firstElementChild); // Переміщуємо останній елемент на початок
    });
});

document.getElementById('toggle-brands-btn').addEventListener('click', function() {
    const hiddenBrands = document.querySelector('.hidden-brands');
    const toggleButton = document.getElementById('toggle-brands-btn');
    
    if (hiddenBrands.style.display === "none") {
        hiddenBrands.style.display = "flex"; // Показати додаткові бренди
        toggleButton.textContent = "Згорнути"; // Змінити текст кнопки
    } else {
        hiddenBrands.style.display = "none"; // Сховати додаткові бренди
        toggleButton.textContent = "Розгорнути"; // Змінити текст кнопки назад
    }
});

// Обробка кліків по картинках для перенаправлення на сторінки брендів
document.querySelectorAll('.brand-item img').forEach(function(item) {
    item.addEventListener('click', function() {
        const brandName = item.alt; // Отримуємо назву бренду з атрибуту alt
        window.location.href = `brand_page_${brandName}.html`; // Перенаправлення на сторінку бренду
    });
});




let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Змінюється кожні 3 секунди
}









document.getElementById("nutritionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let weight = document.getElementById("weight").value; // Отримуємо значення ваги
    let activity = document.getElementById("activity").value; // Отримуємо значення рівня активності
    let dailyPortion;

    // Розрахунок добової норми залежно від рівня активності
    if (activity === "low") {
        dailyPortion = weight * 30; // Множимо вагу на 30 для низького рівня активності
    } else if (activity === "medium") {
        dailyPortion = weight * 40; // Множимо вагу на 40 для середнього рівня активності
    } else {
        dailyPortion = weight * 50; // Множимо вагу на 50 для високого рівня активності
    }

    // Виводимо результат
    document.getElementById("result").innerText = `Добова норма: ${dailyPortion} г.`;
});




// Отримуємо посилання на поле вводу та кнопку
const searchInput = document.querySelector('.search-container input[type="text"]');
const searchButton = document.querySelector('.search-container button');

// Додаємо обробник події для кнопки
searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase(); // Отримуємо текст з поля вводу
    const products = document.querySelectorAll('.product-card'); // Отримуємо всі товари

    products.forEach(product => {
        const productName = product.querySelector('p').innerText.toLowerCase(); // Отримуємо назву товару
        
        // Видаляємо клас підсвічування з усіх товарів
        product.classList.remove('highlight'); 
        
        if (productName.includes(query)) {
            product.classList.add('highlight'); // Додаємо клас підсвічування до знайденого товару
            product.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Прокручуємо до товару
        }
    });
});

// Додаємо обробник події для натискання клавіші
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchButton.click(); // Імітуємо клік на кнопку
    }
});
