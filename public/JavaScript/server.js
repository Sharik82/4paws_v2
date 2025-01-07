const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Ініціалізація додатку
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://localhost:27017/petshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Створення схеми та моделі карток
const cardSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);

// Роут 
app.post('/add-card', async (req, res) => {
    try {
        const { cardNumber, expiryDate, cvv } = req.body;

        // Перевірка на наявність всіх полів
        if (!cardNumber || !expiryDate || !cvv) {
            return res.status(400).json({ message: 'Всі поля обов\'язкові.' });
        }

        // Збереження картки в базі
        const card = new Card({ cardNumber, expiryDate, cvv });
        await card.save();

        res.status(201).json({ message: 'Картку додано успішно.', card });
    } catch (error) {
        res.status(500).json({ message: 'Сталася помилка.', error });
    }
});

// Роут для отримання всіх карток
app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Сталася помилка.', error });
    }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});
