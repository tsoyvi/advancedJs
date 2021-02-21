'use strict';

const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
];



// В жизни бы не догадался что нужно добавить в разметку картинку.
// в задании про картинку не слова...

const renderProduct = (title, price, img = 'https://placehold.it/200x150') => {
    return `<div class="product-item">
                <img src="${img}" alt = "Some img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
}



const renderProducts = (list = [] ) => {
    const productList = list.forEach(element => {
        // document.querySelector('.products').innerHTML += renderProduct(element.title, element.price); // не знал что innerHTML работает медленней чем insertAdjacentHTML
        // теперь буду стараться юзать insertAdjacentHTML
        document.querySelector('.products').insertAdjacentHTML("beforeend", renderProduct(element.title, element.price));
    });
}



renderProducts(products);

//renderProducts(); // проверка если ни чего нет в каталоге