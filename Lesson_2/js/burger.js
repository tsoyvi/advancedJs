'use strict';

class Hamburger {
    constructor() { //!!!!!
        // this.size = size;
        // this.stuffing = stuffing;
        this.topping = [];

        this.BurgerGoods = []; // размер бургера коллекция получаемая с сервера
        this.stuffingGoods = []; // начинки бургера коллекция получаемая с сервера
        this.toppingGoods = []; // приправы коллекция получаемая с сервера

        this.#fetchBurger(); // подгружаем данные с сервера

        this.renderBurgerGoods(".result"); // !!!!!!!!!!!!!!! не знаю на сколько это правильно !!!!!!!!!!!!!!!

        this.eventListener(); // обработчик событий

    }


    // не знаю можно ли обращаться из class-ов к html и брать из тегов данные
    // но попробовал сделать  
    //
    //В общем Получилось не очень... Будем учиться )))


    /**
     *  // Добавить добавку 
     */
    addTopping(topping) {
        this.topping.push(topping);
    }

    /**
     * // Убрать добавку
     */
    removeTopping(topping) {
        this.topping = this.topping.filter((arr) => {
            return arr != topping;
        });
    }


    /**
     * Получить список добавок 
     * @param {*} topping 
     */
    // 
    getToppings(topping) {
        return this.topping;
    }

    getToppingsListText() {
        let str = "";
        this.getToppings().forEach(el => {
            if (str != "") str += " и ";
            str += el.title;
        });
        return str != "" ? str : 'без специй';
    }


    /**
     * Пробегаемся по всем input, на основе выбранных выбираем объект из полученных коллекций с сервера
     * Переписать на document.querySelectorAll("[name =]:checked")
     */
    searchCheckedEl(name, obj) {
        // Старый г-о код
        /* let inputEl = document.getElementsByName(name);
              for (let i = 0; i < inputEl.length; i++) {
            if (inputEl[i].checked) {
                return obj[inputEl[i].dataset.index];
            };
        };
        */ //***/ Новый г-о код ))) */
        let inputEl = document.querySelector(`input[name="${name}"]:checked`);
        if (inputEl) return obj[inputEl.dataset.index];

        return { id: 0, title: 'Выберите состав', price: 0, calorie: 0 };
    }


    /**
     * Узнать выбранный размер гамбургера 
     * Возвращает объект с выбранным размером гамбургера 
     */
    getBurgerSize() {
        return this.searchCheckedEl("burgerSize", this.BurgerGoods);
    }

    /**
     * Узнать начинку гамбургера 
     * Возвращает объект с выбранной начинкой гамбургера 
     */
    getStuffing() {
        return this.searchCheckedEl("burgerStuffing", this.stuffingGoods);
    }


    /**
     * Получаем выбранный состав бургера
     */
    getListOfBurger() {
        let arr = [this.getBurgerSize(), this.getStuffing()];
        return arr.concat(this.getToppings());
    }

    /**  
     * // Узнать цену
     * 
     */
    calculatePrice() {
        let summ = 0;
        this.getListOfBurger().forEach(el => {
            summ += el.price;
        });
        return summ;
    }

    /**
     * // Узнать калорийность
     * 
     */
    calculateCalories() {
        let calories = 0;
        this.getListOfBurger().forEach(el => {
            calories += el.calorie;
        });
        return calories;
    }


    #fetchBurger() {
        this.BurgerGoods = [
            { id: 1, title: 'Маленький', price: 50, calorie: 20 },
            { id: 2, title: 'Большой', price: 100, calorie: 40 },
        ];

        this.stuffingGoods = [
            { id: 1, title: 'c сыром', price: 10, calorie: 20 },
            { id: 2, title: 'c салатом', price: 20, calorie: 5 },
            { id: 3, title: 'c картофелем', price: 15, calorie: 10 },
        ];

        this.toppingGoods = [
            { id: 1, title: 'приправа', price: 15, calorie: 0 },
            { id: 2, title: 'майонез', price: 20, calorie: 5 },
        ];

    }


    renderBurgerGoods(elementToAdd) {

        const block = document.querySelector(elementToAdd);
        block.insertAdjacentHTML("beforebegin", this.renderBurgerSizeHTML()); // генерируем выбор размера бургера
        block.insertAdjacentHTML("beforebegin", this.renderBurgerStuffingHTML()); // генерируем начинку бургера
        block.insertAdjacentHTML("beforebegin", this.renderBurgerToppingHTML(this.toppingGoods)); // генерируем приправы бургера

    }


    // пока не придумал как избавиться от поверяющегося кода.
    renderBurgerSizeHTML() {
        let str = '<div class="select-size"><h3>Выберите размер Гамбургера</h3>';
        this.BurgerGoods.forEach(function (burgerGoods, index) {
            str += `<label class="select-burger"><input type="radio" name="burgerSize" 
            data-index="${index}">${burgerGoods.title}</label>`;
        });
        return str + "</div>";
    }

    renderBurgerStuffingHTML() {
        let str = '<div class="select-stuffing"><h3>Выберите начинку Гамбургера</h3>';
        this.stuffingGoods.forEach(function (stuffing, index) {
            str += `<label class="select-burger"><input type="radio" name="burgerStuffing" data-index="${index}">${stuffing.title}</label>`;
        });
        return str + "</div>";
    }

    renderBurgerToppingHTML(topping) {
        let str = '<div class="select-topping"><h3>Выберите приправы для Гамбургера</h3>';
        topping.forEach(function (topping, index) {
            str += `<label class="select-burger"><input type="checkbox" name="burgerTopping" 
            data-index="${index}">${topping.title}</label>`;
        });
        return str + "</div>";
    }
    //***************************************************************** */



    eventListener() { // назначаем слушатель событий на все наши инпуты  /// Не знаю как лучше сделать....

        let element = document.querySelectorAll("input");
        element.forEach(el => {


            el.addEventListener("click", event => { // назначаем события на приправы // наверное лучше сделать отдельный querySelectorAll() на них, но это я думаю замедлит приложение

                if (event.target.checked && event.target.name == "burgerTopping") {
                    this.addTopping(this.toppingGoods[event.target.dataset.index]);
                } else if (event.target.name == "burgerTopping") {
                    this.removeTopping(this.toppingGoods[event.target.dataset.index]);
                }


                this.generateHtmlResult();

            });

        });
    }

    //  лучше использовать getElementsByName() или document.querySelectorAll("[name =]") ?
    // ответ: лучше  document.querySelectorAll("[name =]") более универсальная и современная

    renderHtmlResult() {
        return `Выбран ${this.getBurgerSize().title} гамбургер ${this.getStuffing().title}, специи - ${this.getToppingsListText()} <br>
                 стоимость - ${this.calculatePrice()} руб. калорийность ${this.calculateCalories()} КДж`;
    }

    generateHtmlResult() {
        const block = document.querySelector(".result");
        block.innerHTML = this.renderHtmlResult();
    }




}


let hamburger = new Hamburger();