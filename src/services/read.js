const fs = require('fs');
const csv = require('csv-parser');
module.exports = function read() {
    let data = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream('src/database/1oSemestre.csv').on('error', error => {
            reject(error);
        }).pipe(csv()).on('data', (row) => {
            data.push(row)
        }).on('end', () => {
            resolve(data);
        });
    });
}
