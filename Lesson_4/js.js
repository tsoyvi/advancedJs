/*
1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
a. Имя содержит только буквы.
b. Телефон имеет вид +7(000)000-0000.
c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
d. Текст произвольный.
e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
*/


'use strict';

let pEl = document.querySelector('.p1');
let divEl = document.querySelector(".answer1");
let divEl2 = document.querySelector(".answer2");


//1
divEl.innerText = pEl.innerText.replaceAll("\'", "\""); //заменяем все одинарные кавычки на двойные

//2
//divEl2.innerText = pEl.innerText.replaceAll(/^'|(\s)'|'(\s)|'$/g, '$1"$2'); //заменяем все одинарные кавычки на двойные кроме aren't одинарная кавычка не заменялась на двойную
divEl2.innerText = pEl.innerText.replaceAll(/\B'|'\B/g, "\""); //заменяем все одинарные кавычки на двойные кроме aren't одинарная кавычка не заменялась на двойную



// 3

const inputNameCheck = (el) => {
    console.log(el.value);

    let  regexp = /^[A-zА-яЁё]+$/gi;
    console.log((regexp.test(el.value)));

}

const inputPhoneCheck = (el) => {
    console.log(el.value);
}

const inputEmailCheck = (el) => {
    console.log(el.value);
}

/*
const inputTextareaCheck = (el) => {
   
}
*/

const btnEvent = (event) => {
    let inputNameEl = document.querySelector('[name="name"]');
    let inputPhoneEl = document.querySelector('[name="phone"]');
    let inputEmailEl = document.querySelector('[name="email"]');

    if (inputNameCheck(inputNameEl)) { alert("Ok"); }

    if (inputPhoneCheck(inputPhoneEl)) { alert("Ok"); }

    if (inputEmailCheck(inputEmailEl)) { alert("Ok"); }



}


let btnEl = document.querySelector(".button-send");
btnEl.addEventListener("click", btnEvent);

