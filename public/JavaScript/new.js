$(document).ready(function() {
    // Пошук товарів
    $('#search').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        $('.product').each(function() {
            var productName = $(this).data('name').toLowerCase();
            if (productName.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Додавання до корзини
    $('.add-to-cart').on('click', function() {
        alert('Товар додано до корзини!');
    });

    // Анімації при наведенні на товар
    $('.product').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});