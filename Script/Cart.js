document.addEventListener("DOMContentLoaded", function () {
    var cartIcon = document.getElementById('cartIcon');
    var cart = document.getElementById('cart');
    var closeCart = document.getElementById('closeCart');
    var totalPrice = document.getElementById('totalPrice');
    var cartContent = document.getElementById('cartContent');
    var productsInCart = [];

    function updateTotalPrice() {
        var total = productsInCart.reduce(function (sum, product) {
            return sum + product.price * product.quantity;
        }, 0);
        totalPrice.textContent = 'Total: ' + total.toFixed(2) + ' лв.';
    }

    function addToCart(productName, productPrice, productImage, quantity) {
        var existingProduct = productsInCart.find(function (product) {
            return product.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity += quantity || 1;
            updateProductQuantityInCart(existingProduct);
        } else {
            var product = {
                name: productName,
                price: productPrice,
                quantity: quantity || 1,
                image: productImage
            };
            productsInCart.push(product);

            var productElement = document.createElement('div');
            productElement.classList.add('product-cart');

            var imgElement = document.createElement('img');
            imgElement.src = productImage;
            imgElement.classList.add('product-image-cart');
            productElement.appendChild(imgElement);

            var productInfoElement = document.createElement('div');
            productInfoElement.classList.add('product-info-cart');
            productInfoElement.innerHTML =
                '<strong>' + productName + '</strong> ' + productPrice.toFixed(2) + '</strong> лв.' +
                '<br>Количество: <span class="quantity">' + product.quantity + '</span>' +
                '<span class="removeProduct">&#10006; Премахни</span>';

            productElement.appendChild(productInfoElement);

            cartContent.appendChild(productElement);

            var removeButton = productInfoElement.querySelector('.removeProduct');
            removeButton.addEventListener('click', function () {
                cartContent.removeChild(productElement);
                productsInCart = productsInCart.filter(function (p) {
                    return p.name !== productName;
                });
                updateTotalPrice();
                updateLocalStorage();
            });
        }

        updateTotalPrice();
        updateLocalStorage();
    }

    function updateProductQuantityInCart(product) {
        var productElement = Array.from(cartContent.children).find(function (element) {
            return element.querySelector('.product-info strong').textContent === product.name;
        });

        if (productElement) {
            var quantitySpan = productElement.querySelector('.quantity');
            quantitySpan.textContent = product.quantity;
        }
    }

    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    }

    function clearCart() {
        // Изчистване на съдържанието на количката
        const cartItems = document.getElementById('cartContent');
        cartItems.innerHTML = '';

        // Нулиране на общата цена
        const totalPrice = document.getElementById('totalPrice');
        totalPrice.textContent = 'Total: 0.00 лв.';

        // Изчистване на localStorage
        localStorage.removeItem('cart');

        // Нулиране на масива с продуктите
        productsInCart = [];

        updateLocalStorage();
    }

    cartIcon.addEventListener('click', function () {
        cart.style.right = '0';
    });

    closeCart.addEventListener('click', function () {
        cart.style.right = '-300px';
    });

    // Проверка за запазена количка в localStorage
    var storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        // Проходим през всички продукти в количката и ги добавяме в интерфейса
        storedCart.forEach(function (product) {
            addToCart(product.name, product.price, product.image, product.quantity);
        });
    }

    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', function () {
        // Изчистване на количката и localStorage
        clearCart();
    });



    // Продукт 1
    var cart1Image = document.getElementById('cart1');
    cart1Image.addEventListener('click', function () {
        var productName = 'Мед от Манука';
        var productPrice = 14.00;
        var productImage = 'Image/jar-proba-4.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 2
    var cart2Image = document.getElementById('cart2');
    cart2Image.addEventListener('click', function () {
        var productName = 'Суров пчелен мед';
        var productPrice = 12.00;
        var productImage = 'Image/jar-proba-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 3
    var cart3Image = document.getElementById('cart3');
    cart3Image.addEventListener('click', function () {
        var productName = 'Мед от диви билки <br>';
        var productPrice = 16.00;
        var productImage = 'Image/jar-proba-3.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 4
    var cart4Image = document.getElementById('cart4');
    cart4Image.addEventListener('click', function () {
        var productName = 'Пчелен мед <br>';
        var productPrice = 12.00;
        var productImage = 'Image/jar-proba-1.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 5
    var cart5Image = document.getElementById('cart5');
    cart5Image.addEventListener('click', function () {
        var productName = 'Мед от лавандула <br>';
        var productPrice = 16.00;
        var productImage = 'Image/jar-proba-5.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 6
    var cart6Image = document.getElementById('cart6');
    cart6Image.addEventListener('click', function () {
        var productName = 'Мед с ягоди <br>';
        var productPrice = 18.00;
        var productImage = 'Image/jar-proba-6.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 7
    var cart7Image = document.getElementById('cart7');
    cart7Image.addEventListener('click', function () {
        var productName = 'Липов мед <br>';
        var productPrice = 10.00;
        var productImage = 'Image/jar-proba-7.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 8
    var cart8Image = document.getElementById('cart8');
    cart8Image.addEventListener('click', function () {
        var productName = 'Мед от Акация <br>';
        var productPrice = 16.00;
        var productImage = 'Image/jar-proba-8.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 9
    var cart9Image = document.getElementById('cart9');
    cart9Image.addEventListener('click', function () {
        var productName = 'Мед с орехи<br>';
        var productPrice = 14.00;
        var productImage = 'Image/jar-proba-9.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 10
    var cart10Image = document.getElementById('cart10');
    cart10Image.addEventListener('click', function () {
        var productName = 'Мед с пчелна пита<br>';
        var productPrice = 12.00;
        var productImage = 'Image/jar-proba-10.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 11
    var cart11Image = document.getElementById('cart11');
    cart11Image.addEventListener('click', function () {
        var productName = 'Мед от Рапица<br>';
        var productPrice = 16.00;
        var productImage = 'Image/jar-proba-11.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 12
    var cart12Image = document.getElementById('cart12');
    cart12Image.addEventListener('click', function () {
        var productName = 'Мед от Кориандър<br>';
        var productPrice = 18.00;
        var productImage = 'Image/jar-proba-12.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });


    // Продукт 13
    var cart13Image = document.getElementById('cart13');
    cart13Image.addEventListener('click', function () {
        var productName = 'Пчелен восък<br>';
        var productPrice = 20.00;
        var productImage = 'Image/beeswax-proba.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 14
    var cart14Image = document.getElementById('cart14');
    cart14Image.addEventListener('click', function () {
        var productName = 'Пчелен восък<br>';
        var productPrice = 10.00;
        var productImage = 'Image/beeswax-proba-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 15
    var cart15Image = document.getElementById('cart15');
    cart15Image.addEventListener('click', function () {
        var productName = 'Крем с екстракт от мед<br>';
        var productPrice = 10.00;
        var productImage = 'Image/product-cream-proba.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 16
    var cart16Image = document.getElementById('cart16');
    cart16Image.addEventListener('click', function () {
        var productName = 'Почистващи продукти<br>';
        var productPrice = 24.00;
        var productImage = 'Image/product-cream-proba-2.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 17
    var cart17Image = document.getElementById('cart17');
    cart17Image.addEventListener('click', function () {
        var productName = 'Малък кошер<br>';
        var productPrice = 50.00;
        var productImage = 'Image/bee-small-box.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });

    // Продукт 17
    var cart18Image = document.getElementById('cart18');
    cart18Image.addEventListener('click', function () {
        var productName = 'Голям кошер<br>';
        var productPrice = 150.00;
        var productImage = 'Image/bee-box.png';
        addToCart(productName, productPrice, productImage);
        cart.style.right = '0';
    });
});