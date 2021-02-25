class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    // this._goods = [];
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods();
    this.#render();

    // this.sum = 0; // BAD!
  }

  // goodsTotalPrice() { // Very BAD!
  //   this.#goods.forEach((good) => {
  //     this.sum += good.price;
  //   });
  //
  //   document.querySelector('.someBlock').insertAdjacentHTML('beforeend', `Сумма = ${this.sum}`);
  //   // return НО НЕ this.sum!!!
  // }
  //



  // Правильный ответ:
  // return this.#goods.reduce((sum, { price}) => sum + price, 0);

  // Мой вариант => изучить reduce
  goodsTotalPrice() {
    let summ = 0;
    this.#goods.forEach((good) => {
      summ += good.price;
    });
    return summ;
  }


  getTotalWithDiscount(discount) {
    return this.goodsTotalPrice() * discount / 100;
  }



  #fetchGoods() {
    this.#goods = [
      { id: 1, title: 'Notebook', price: 20000 },
      { id: 2, title: 'Mouse', price: 1500 },
      { id: 3, title: 'Keyboard', price: 5000 },
      { id: 4, title: 'Gamepad', price: 4500 },
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {

      const productObject = new ProductItem(product); // создаем карточку товара как отдельный объект 

      console.log(productObject);

      this.#allProducts.push(productObject); // добавляем в массив созданный объект-карточку

      block.insertAdjacentHTML('beforeend', productObject.render()); // добавляем в разметку html сгенерированный код карточки
    });
  }
}



class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();


console.log(productList.goodsTotalPrice()); // сумма в ProductList.#goods
console.log(productList.getTotalWithDiscount(10)); // сколько скинем при скидке 10%




// Корзина примерный набросок

class CartList {

  constructor(container = '.btn-cart') {
  }

  addToCart(product) { // добавить в корзину
    
  }

  removeFromCart(product) { // удалить из корзины
    
  }

  countCart () { // количество товаров в корзине

  }


}


class CartItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div>
            </div>`;
  }

  renderIcon() { // количество товаров в корзине отображается на иконке
    return `<div>
            </div>`;
  }


}





const cartList = new CartList();



//cartList.addToCart({ id: 4, title: 'Gamepad', price: 4500 });


// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = ({ title, price }, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${title}</h3>
//                   <p>${price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
