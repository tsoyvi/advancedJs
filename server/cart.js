const add = (cart, req) => {
  cart.push(req.body);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};

const change = (cart, req) => {
// здесь пришлось добавить фильтр для поиска товаров по размеру и цвету
// так конечно не делается и поиск происходит только по id
// но это как выход из моей ошибки по созданию БД товаров
  const find = cart.find((el) => (el.id_product === +req.params.id)
  && (el.color === req.body.color) && (el.size === req.body.size));

  find.quantity += +req.body.quantity;
  return { name: find.product_name, newCart: JSON.stringify(cart, null, 4) };
};

const del = (cart, req) => {
  const find = cart.find((el) => (el.id_product === +req.params.id)
  && (el.color === req.query.color) && (el.size === req.query.size));

  cart.splice(cart.indexOf(find), 1); // удаляем товар

  return { name: find.product_name, newCart: JSON.stringify(cart, null, 4) };
};

module.exports = {
  add,
  change,
  del,
};
