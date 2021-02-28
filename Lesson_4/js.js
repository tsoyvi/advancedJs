'use strict';

let pEl = document.querySelector('.p1');
let divEl = document.querySelector(".answer1");
let divEl2 = document.querySelector(".answer2");



divEl.innerText = pEl.innerText.replaceAll("\'", "\""); //заменяем все одинарные кавычки на двойные

//divEl2.innerText = pEl.innerText.replaceAll(/^'|(\s)'|'(\s)|'$/g, '$1"$2'); //заменяем все одинарные кавычки на двойные кроме aren't одинарная кавычка не заменялась на двойную

divEl2.innerText = pEl.innerText.replaceAll(/\B'|'\B/g, "\""); //заменяем все одинарные кавычки на двойные кроме aren't одинарная кавычка не заменялась на двойную
