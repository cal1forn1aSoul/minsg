const fs = require('fs');

module.exports = (filePath, destinationPath) => {
  fs.rename(filePath, destinationPath, err => {
    if (err) {
      console.log(err);
    }
  })
}