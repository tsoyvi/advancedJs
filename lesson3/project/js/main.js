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

  constructor(cart, container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
    this.cart = cart;

    this.#getProducts()
      .then((data) => {

        console.log(data);

        this.#goods = [...data];
        this.#render();
      });

    this.#init();
  }


  #init() {
    document.querySelector(this.container).addEventListener('click', event => {
      if (event.target.classList.contains('buy-btn')) {
        this.cart.addProduct(event.target);

      }
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
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.productName}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn" data-id="${this.id}"
                    data-name="${this.productName}"
                    data-price="${this.price}">Купить</button>
              </div>
          </div>`;
  }
}



/****************************************************** */

class ProductCart {
  #goods;

  constructor(container = ".cart-block", url = "/getBasket.json") {
    this.container = container;
    this.#goods = [];
    this.allProducts = [];

    this.#getProductCart(url)
      .then((data) => {
        this.#goods = [...data.contents];
        this.#render();
      });

    this.#init();
  }

  #init() {
    document.querySelector(this.container).addEventListener('click', event => {
      if (event.target.classList.contains('del-btn')) {
        this.removeProduct(event.target);
      }
    })

    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
  }

  cartCount() {
    return this.allProducts.reduce((sum, { quantity }) => sum + quantity, 0);
  }

  cartBlockText(str = "") {
    let elCartBlock = document.querySelector(".cart-empty");
    elCartBlock.innerText = str;
  }

  updateHTMLCartCount() {
    let el = document.querySelector(".count-cart");
    let count = this.cartCount();
    el.innerText = count;

    if (count == 0) {
      el.classList.add("invisible");
      this.cartBlockText("Корзина пока пуста!");
    } else if (count > 0 && el.classList.contains("invisible")) {
      el.classList.remove("invisible");
      this.cartBlockText();
    }
  }



  addProduct(target) {

    this.#getProductCart('/addToBasket.json')
      .then(data => {

        if (data.result === 1) {

          let productId = +target.dataset['id'];
          let find = this.allProducts.find(product => product.id === productId);
          if (find) {
            find.quantity++;
            this.#updateCart(find);

          } else {

            let product = {
              id_product: productId,
              price: +target.dataset['price'],
              product_name: target.dataset['name'],
              quantity: 1
            };

            // Скопипастил блок
            // goods - это своего рода "опорный" массив, отражающий список товаров, которые нужно отрендерить.
            // При добавлении нового товара, нас интересует только он один.

            this.#goods = [product];

            // далее вызывая метод render, мы добавим в allProducts только его, тем самым избегая лишнего перерендера.

            this.#render();
          }

          this.updateHTMLCartCount(); // обновляем иконку количество в корзине

        } else {
          alert('Error');
        }


      })

  }


  removeProduct(target) {
    this.#getProductCart('/deleteFromBasket.json')
      .then(data => {
        if (data.result === 1) {
          let productId = +target.dataset['id'];
          let find = this.allProducts.find(product => product.id === productId);
          if (find.quantity > 1) { // если товара > 1, то уменьшаем количество на 1
            find.quantity--;
            this.#updateCart(find);
          } else { // удаляем
            this.allProducts.splice(this.allProducts.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
          }
          this.updateHTMLCartCount(); // обновляем иконку количество в корзине
        } else {
          alert('Error');
        }
      })
  }


  #updateCart(product) {
    let block = document.querySelector(`.cart-item[data-id="${product.id}"]`);
    block.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
    block.querySelector('.product-price').textContent = `${product.quantity * product.price} ₽`;
  }


  #getProductCart(url) {
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
      this.allProducts.push(productObject);
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
const productCart = new ProductCart();

const productList = new ProductList(productCart);



