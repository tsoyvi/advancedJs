const pointsDir = '.'; // ????? на одном компе необходимо ставить 2 точки, на другом компе одну точку.   
// думаю это связано как то куда устанавливаются модули node.js

const moment = require('moment');
const fs = require('fs');



function checkFile(fileName) {
  console.log(fileName);


  return new Promise(function (resolve, reject) {

    fs.stat(fileName, (err, stats) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    })
  });


}

const createFile = (fileName) => {

  return new Promise(function (resolve, reject) {
    fs.open(fileName, 'w', (err, stats) => {
      if (err) {
        reject(false);
      } else {

        const arr = [];
 
        fs.writeFile(fileName, JSON.stringify(arr, null, 4), (err) => {
          if (err) {
            console.log(err);
          }
        });


        resolve(true);
      }
    })
  });

}


const writeFile = (fileName, name, action) => {

  fs.readFile(fileName, 'utf-8', (err, data) => {

    if (err) {
      console.log(err);
    } else {

      const log = JSON.parse(data);
      log.push({
        time: moment().format('DD MMM YYYY, h:mm:ss a'), // не много скомуниздил код )))
        prod_name: name,
        action: action,
      }); 
      fs.writeFile(fileName, JSON.stringify(log, null, 4), (err) => {
        if (err) {
          console.log(err);
        }
      });

    }
  })

}



function logger(name, action) {
  let fileName = pointsDir + '/server/db/stats.json';

  checkFile(fileName) // проверяем наличие файла
    .then(
      response => { // если файл есть начинаем запись в него
        writeFile(fileName, name, action);
      },
      error => { // если файл не найден
        createFile(fileName).then( // задаем файл

          response => { // файл создан, начинаем запись в него 
            writeFile(fileName, name, action);
          },
          error => {// не удалось создать файл , выводим ошибку
            console.log("Ошибка создания файла - " + fileName);
          }

        )
      }

    );


};

module.exports = logger;
