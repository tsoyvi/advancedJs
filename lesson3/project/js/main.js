const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Перевести на Promise НЕ ИСПОЛЬЗОВАТЬ fetch

let getRequest = (url) => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error ' + xhr.status + ' ' + xhr.statusText);
        } else {
          resolve(xhr.responseText);
        }
      }
    }
    xhr.send();
  });
};


// тест / вроде работает ))
//getRequest(`${API}/catalogData.json`)
//  .then(
//    response => alert(`${response}`),
//    error => alert(`${error}`)
//  );



///////////////////////////////////////

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#getProducts()
      .then((data) => {

        console.log (data);

        this.#goods = [...data];
        this.#render();
      });
  }

  goodsTotalPrice() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }


  #getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      // console.log(productObject);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.productName = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.productName}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}



/****************************************************** */

class ProductCart {
  #goods;
  #allProducts;

  constructor(container = ".cart-block", url = "/getBasket.json") {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
    this.amount = 0; // !!!!!!!!!
    this.countGoods = 0; // !!!!!!!!!!!

    this.#getProducts(url)
      .then((data) => {
        
        console.log (data);
        this.amount = data.amount;
        this.countGoods = data.countGoods;

        this.#goods = [...data.contents];

        this.#render();
      });
  }


  #getProducts(url) {
    return fetch(API + "" + url)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }


  #render() {
    const block = document.querySelector(this.container);
    this.#goods.forEach((product) => {
      const productObject = new CartItem(product);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }



}


// Никак не получается наследование
// Нужно сначала тренироваться на простых задачках


class CartItem {

  constructor(product, img = 'https://placehold.it/50x37') {
    
    this.productName = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
    this.quantity = product.quantity;

  }

  render() {
    return `<div class="cart-item" data-id="${this.id}">
      <div class="product-bio">
        <img src="${this.img}" alt="Some image">
          <div class="product-desc">
            <p class="product-title">${this.productName}</p>
            <p class="product-quantity">Количество: ${this.quantity}</p>
            <p class="product-single-price">${this.price} за ед.</p>
          </div>
    </div>
        <div class="right-block">
          <p class="product-price">${this.quantity * this.price} ₽</p>
          <button class="del-btn" data-id="${this.id}">&times;</button>
        </div>
      </div>`;
  }

}







/********************************************************** */
const productList = new ProductList();


const productCart = new ProductCart();
