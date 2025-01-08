from flask import Flask, request, render_template, redirect, url_for
import json
from datetime import datetime

app = Flask(__name__, static_folder='public', template_folder='public')

ORDERS_FILE = 'orders.json'

# Головна сторінка - форма замовлення (CheckoutPage)
@app.route('/')
def index():
    return render_template('cabinet/CheckoutPage.html')

# Обробка замовлення (отримуємо дані з форми)
@app.route('/submit-order', methods=['POST'])
def submit_order():
    full_name = request.form['fullName']
    phone = request.form['phone']
    city = request.form['city']
    delivery_method = request.form['deliveryMethod']
    street = request.form['street']
    building = request.form.get('building', '')
    apartment = request.form.get('apartment', '')
    payment_method = request.form['paymentMethod']

    order = {
        'fullName': full_name,
        'phone': phone,
        'city': city,
        'deliveryMethod': delivery_method,
        'address': f"{street}, {building}, {apartment}",
        'paymentMethod': payment_method,
        'createdAt': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }

    save_order(order)
    return redirect('/admin')

# Збереження замовлень у файл orders.json
def save_order(order):
    try:
        with open(ORDERS_FILE, 'r') as file:
            orders = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        orders = []

    orders.append(order)

    with open(ORDERS_FILE, 'w') as file:
        json.dump(orders, file, indent=4)

# Сторінка з замовленнями (адмін панель)
@app.route('/admin')
def admin():
    try:
        with open(ORDERS_FILE, 'r') as file:
            orders = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        orders = []

    return render_template('cabinet/admin.html', orders=orders)

if __name__ == '__main__':
    app.run(debug=True)
