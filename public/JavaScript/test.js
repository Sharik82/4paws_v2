document.getElementById('priceRange').addEventListener('input', function() {
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = this.value;

    filterProducts();
});

document.getElementById('brandFilter').addEventListener('change', function() {
    filterProducts();
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

function filterProducts() {
    const selectedBrand = document.getElementById('brandFilter').value;
    const maxPrice = document.getElementById('priceRange').value;
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productBrand = product.getAttribute('data-brand');
        const productPrice = product.getAttribute('data-price');
        const productCategory = product.getAttribute('data-category');

        const isBrandMatch = selectedBrand === 'all' || productBrand === selectedBrand;
        const isPriceMatch = productPrice <= maxPrice;
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);

        if (isBrandMatch && isPriceMatch && isCategoryMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
