// const foo = require('./func/');
// const foo = require('./func');
// const { a, b } = require('./func');
// const os = require('os');
// const moment = require('moment');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }
    if (req.url === '/api/users') {
        fs.readFile('db.json', 'utf-8', (err, data) => {
            if (err) console.log(err);
            else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(8082);
server.on('connection', (socket) => {
    // console.log('New connection!', socket);
});

// const users = [{name: 'Ann', age: 25}];

// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) console.log(err);
// });

// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else {
//         const list = JSON.parse(data);
//
//         list.push({name: 'Vasya', age: 30});
//
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//             if (err) console.log(err);
//         });
//     }
// });

// console.log(a(10));
// console.log(b(10));
// console.log(foo.a(10));
// console.log(foo.b(10));
// console.log(foo(10));
// console.log(moment());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

// C.R.U.D. // ../users/
// post
// get
// put / patch
// delete
