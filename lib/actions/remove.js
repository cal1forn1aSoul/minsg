const fs = require('fs');
const { fgb, Reset } = require('../util/colors');

module.exports = file => {
  let recursive = file.includes('/') ? { recursive: true } : {};

  if (fs.existsSync(file)) {
    fs.rmdir(file, recursive , err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${fgb.Green}removed${Reset} ${file} ${file.includes('.') ? `${fgb.Cyan}File${Reset}` : `${fgb.White}Folder${Reset}`} successfully.`);
      } 
    })
  } else {
    console.log(`${fgb.Red}failed${Reset} ${file.includes('.') ? `${fgb.Cyan}File${Reset}` : `${fgb.White}Folder${Reset}`} does not exist.`);
  }
}