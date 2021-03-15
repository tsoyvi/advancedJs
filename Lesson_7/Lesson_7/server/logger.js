const pointsDir = '..'; // на компе необходимо ставить 2 точки, на другом компе одну точку.   ?????
// это связано как то с powerShell, пока для меня это загадка

const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
  fs.readFile(pointsDir + '/server/db/stats.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
       
      data +=  moment().format('DD MMM YYYY, h:mm:ss a') + " " + name + " " + action + "\n";
      
      fs.writeFile(pointsDir + '/server/db/stats.json', data , (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  })
};

module.exports = logger;
