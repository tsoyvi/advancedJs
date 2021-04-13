const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');

const app = express();

app.use(express.json());
app.use('/', express.static('./dist/'));
app.use('/api/cart', cartRouter);

// запрос на мужские товары
app.get('/api/products_male', (req, res) => {
  fs.readFile('./server/db/catalog_male.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

// запрос на женские товары
app.get('/api/products_female', (req, res) => {
  fs.readFile('./server/db/catalog_female.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
